/*--- SUGAR SYNTAX ---*/

let usuario = {
    name: "Santiago",
    edad: 23,
    comision: 37555
};

// destructuring
function leerMisDatos({ name, edad, comision }) {
    console.log(`Soy ${name} y tengo ${edad} años, comision: ${comision}`)
    console.log(texto);
};

const { comision, edad } = usuario;
console.log("Samuel: ", comision, edad);

{
    // acceder de forma dinamica a la propiedad de un objeto
    let datosComision = {
        comision: "37555",
        curso: "React JS",
        profesor: "Salkin Santiago",
        estado: "en progreso"
    };

    let campoModificar = "estado";
    let valor = "completo";

    //propiedades dinamicas de un objeto
    datosComision[campoModificar] = valor
    console.log(datosComision);
}


/*--- POLYFILS Y lA RETROCOMPATIBILIDAD---*/
/*
function suma (a,b) {
    return a + b;
}

let num1 = 5;
let num2 = 10;

if (userAgent !== "ie") {
    alert (multiplicar (num1, num2));
} else {
}
*/

