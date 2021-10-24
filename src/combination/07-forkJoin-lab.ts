import {of, Observable, forkJoin} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {catchError} from "rxjs/operators";

const GITHUB_API_URL: string = 'https://api.github.com/users';
const GITHUB_USER = 'DevilRyu';

const usuario: Observable<any> = ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`);
const repos: Observable<any> = ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`);
const gists: Observable<any> = ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`);

const observables: readonly any[] = [usuario, repos, gists];

forkJoin(observables).pipe(
    catchError((err: any) => of(err.message))
).subscribe(console.log)
