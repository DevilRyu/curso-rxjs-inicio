import {Observable, Observer, of} from 'rxjs';

const observer: Observer<any> = {
    next: (value: number) => console.log('next', value),
    error: null,
    complete: () => console.info('Terminamos la secuencia')
};

