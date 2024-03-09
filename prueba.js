let botonCalcular = document.getElementById("buttonResult");

botonCalcular.addEventListener("click", function () {
  let dia = document.getElementById("birthDay");
  let mes = document.getElementById("birthMounth");
  let ano = document.getElementById("birthYear");

  let diaNumero = parseInt(dia.value);
  let mesNumero = parseInt(mes.value) - 1; // Restamos 1 porque los meses en JavaScript van de 0 a 11
  let anoNumero = parseInt(ano.value);

  let fechaNacimiento = new Date(anoNumero, mesNumero, diaNumero);
  let fechaActual = new Date();

  // Calculamos la diferencia en milisegundos entre la fecha actual y la fecha de nacimiento

  // Convertimos la diferencia en milisegundos a años, meses y días
});
let fechaNacimiento = new Date(2001, 8, 21);
let fechaActual = new Date();
let diferencia = fechaActual - fechaNacimiento;
let anos = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25)); // Aproximadamente 365.25 días en un año
let meses = Math.floor(
  (diferencia % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
); // Aproximadamente 30.44 días en un mes
let dias = Math.floor(
  ((diferencia % (1000 * 60 * 60 * 24 * 365.25)) %
    (1000 * 60 * 60 * 24 * 30.44)) /
    (1000 * 60 * 60 * 24)
);

console.log("Edad: " + anos + " años, " + meses + " meses, " + dias + " días");
