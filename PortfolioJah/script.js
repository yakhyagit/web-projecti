let a = 3;
let b = 5;
let c = 7;
let d = 15;

function summa (eka, toka) {
    alert(eka + toka);
}
function vahennys (eka, toka) {
    alert(eka - toka);
}
function kerto (eka, toka) {
    alert(eka * toka);
}
function jako (eka, toka) {
    alert(eka / toka);
}
function laskin_summa() { 
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value)
    summa(eka, toka)
}
function laskin_vahennys() { 
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    vahennys(eka, toka)
}
function laskin_kerto() { 
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    kerto(eka, toka)
}
function laskin_jako() { 
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    jako(eka, toka)
}

/* new functions */

function send(event) {
event.preventDefault();
let birthday = document.getElementById("birthday").value;
let type = document.getElementById("checkbox").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

console.log(birthday);
console.log(type);
console.log(email);
console.log(message);


}

/* New function 2*/

let lista = ["Tehtävä 1", "Tehävä 2"]
function paivitaLista () {
  let ul = document.getElementById("lista")
  ul.innerHTML = "";
  lista.forEach(function(tehtava) {
 let li = document.createElement("li")
 li.innerHTML = tehtava;
 ul.appendChild(li);

  });
} 

function lisaa() {
let uusiTehtava = 
document.getElementById("tehtavaInput").value;
lista.push(uusiTehtava)
paivitaLista();


}

// PÄIVÄMÄÄRÄFUNKTIO
function showDate() {

    const now = new Date();

    // Päivämäärä
    const date =
        now.getDate() + "." +
        (now.getMonth() + 1) + "." +
        now.getFullYear();

    // Aika
    const time =
        now.getHours() + "." +
        now.getMinutes() + "." +
        now.getSeconds();

    // Päivä ja aika
    const full = date + " klo " + time;

    // Viikonpäivät
    const weekdays = [
        "sunnuntai",
        "maanantai",
        "tiistai",
        "keskiviikko",
        "torstai",
        "perjantai",
        "lauantai"
    ];

    // Kuukaudet
    const months = [
        "tammikuu",
        "helmikuu",
        "maaliskuu",
        "huhtikuu",
        "toukokuu",
        "kesäkuu",
        "heinäkuu",
        "elokuu",
        "syyskuu",
        "lokakuu",
        "marraskuu",
        "joulukuu"
    ];

    const weekday = weekdays[now.getDay()];
    const month = months[now.getMonth()];

    // Tulostus div-elementteihin
    document.getElementById("paivamaara").innerHTML =
        "Päivämäärä: " + date;

    document.getElementById("aika").innerHTML =
        "Aika: " + time;

    document.getElementById("paivaJaAika").innerHTML =
        "Päivä ja aika: " + full;

    document.getElementById("viikonpaiva").innerHTML =
        "Viikonpäivä: " + weekday;

    document.getElementById("kuukausi").innerHTML =
        "Kuukausi: " + month;
}

paivitaLista();
