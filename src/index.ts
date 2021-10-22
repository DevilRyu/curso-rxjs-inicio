import {Observable, Observer, Subscription} from 'rxjs';

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete')
};

