import {fromEvent, Observable, of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {catchError, map, pluck, tap, mergeMap} from "rxjs/operators";

// Helper
const peticionHttpLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1',userPass).pipe(
    pluck('response','token'),
    catchError(err => of(err))
);

// creando un formulario
const form: HTMLFormElement = document.createElement('form');
const inputEmail: HTMLInputElement = document.createElement('input');
const inputPass: HTMLInputElement = document.createElement('input');
const submitBtn: HTMLButtonElement = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$: Observable<any> = fromEvent<SubmitEvent>(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    mergeMap(peticionHttpLogin)
);

submitForm$.pipe(
).subscribe(token => {
    console.log(token);
});
