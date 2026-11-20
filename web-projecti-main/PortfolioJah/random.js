
function noppa() {

  
  let numero = Math.floor(Math.random() * 6) + 1;

  document.getElementById("tulos").innerHTML =
    "Saatu numero: " + numero;

}

function lotto() {

  let lottoNumerot = [];

  while(lottoNumerot.length < 7){

    let random = Math.floor(Math.random() * 40) + 1;

    if(!lottoNumerot.includes(random)){

      lottoNumerot.push(random);

    }

  }

  document.getElementById("lottoTulos").innerHTML =
    "Lottonumerot: " + lottoNumerot.join(", ");

  let käyttäjänNumerot = [

    Number(document.getElementById("n1").value),
    Number(document.getElementById("n2").value),
    Number(document.getElementById("n3").value),
    Number(document.getElementById("n4").value),
    Number(document.getElementById("n5").value),
    Number(document.getElementById("n6").value),
    Number(document.getElementById("n7").value)

  ];


  let oikein = 0;


  for(let numero of käyttäjänNumerot){

    if(lottoNumerot.includes(numero)){

      oikein++;

    }

  }


  document.getElementById("oikein").innerHTML =
    "Arvasit oikein " + oikein + " numeroa";

}