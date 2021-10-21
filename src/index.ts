import { Observable, Observer, } from 'rxjs';

const observer: Observer<any> = {
    next: (value: any) => console.log('next', value),
    error: null,
    complete: () => console.info('Terminamos la secuencia')
};

