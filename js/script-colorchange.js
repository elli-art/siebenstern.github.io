'use strict';

const starColor = document.querySelectorAll(".choosecolor");
//console.log(starColor);

const starColorArray = Array.from(starColor);
//console.log(starColorArray);

let einfaerbenItems = document.querySelector(".urspungsfarbe"); 
console.log(einfaerbenItems);

let einfaerbenTexte = document.querySelectorAll(".farbtexte");

let meineFarbe;

// Funktion Farbauswahl aus den Sternen

function farbeWaehlen () {
    for(let j=0; j<starColorArray.length; j++){
    starColorArray[j].addEventListener("click", function auswahl(elem) {
        let meinIndex = elem.target;
        //console.log(meinIndex);

        let meinStern = meinIndex.parentNode;
        console.log(meinStern);

        let meineSternWahl = meinStern.closest('div > *');
        console.log(meineSternWahl);

        let meineFarbKlassen = meineSternWahl.classList;

        meineFarbe = meineFarbKlassen.item(0);  
        return
    })
    
    
} return meineFarbe;
};


console.log(farbeWaehlen());



let farbenArray = Array.from(einfaerbenItems);
console.log(farbenArray);

let farbeNeu = farbenArray.concat('farbe-neu');
console.log(farbeNeu);

// Funktion Logo Einfärben
      
function einfaerben() {
document.addEventListener("click", function () {

farbeWaehlen();

let farbKlasse = farbeNeu[0];
console.log(farbKlasse);

einfaerbenItems.classList.add(farbKlasse);
console.log(einfaerbenItems);
console.log(meineFarbe);

//farbKlasse.style.fill = "currentColor";

if (typeof meineFarbe === 'undefined') {einfaerbenItems.setAttribute('style', 'color:#ff4655');} //Stern schwarz


else if (meineFarbe !== 'undefined') {
switch (true)  {

       case (meineFarbe == 'icon-stern-rot') : 
       einfaerbenItems.setAttribute('style', 'color:#ff4655'); 
       einfaerbenTexte.forEach(elem => elem.setAttribute('style', 'color:#ff4655'));
       $('#square01').css("fill", "#ff4655")
       $('#square02').css("fill", "#ff4655")
       break;

        case (meineFarbe == 'icon-stern-blau') : 
        einfaerbenItems.setAttribute('style', 'color:#006eb7');
        einfaerbenTexte.forEach(elem => elem.setAttribute('style', 'color:#006eb7'));
        $('#square01').css("fill", "#006eb7")
       $('#square02').css("fill", "#006eb7")
       break;

        case (meineFarbe == 'icon-stern-eiszeit') : 
        einfaerbenItems.setAttribute('style', 'color:#30bbda');
        einfaerbenTexte.forEach(elem => elem.setAttribute('style', 'color:#30bbda'));
        $('#square01').css("fill", "#30bbda")
       $('#square02').css("fill", "#30bbda")
       break;

        case (meineFarbe == 'icon-stern-senfgelb') : 
        einfaerbenItems.setAttribute('style', 'color:#fbc900');
        einfaerbenTexte.forEach(elem => elem.setAttribute('style', 'color:#fbc900'));
        $('#square01').css("fill", "#fbc900")
       $('#square02').css("fill", "#fbc900")
       break;

        case (meineFarbe == 'icon-stern-coolgrey') : 
        einfaerbenItems.setAttribute('style', 'color:#85888c');
        einfaerbenTexte.forEach(elem => elem.setAttribute('style', 'color:#85888c'));
        $('#square01').css("fill", "#85888c")
       $('#square02').css("fill", "#85888c")
       break;

        case (meineFarbe == 'icon-stern-braun') : 
        einfaerbenItems.setAttribute('style', 'color:#9e4800');
        einfaerbenTexte.forEach(elem => elem.setAttribute('style', 'color:#9e4800'));
        $('#square01').css("fill", "#9e4800")
       $('#square02').css("fill", "#9e4800")
       break;

        case (meineFarbe == 'icon-stern-tannengruen') : 
        einfaerbenItems.setAttribute('style', 'color:#008873');
        einfaerbenTexte.forEach(elem => elem.setAttribute('style', 'color:#008873'));
        $('#square01').css("fill", "#008873")
       $('#square02').css("fill", "#008873")
       break;

        default: einfaerbenItems.setAttribute('style', 'color:#4be2C9'); //mint
    }
} else {console.log('irgendetwas ist schiefgelaufen')}


});   

}

einfaerben() /* */;



