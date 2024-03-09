let botonCalcular = document.getElementById("buttonResult");

botonCalcular.addEventListener("click", function () {
  let dia = document.getElementById("birthDay");
  let mes = document.getElementById("birthMounth");
  let ano = document.getElementById("birthYear");
  let resustadoAnos = document.getElementById("resultadoAnos");
  let resultadoMeses = document.getElementById("resultadoMeses");
  let resultadoDias = document.getElementById("resultadoDias");
  let estiloAñoIncorrecto = document.getElementById(
    "incorrect-style-text-year"
  );
  let estiloDiaIncorrecto = document.getElementById("incorrect-style-text-day");
  let estiloMesIncorrecto = document.getElementById(
    "incorrect-style-text-mounth"
  );
  let estilosIncorrectosCabeza = document.querySelectorAll(
    "#incorrectDay, #incorrectMounth, #incorrectYear"
  );

  let diaNumero = parseInt(dia.value);
  let mesNumero = parseInt(mes.value) - 1; // Restamos 1 porque los meses en JavaScript van de 0 a 11
  let anoNumero = parseInt(ano.value);

  let fechaActual = new Date();
  let anoActual = fechaActual.getFullYear();
  let fechaNacimiento = new Date(anoNumero, mesNumero, diaNumero);
  let diferencia = fechaActual - fechaNacimiento;

  let anos = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
  let meses = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30.44)
  );
  let dias = Math.floor(
    ((diferencia % (1000 * 60 * 60 * 24 * 365.25)) %
      (1000 * 60 * 60 * 24 * 30.44)) /
      (1000 * 60 * 60 * 24)
  );
  if (diaNumero >= 1 && diaNumero <= 31) {
    console.log(diaNumero);
  } else {
    meses = "--";
    dias = "--";
    anos = "--";
  }
  if (dia.value === "" || (diaNumero >= 1 && diaNumero <= 31)) {
    estiloDiaIncorrecto.classList.add("oculto");
  } else {
    estiloDiaIncorrecto.classList.remove("oculto");
  }

  if (mesNumero >= 1 && mesNumero <= 12) {
    console.log(mesNumero);
  } else {
    meses = "--";
    dias = "--";
    anos = "--";
  }
  if (mes.value === "" || (mesNumero >= 1 && mesNumero <= 12)) {
    estiloMesIncorrecto.classList.add("oculto");
  } else {
    estiloMesIncorrecto.classList.remove("oculto");
  }
  if (
    anoNumero <= 99
      ? (anoNumero += 1900)
      : anoNumero && anoNumero <= anoActual && anoNumero > 1925
  ) {
    console.log(anoNumero);
  } else {
    meses = "--";
    dias = "--";
    anos = "--";
  }
  if (
    anoNumero <= 99
      ? (anoNumero += 1900)
      : anoNumero && anoNumero <= anoActual && anoNumero > 1925
  ) {
    estiloAñoIncorrecto.classList.add("oculto");
  } else {
    estiloAñoIncorrecto.classList.remove("oculto");
  }
  if (ano.value === "") {
    estiloAñoIncorrecto.classList.add("oculto");
  }
  if (anos) {
    resustadoAnos.textContent = anos;
  }
  if (meses) {
    resultadoMeses.textContent = meses;
  }
  if (dias) {
    resultadoDias.textContent = dias;
  }
});
