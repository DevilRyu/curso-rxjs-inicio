import {Observable, Observer, Subject, Subscriber, Subscription} from 'rxjs';

const observer: Observer<any> = {
    next: (value: number) => console.log('next', value),
    error: (err: any) => console.warn('error: ', err),
    complete: () => console.info('Completado')
};
