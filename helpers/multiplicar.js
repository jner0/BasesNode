const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, h = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= h; i++) {
      salida += `${base} X ${i} = ${base * i}\n`;
      consola += `${colors.yellow(base)} ${"X".blue} ${colors.red(i)} ${
        "=".green
      } ${base * i}\n`;
    }
    if (listar) {
      console.log("=====================".green);
      console.log("    Tabla del:".rainbow, base);
      console.log("=====================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
