import {fromEvent, Observable, range} from 'rxjs';
import {map, pluck, mapTo} from 'rxjs/operators';

range(1, 5)
    .pipe(
        map<number, string>((value: number) => (value * 10).toString())
    )
.subscribe(console.log);

const keyup$:Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$:Observable<string> = keyup$.pipe(
    map( (event: KeyboardEvent) => event.code)
);

const keyupPluck$:Observable<any> = keyup$.pipe(
    pluck('target','baseURI')
);

const keyupMapTo$:Observable<string> = keyup$.pipe(
    mapTo('tecla presionada')
);

keyup$.subscribe(console.log);
keyupCode$.subscribe((code:string) => console.log('map', code));
keyupPluck$.subscribe((code:string) => console.log('pluck', code));
keyupMapTo$.subscribe((code:string) => console.log('mapTo', code));
