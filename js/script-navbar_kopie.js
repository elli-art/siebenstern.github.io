"use strict"; 

// Konstaten 
const body = document.querySelector("body");
const navButton = document.querySelector(".first-button");
const navMenu = document.querySelector("#myNav");
const navLinkContainer = document.querySelector(".overlay-content");
const navLinks = document.querySelectorAll(".overlay-link");
const animIcon = document.querySelector(".animated-icon1");
const logoIcon = document.querySelector(".navbar-brand");


// Funktionen

const clearPfad = function () {
  logoIcon.addEventListener("click", function() {
    $('.pfad').hide();
  });
};

let mySection = document.getElementsByTagName("section");

let star = document.querySelector("#sternenwahl7");
let about = document.querySelector("#about");
let services = document.querySelector("#services");
let portfolio = document.querySelector("#portfolio");
let network = document.querySelector("#network");
let contact = document.querySelector("#contact");

const allSectionArray = [];

allSectionArray.push(star);
allSectionArray.push(about);
allSectionArray.push(services);
allSectionArray.push(portfolio);
allSectionArray.push(network);
allSectionArray.push(contact);


console.log(allSectionArray);

const vieportCheck = function() {

  // Check ob Section sichtbar
  const isInViewport = function(elem1, elem2, elem3, elem4, elem5, elem6) {
    //var elem = window.pageYOffset;
    for(let j=1; j<=allSectionArray.length; j++){
    var state = $(".page-section")[j].id;

    console.log(state);

    switch(state){
      case "sternenwahl7":
    // Position Design your star - Check
    var pos1 = elem1.getBoundingClientRect();
    if(pos1.top <= 50 || pos1.bottom <= 110 ) {
      $('.pfad').show().html("<p>Dein Stern</p>");
      console.log('Star is visible in screen');
    }
    else {
      console.log('Star is not visible!');
    };
    break;
   
    case "about": 
    // Position about - Check
    var pos2 = elem2.getBoundingClientRect();
    if(pos2.top <= 50 || pos2.bottom <= 110 ) {
      $('.pfad').show().html("<p>Zu mir</p>");
      console.log('About is visible in screen');
    }
    else {
      console.log('About is not visible!');
    };
    break;
    
    case "services":
    // Position Services - Check
    var pos3 = elem3.getBoundingClientRect();
    if(pos3.top <= 50 || pos3.bottom <= 110 ) {
      $('.pfad').show().html("<p>Von mir</p>")
      console.log('Services is visible in screen');
    }
    else {
      console.log('Services is not visible!')
    };
    break;
  
    case "portfolio": 
    // Position Portfolio - Check
    var pos4 = elem4.getBoundingClientRect();
    if(pos4.top <= 50 || pos4.bottom <= 110 ) {
      $('.pfad').show().html("<p>Für Dich</p>");
      console.log('Porfolio is visible in screen');
    }
    else {
      console.log('Portfolio is not visible!')
    };
    break;
  
    case "network":
    // Position Kontakt - Check
      var pos5 = elem5.getBoundingClientRect();
      if(pos5.top <= 50 || pos5.bottom <= 110 ) {
        $('.pfad').show().html("<p>Mit mir</p>");
        console.log('Kontakt is visible in screen');
      }
      else {
        console.log('Kontakt is not visible!')
      };
    break;
    
    case "contact":
    // Position Netzwerk - Check
      var pos6 = elem6.getBoundingClientRect();
      if(pos6.top <= 50 || pos6.bottom <= 110 ) {
        $('.pfad').show().html("<p>An mich</p>");
        console.log('Netzwerk is visible in screen');
      }
      else {
        console.log('Netzwerk is not visible!')
      };

    break;
    default:
    console.log('Sorry, we are out of ' + state + '.')
      };
/**/}
    };
    
  

    isInViewport(star, about, services, portfolio, network, contact)
    
    




};

body.addEventListener('wheel', vieportCheck);
body.addEventListener('scroll', vieportCheck);

body.addEventListener('touchstart', vieportCheck);
body.addEventListener('touchmove', vieportCheck);
body.addEventListener('touchend', vieportCheck);


const hamburgerAnimation = function() {
    $(document).ready(function () {
     
      $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
        if ($('.animated-icon1').hasClass('open')) {
          $('.pfad').hide();
        } else {
          $('.pfad').show();
        }
        }); 
      }) 
};



function mobileMenu() {
    navMenu.classList.toggle("active");
    navLinkContainer.classList.toggle("active");
};

//--------------------------------------------------------------------
// Funktion Zielpfad aus der Navbar holen
function waehleZiel(e) {
  let ziel = e.target;
  console.log(ziel);
  //ziel.closest('div > a');
  let name = ziel.innerHTML;
  console.log(name);

  const node = document.querySelector(".pfad") 
  $('.pfad').show();
  node.innerHTML = name;
  ziel.closest('span' > '*');

/**/    
    ziel.addEventListener("click", function(){
    animIcon.classList.remove("open"); 
    navMenu.classList.remove("active");
    navLinkContainer.classList.remove("active");
    
    });  
  
};
  

function init() {

    clearPfad();
    hamburgerAnimation();
    
    navButton.addEventListener("click", mobileMenu);
  
    navButton.addEventListener("click", function() {
  
      if (navLinkContainer.addEventListener("click", waehleZiel, true)) {
          navLinks.addEventListener("click", function(){
         
          navMenu.classList.remove("active");
          navLinkContainer.classList.remove("active");
          
        }) 
      } 

    
       else { 
        console.log("nicht gewählt")
      };
  
    });
  }
  
  
  window.onload = init;