const { crearArchivo } = require("./helpers/multiplicar");

// Table de multiplicar del 5

console.clear();

const [, , arg3 = "base=5"] = process.argv;
const [, base = 5] = arg3.split("=");
console.log(base);
// const base = 6;

crearArchivo(base)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
