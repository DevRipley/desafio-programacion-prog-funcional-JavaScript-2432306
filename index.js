// Cronometro utilizando RxJS

const resultado = document.getElementById('Resultado')

const { timer } = rxjs;
const { map } = rxks.operators;

timer(1000, 1000).pipe(map(()=>{
    const ahora = new Date();
    return ahora.toLocaleString();
})).subscribe(valor=> {
    resultado.innerText = valor;
})