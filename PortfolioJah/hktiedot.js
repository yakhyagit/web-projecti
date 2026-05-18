const henkilot = [

    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },

    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: false
    },

    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "Ohjelmistosuunnittelija",
        driversLicense: false
    },

    {
        name: "Semir Sikaläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },

    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
        driversLicense: true
    }

];

const rivit = document.getElementById("rivit");

function LuoRivit() {

    rivit.innerHTML = "";

    henkilot.forEach(henkilo => {

        const rivi = document.createElement("tr");

        const nimi = document.createElement("td");
        nimi.innerHTML = henkilo.name;

        const ika = document.createElement("td");
        ika.innerHTML = henkilo.age;

        const tyo = document.createElement("td");
        tyo.innerHTML = henkilo.job;

        const ajokortti = document.createElement("td");
        ajokortti.innerHTML = henkilo.driversLicense;

        rivi.append(nimi);
        rivi.append(ika);
        rivi.append(tyo);
        rivi.append(ajokortti);

        rivit.append(rivi);

    });

}

LuoRivit();