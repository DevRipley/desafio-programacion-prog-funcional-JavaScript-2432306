// Hacer que el globo crezca utilizando recursión
// https://www.learnrxjs.io/

const globo = document.getElementById('globo');
const explosionSound = document.getElementById('explosion-sound');

const { of } = rxjs;
const { delay, map, take, expand } = rxjs.operators;

of(1).pipe(
    expand(valor => of(valor + 1).pipe(delay(1000))),
    map(valor => `${valor * 100}px`),
    take(10)
).subscribe({
    next: valorCSS => {
        globo.style.width = valorCSS;
        globo.style.height = valorCSS;
        globo.style.borderRadius = valorCSS;
    },
    complete: () => {
        explosionSound.play();
        globo.style.animation = 'explosion 1s forwards';
        setTimeout(() => {
            globo.style.display = 'none';
        }, 1000);
    }
});
