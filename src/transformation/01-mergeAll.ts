import {fromEvent, Observable} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map, pluck, debounceTime, mergeAll} from "rxjs/operators";
import {GithubUser} from "../interfaces/github-user.interface";
import {GithubUsersResp} from "../interfaces/github-users.interface";

// Referencias
const body: HTMLBodyElement = document.querySelector('body');
const textInput: HTMLInputElement = document.createElement('input');
const orderList: HTMLOListElement = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    orderList.innerHTML = '';
    for (const usuario of usuarios) {
        const li: HTMLLIElement = document.createElement('li');
        const img: HTMLImageElement = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor: HTMLAnchorElement = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + '');
        li.append(anchor);

        orderList.append(li);
    }
}

// Streams
const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<object>('target'),
    pluck<any, string>('value'),
    map<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )
    ),
    mergeAll(),
    pluck('items')
).subscribe(mostrarUsuarios);
