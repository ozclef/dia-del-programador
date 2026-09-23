const ahora = new Date();

const inicioDelAño = new Date(ahora.getFullYear(), 0, 1);

const diaDelAño =
    Math.floor(
        (ahora - inicioDelAño) / (1000 * 60 * 60 * 24)
    ) + 1;

console.log(diaDelAño);




