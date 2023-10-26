# Metodos de cadenas mas usados

## Padend y padStart

Sirven para rellenar las cadenas

Si se omite el segundo parametro se rellena con espacios

```javascript
let texto = "5";
let rellenado = texto.padEnd(4, "0");
// rellenado es ahora "5000"
// texto sigue siendo "5"

let texto = "5";
let rellenado = texto.padStart(4, "0");
// rellenado es ahora "0005"
// texto sigue siendo "5"

```
