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