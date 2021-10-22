import {fromEvent, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

const texto: HTMLDivElement = document.createElement('div');
texto.innerHTML = `
    Avast, proud bilge rat. you won't view the bahamas.
    Anchor of a real desolation, love the power!
    Rums hobble with beauty!\ Ahoy, yes.
    How dead. You break like a shark.
    Gar, yer not fighting me without a hunger!
    Ransack me cannibal, ye gutless wind!
    Avast, proud bilge rat. you won't view the bahamas.
    Anchor of a real desolation, love the power!
    Rums hobble with beauty!\ Ahoy, yes.
    How dead. You break like a shark.
    Gar, yer not fighting me without a hunger!
    Ransack me cannibal, ye gutless wind!
    <br/><br/>
    Ahoy, yes.
    How dead. You break like a shark.
    Gar, yer not fighting me without a hunger!
    Ransack me cannibal, ye gutless wind!
    Avast, proud bilge rat. you won't view the bahamas.
    Anchor of a real desolation, love the power!
    Rums hobble with beauty!\ Ahoy, yes.
    How dead. You break like a shark.
    Gar, yer not fighting me without a hunger!
    Ransack me cannibal, ye gutless wind!
    <br/><br/>
    The anchor breaks with fight, view the bahamas.
    Ho-ho-ho! pestilence of riddle.Whine cruelly like a big plunder.Ooh, mark me swa, ye rainy gold!Pirates scream with power!
     Ahoy, yes.
    How dead. You break like a shark.
    Gar, yer not fighting me without a hunger!
    Ransack me cannibal, ye gutless wind!Avast, proud bilge rat. you won't view the bahamas.
    Anchor of a real desolation, love the power!
    Rums hobble with beauty!\ Ahoy, yes.
    How dead. You break like a shark.
    Gar, yer not fighting me without a hunger!
    Ransack me cannibal, ye gutless wind!
    
`;

const body: HTMLBodyElement = document.querySelector('body');
body.append(texto);

const progressBar: HTMLDivElement = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// función que haga el calculo
const calcularPorcentajeScroll = function (event): number {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$: Observable<any> = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$: Observable<any> = scroll$.pipe(
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe((porcentaje) => {
    progressBar.style.width = `${porcentaje}%`
})
