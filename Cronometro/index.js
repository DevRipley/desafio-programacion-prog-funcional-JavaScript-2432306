// Cronómetro utilizando RxJS

console.log("Script cargado");

const resultado = document.getElementById('Resultado');

if (resultado) {
    console.log("Elemento 'Resultado' encontrado");

    const { timer } = rxjs;
    const { map } = rxjs.operators;

    timer(1000, 1000).pipe(
        map(() => {
            const ahora = new Date();
            console.log("Actualizando hora:", ahora.toLocaleString());
            return ahora.toLocaleString();
        })
    ).subscribe(valor => {
        resultado.innerText = valor;
    });
} else {
    console.error("Elemento 'Resultado' no encontrado");
}
