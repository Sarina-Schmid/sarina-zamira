let index;
let personen = undefined;


function showUI(){
    //angaben
    let htmlObj = document.getElementById("angaben");
    htmlObj.innerHTML =
        `Vorname: ${personen.vorname}<br>`+
        `Nachname: ${personen.nachname}<br>`+
        `Herkunft: ${personen.herkunft}<br>`+
        `Alter: ${personen.alter}`;

    //lehre
    htmlObj = document.getElementById("lehre");
    htmlObj.innerHTML =
        `Betrieb: ${personen.lehre.betrieb}<br>`+
        `Beruf: ${personen.lehre.beruf}<br>`+
        `Lehrjahr: ${personen.lehre.lehrjahr}<br>`+
        `Schule: ${personen.lehre.schule}`;

    //Adresse
    htmlObj = document.getElementById("adresse");
    //clear
    htmlObj.innerHTML = "";
    //set
    personen.eigenschaften.adresse.forEach(adresse => {
        htmlObj.innerHTML += `${adresse}<br>`;
    });

    //hobbys
    htmlObj = document.getElementById("hobbys");
    //clear
    htmlObj.innerHTML = "";
    //set
    personen.eigenschaften.hobbys.forEach(hobbys => {
        htmlObj.innerHTML += `${hobbys}<br>`;
    });


    htmlObj = document.getElementById("showIndex");
    //clear
    //set

}



//start app
//Falls der index nicht definiert ist ...
if (personen === undefined){
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    personen = personenListe[index];
    //zeige den Eintrag
    showUI();
}