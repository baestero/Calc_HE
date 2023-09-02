function calcular() {
  let n1 = document.querySelector("#n1");
  let n2 = document.querySelector("#n2");
  let n3 = document.querySelector("#n3");
  let n4 = document.querySelector("#n4");
  let n5 = document.querySelector("#n5");
  let res = document.querySelector("#res");
  let form = document.querySelector(".form");
  let btn2 = document.querySelector(".btn2");

  let HeTrab = 0;
  let HeNoturnaTrab = 0;
  let He100 = 0;

  let salario = Number(n1.value);
  let horasMensais = Number(n2.value);
  HeTrab = Number(n3.value);
  HeNoturnaTrab = Number(n4.value);
  He100 = Number(n5.value);

  let Valorhora = salario / horasMensais;
  let ValorhoraNoturna = Valorhora * 1.2;

  resultado = Valorhora * 1.5 * HeTrab;
  resultado = resultado + ValorhoraNoturna * 1.5 * HeNoturnaTrab;
  resultado = resultado + Valorhora * 2 * He100;

  if (n1.value == "") {
    alert('[ERRO] Preencha os campos "Salario base"');
  } else if (n2.value == "") {
    alert('[ERRO] Preencha os campos "Jornada mensal"');
  } else if (n3.value == "" && n4.value == "" && n5.value == "") {
    alert('[ERRO] Preencha pelo menos um dos campos: "Horas extras"');
  } else {
    res.style.display = "flex";
    form.style.display = "none";
    btn2.style.display = "block";

    res.innerHTML =
      "Valor bruto de horas extras: " +
      resultado.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
  }
}

function recarregarAPagina() {
  window.location.reload();
}
