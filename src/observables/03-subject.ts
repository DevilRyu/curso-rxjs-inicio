import {Observable, Observer, Subject, Subscriber, Subscription} from 'rxjs';

const observer: Observer<any> = {
    next: (value: number) => console.log('next', value),
    error: (err: any) => console.warn('error: ', err),
    complete: () => console.info('Completado')
};

const intervalo$: Observable<number> = new Observable<number>((sub: Subscriber<number>) => {

    const intervalID = setInterval(
        () => sub.next(Math.random()), 1000
    );

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    };

});

/**
 * 1- Casteo múltiple
 * 2- También es un observer
 * 3- Next, error y complete
 */

const subject$: Subject<any> = new Subject<any>();
const mainSubscription: Subscription = intervalo$.subscribe(subject$);

// const subs1:Subscription = intervalo$.subscribe((rnd:number) => console.log('subs1: ',rnd));
// const subs2:Subscription = intervalo$.subscribe((rnd:number) => console.log('subs2: ',rnd));

subject$.subscribe(observer);
subject$.subscribe(observer);

setTimeout(() => {

    subject$.next(10);
    subject$.complete();
    mainSubscription.unsubscribe();

}, 3500);
