


### Platón

* **Nombre:** Platón (Πλάτων) es el nombre por el que lo conocemos. La tradición antigua sostiene que su nombre original era **Arístocles (Aristoklēs)**.
* **Discípulo de Sócrates:** sí. Platón fue uno de los discípulos más conocidos de Sócrates.
* **Maestro de Aristóteles:** sí. Aristóteles estudió en la **Academia de Platón** durante unos 20 años.

Una forma bonita de anotarlo:

```text
Arístocles → Platón
     ↓
discípulo de Sócrates
     ↓
fundador de la Academia
     ↓
maestro de Aristóteles
```

El matiz es que lo de que su nombre original fuera Arístocles procede de **fuentes antiguas posteriores** y no tenemos documentación contemporánea que permita verificarlo con certeza absoluta. Pero como apunte histórico general, sí es la formulación habitual.

---

## Y SÍ: tu idea del día 256 es mejor todavía 😂




> "No voy a decir que el Día del Programador es el 13 de septiembre. Voy a decir que es **el día 256 desde el 1 de enero del año actual**."

**Exactamente.**

Y JavaScript puede calcularlo sin que tú tengas que preocuparte por si el año tiene 365 o 366 días.

Por ejemplo:

```js
const ahora = new Date();

const inicioDelAño = new Date(ahora.getFullYear(), 0, 1);

const diaDelAño =
    Math.floor(
        (ahora - inicioDelAño) / (1000 * 60 * 60 * 24)
    ) + 1;

console.log(diaDelAño);
```

La parte:

```js
ahora.getFullYear()
```

te da:

```text
2026
```

el próximo año:

```text
2027
```

etc.

Y:

```js
new Date(año, 0, 1)
```

significa:

```text
año actual
mes 0 → enero
día 1
```

Así que efectivamente tienes:

```text
2026-01-01
       ↓
día 1

2026-01-02
       ↓
día 2

...

día 256
       ↓
Día del Programador
```

### Y lo chido:


No necesitas hacer:

```js
if (mes === 8 && dia === 13)
```

Ni siquiera necesitas preocuparte por:

```text
365 días
366 días
año bisiesto
12 de septiembre
13 de septiembre
```

----



> **¿Qué número de día del año es hoy?**

Y comparas:

```js
if (diaDelAño === 2 ** 8) {
    // Día del Programador
}
```

🔥

Eso es exactamente lo que yo pondría en mi código:

```js
const PROGRAMMER_DAY = 2 ** 8;
```

porque además **documenta la razón del 256**.


todavía más expresivo:

```js
const PROGRAMMER_DAY = 256; // 2^8
```

Pero personalmente me gusta más:

```js
const PROGRAMMER_DAY = 2 ** 8;
```




> "Ahhh, sí. 256. Día del Programador. 2⁸. Qué cabrón estaba." 😂

Y el sistema seguirá funcionando automáticamente para **2027, 2028, 2029...**, incluidos los años bisiestos, porque el cálculo parte del **1 de enero del año que esté corriendo**.
