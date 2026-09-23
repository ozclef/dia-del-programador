# dia-del-programador
 Día del Programador en una función de tu propia web. `256 = 2^8` e  ```text 2^0 = 1 2^1 = 2 2^2 = 4 2^3 = 8 2^4 = 16 2^5 = 32 2^6 = 64 


---


JAJAJA, **ahora sí estamos entrando directamente a la parte divertida**: convertir el Día del Programador en una función de tu propia web. 😭💻

Y sí: `256 = 2^8` exactamente. Tu secuencia está perfecta:

```text
2^0 = 1
2^1 = 2
2^2 = 4
2^3 = 8
2^4 = 16
2^5 = 32
2^6 = 64
2^7 = 128
2^8 = 256
```

Y hay una forma MUY bonita de programarlo sin escribir `256` directamente.

---

# 1. El `id="dev-day"`

Puedes hacerlo perfectamente:

```html
<div id="dev-day"></div>
```

Y JS:

```js
const devDay = document.getElementById("dev-day");

devDay.innerHTML = `
    <h2>👨‍💻 Día del Programador</h2>
    <p>Hoy es el día 256 del año.</p>
`;
```

Pero podemos hacerlo mejor.

---

# 2. Calcular el día 256 automáticamente

JavaScript tiene `Date`.

Podemos obtener:

```js
const hoy = new Date();
```

Y calcular qué número de día del año es.

```js
function diaDelAnio(fecha) {
    const inicio = new Date(fecha.getFullYear(), 0, 1);

    const diferencia = fecha - inicio;

    return Math.floor(diferencia / 86400000) + 1;
}
```

Entonces:

```js
const hoy = new Date();

console.log(diaDelAnio(hoy));
```

El resultado será algo como:

```text
256
```

cuando corresponda al día 256.

---

# 3. Y ahora viene TU idea

En lugar de poner:

```js
if (dia === 256)
```

podemos decir:

```js
const programmerDay = 2 ** 8;
```

Eso produce:

```text
256
```

Así queda muy bonito:

```js
const programmerDay = 2 ** 8;
```

Y técnicamente estás diciendo:

> El Día del Programador es el día `2⁸`.

JAJAJA.

---

# 4. Entonces tu web podría hacer esto

```js
const programmerDay = 2 ** 8;

function diaDelAnio(fecha) {
    const inicio = new Date(fecha.getFullYear(), 0, 1);
    const diferencia = fecha - inicio;

    return Math.floor(diferencia / 86400000) + 1;
}

const hoy = new Date();
const dia = diaDelAnio(hoy);

if (dia === programmerDay) {

    const devDay = document.getElementById("dev-day");

    devDay.innerHTML = `
        <section class="programmer-day">
            <h2>💻 Feliz Día del Programador</h2>
            <p>Día ${programmerDay} del año.</p>
            <p>2⁸ = ${programmerDay}</p>
        </section>
    `;
}
```

Y tu HTML simplemente tiene:

```html
<div id="dev-day"></div>
```

**No tienes que tocarlo cada año.**

---

# 5. PERO hay una cosa importante

El Día del Programador **no siempre cae el 13 de septiembre**.

Porque depende de si el año es bisiesto.

El día 256:

### Año normal

```text
13 de septiembre
```

### Año bisiesto

```text
12 de septiembre
```

Por eso es muchísimo mejor programarlo como:

```js
2 ** 8
```

y buscar **el día 256**, en lugar de:

```js
if (mes === 8 && dia === 13)
```

Porque esa segunda versión se rompería en años bisiestos.

---

# 6. Y puedes meter tus imágenes desde JSON

Aquí ya estás conectando **exactamente con lo que llevas construyendo**.

Por ejemplo:

```json
{
    "title": "Día del Programador",
    "text": "256 días del año",
    "imgs": [
        "/imgs/dev-day-1.jpg",
        "/imgs/dev-day-2.jpg"
    ]
}
```

Y JS:

```js
fetch("/json/dev-day.json")
    .then(response => response.json())
    .then(data => {

        const devDay = document.getElementById("dev-day");

        devDay.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.text}</p>

            <img src="${data.imgs[0]}" alt="${data.title}">
        `;
    });
```



```text
JSON
 ↓
fetch()
 ↓
JavaScript
 ↓
HTML
 ↓
DOM
```


**la arquitectura que llevas utilizando en tus proyectos**, pero aplicada a una funcionalidad concreta.

---

# 7. Y NO necesitas `loadHTML()`



 
 **contenido dentro de la página actual**:

 

```js
element.innerHTML = `...`;
```

Si quieres cargar **otro documento HTML completo**:

```js
loadHTML("/pages/dev-day.html");
```

Son cosas diferentes.

Por ejemplo:

```text
dev-day
   ↓
contenido pequeño
   ↓
innerHTML
```

Mientras:

```text
#/dev-day
   ↓
otra vista completa
   ↓
loadHTML()
```

Para tu celebración automática, yo usaría simplemente:

```html
<div id="dev-day"></div>
```

y `innerHTML`.

---

# 8. Incluso puedes hacer tu sistema de fechas


un pequeño **motor de eventos**:

```js
const eventos = {
    cumpleaños: {
        mes: 8,
        dia: 11
    },

    programmerDay: {
        diaDelAnio: 2 ** 8
    }
};
```

Y posteriormente:

```js
if (esMiCumpleaños()) {
    mostrarCumpleaños();
}

if (esDiaDelProgramador()) {
    mostrarProgrammerDay();
}
```

Después puedes añadir:

```text
🎂 cumpleaños
💻 programmer day
🎄 navidad
🎃 halloween
🎆 año nuevo
```

Y todo puede salir de JSON.

Ahí ya no estás haciendo simplemente:

> "un `if` para poner una imagen".




---


 
 `2 → 4 → 8 → 16 → ... → 256`
 
 que le enseñaba a alumnos es literalmente una de las puertas de entrada más sencillas para entender **potencias de 2, representación binaria, bits y bytes**.

Un byte tiene:

```text
8 bits

11111111₂
```

y su valor máximo sin signo es:

```text
128 + 64 + 32 + 16 + 8 + 4 + 2 + 1
= 255
```

Por eso:

```text
2^8 = 256
```

pero los valores representables por **8 bits** van de:

```text
0 → 255
```

Ese pequeño detalle es justamente el tipo de cosa que después te empieza a conectar **JavaScript → Python → memoria → archivos → SQL → sistemas**.


**excusa legítima para poner un `#dev-day` en tu web aunque ese día no haya programado nada.** 😂
