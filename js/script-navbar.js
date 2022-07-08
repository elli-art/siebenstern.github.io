'use strict';

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
 /**/ 


/*
const getViewPort = function () {
  mySection = document.getElementsByTagName("section");


  const sectionArray = Array.from(mySection);
  //console.log(sectionArray);
  for (let j=0; j<sectionArray.length; j++) {
  //console.log("die ID heisst " + sectionArray[j].id);
  let sectionId = sectionArray[j].id;
  console.log(sectionId)


  // Check ob Section sichtbar
   function isInViewport (elem1, elem2, elem3, elem4, elem5, elem6) {
  // Position Design your star - Check
  var pos1 = elem1.getBoundingClientRect();
  if(pos1.top >= 0 && pos1.bottom <= window.innerHeight) {
    $('.pfad').show();
		//console.log('Element is fully visible in screen');
	}
	// checking for partial visibility
	else if( pos1.top <= window.innerHeight && pos1.bottom >= 0) {
    $('.pfad').show();
		//console.log('Element is partially visible in screen');
  } 
  else {
    $('.pfad').hide();
    //console.log('Element is not visible!')
  };

  // Position about - Check
  var pos2 = elem2.getBoundingClientRect();
  if(pos2.top >= 0 && pos2.bottom <= window.innerHeight ) {
    $('.pfad').show();
		//console.log('Element is fully visible in screen');
	}
	// checking for partial visibility
	else if(pos2.top <= window.innerHeight && pos2.bottom >= 0) {
    $('.pfad').show();
		//console.log('Element is partially visible in screen');
  }
  else {
    $('.pfad').hide();
    //console.log('Element is not visible!')
  };
  
  // Position Services - Check
  var pos3 = elem3.getBoundingClientRect();
  if(pos3.top >= 0 && pos3.bottom <= window.innerHeight ) {
    $('.pfad').show();
		//console.log('Element is fully visible in screen');
	}
	// checking for partial visibility
	else if( pos3.top <= window.innerHeight && pos3.bottom >= 0) {
    $('.pfad').show();
		//console.log('Element is partially visible in screen');
  }
  else {
    $('.pfad').hide();
    //console.log('Element is not visible!')
  };

  // Position Portfolio - Check
  var pos4 = elem4.getBoundingClientRect();
  if(pos4.top >= 0 && pos4.bottom <= window.innerHeight ) {
    $('.pfad').show();
		//console.log('Element is fully visible in screen');
	}
	// checking for partial visibility
	else if(pos4.top <= window.innerHeight && pos4.bottom >= 0) {
    $('.pfad').show();
		//console.log('Element is partially visible in screen')
  }
  else {
    $('.pfad').hide();
    //console.log('Element is not visible!')
  };

  // Position Kontakt - Check
  var pos5 = elem5.getBoundingClientRect();
  if(pos5.top >= 0 && pos5.bottom <= window.innerHeight ) {
    $('.pfad').show();
		//console.log('Element is fully visible in screen');
	}
	// checking for partial visibility
	else if(pos5.top <= window.innerHeight && pos5.bottom >= 0) {
    $('.pfad').show();
		//console.log('Element is partially visible in screen');
  }
  else {
    $('.pfad').hide();
    //console.log('Element is not visible!')
  };

  
  // Position Netzwerk - Check
  var pos6 = elem6.getBoundingClientRect();
  if(pos6.top >= 0 && pos6.bottom <= window.innerHeight ) {
    $('.pfad').show();
		//console.log('Element is fully visible in screen');
	}
	// checking for partial visibility
	else if(pos6.top <= window.innerHeight && pos6.bottom >= 0) {
    $('.pfad').show();
		//console.log('Element is partially visible in screen');
  }
  else {
    $('.pfad').hide();
    //console.log('Element is not visible!')
  }
  
  }; 


  //document.addEventListener("DOMContentLoaded", isInViewport(star, about, services, portfolio, contact, network));

  
};
};
*/

//document.addEventListener('wheel', getViewPort);
//document.addEventListener('scroll', getViewPort);

let mySection = document.getElementsByTagName("section");
//const sectionArray = Array.from(mySection);

let star = document.querySelector("#sternenwahl7");
let about = document.querySelector("#about");
let portfolio = document.querySelector("#portfolio");
let services = document.querySelector("#services");
let network = document.querySelector("#network");
let contact = document.querySelector("#contact");

const allSectionArray = [];

allSectionArray.push(star);
allSectionArray.push(about);
allSectionArray.push(portfolio);
allSectionArray.push(services);
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
    if(pos1.top <= 300 || pos1.bottom <= 500 ) {
      $('.pfad').show().html("<p>Dein Stern</p>");
      console.log('Star is visible in screen');
    }
    if(pos1.top >= 500 ) {
      $('.pfad').hide();
      console.log('landingpage');
    }
    else {
      console.log('Star is not visible!');
    };
    break;
   
    case "about": 
    // Position about - Check
    var pos2 = elem2.getBoundingClientRect();
    if(pos2.top <= 300 || pos2.bottom <= 500 ) {
      $('.pfad').show().html("<p>Zu mir</p>");
      console.log('About is visible in screen');
    }
    else {
      console.log('About is not visible!');
    };
    break;

    case "portfolio": 
    // Position Portfolio - Check
    var pos3 = elem3.getBoundingClientRect();
    if(pos3.top <= 300 || pos3.bottom <= 500 ) {
      $('.pfad').show().html("<p>Von mir</p>");
      console.log('Porfolio is visible in screen');
    }
    else {
      console.log('Portfolio is not visible!')
    };
    break;
    
    case "services":
    // Position Services - Check
    var pos4 = elem4.getBoundingClientRect();
    if(pos4.top <= 300 || pos4.bottom <= 500 ) {
      $('.pfad').show().html("<p>Für dich</p>")
      console.log('Services is visible in screen');
    }
    else {
      console.log('Services is not visible!')
    };
    break;
  
    case "network":
    // Position Kontakt - Check
      var pos5 = elem5.getBoundingClientRect();
      if(pos5.top <= 300 || pos5.bottom <= 500 ) {
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
      if(pos6.top <= 300 || pos6.bottom <= 500 ) {
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
    
  

    isInViewport(star, about, portfolio, services, network, contact)
    
    




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
/* */
      if ($('.animated-icon1').hasClass('open')) {
        $('.pfad').hide();
      } else {
        $('.pfad').show();
      }
      }); 
    }) 
};
 


//hamburgerAnimation();

// nav from top

/* Open 
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}*/
  /* Close 
function closeNav() {
  document.getElementById("myNav").style.height = "55%";
}
*/
// X-modification
/*
 $(document).ready(function () {

    // Icon-Animation
    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });  
  
});

function iconAnimation () {
  $('.first-button').on('click', function () {
  
    $('.animated-icon1').toggleClass('open');
  });  

}; */

function mobileMenu() {

  $('.outer-link').show();
    navMenu.classList.toggle("active");
    navLinkContainer.classList.toggle("active");
    
    //hamburgerAnimation();
};

//navLinkContainer.addEventListener("click", waehleZiel, true);

//--------------------------------------------------------------------
// Funktion Zielpfad aus der Navbar holen
function waehleZiel(e) {
  let ziel = e.target;
  console.log(ziel);
  //ziel.closest('div > a');
  let name = ziel.innerHTML;
  //eventTag.textContent = name;
  console.log(name);

  //-------------------------------------------------------------------
  // DOM - Manipulation
  // Konstanten
  /**/ 

  
  //const navPfad = document.querySelector(".schriftzugblock");
  //const navBar01 = document.querySelector(".navbar");
  //const node = document.createElement("h3");
  const node = document.querySelector(".pfad")
  //node.classList.add("pfad")
  //node.classList.toggle("active");
  //const textNode = document.createTextNode(".mein Pfad");
  //navPfad.appendChild(node);
  /* const stickyNav = document.createElement("div"); 
  body01.appendChild(stickyNav);
  stickyNav.appendChild(node); */
  //node.classList.add("text-center"); 
  $('.pfad').show();
  node.innerHTML = name;
  /*ziel.closest(".outer-link");*/ 

   
    ziel.addEventListener("click", function(){
    animIcon.classList.remove("open"); 
    navMenu.classList.remove("active");
    navLinkContainer.classList.remove("active");
    $('.outer-link').hide();
    
});  
  
 

/* 
    console.log(navMenu.classList);
    let klassenNav = navMenu.classList.toString();
    console.log(klassenNav);
    if (klassenNav.includes("active"))
    {$('.overlay-link').show();}
    else {$('.overlay-link').hide();}

 */
};


// INIT-Funktion

function init() {

  clearPfad();
  hamburgerAnimation();

  navButton.addEventListener("click", mobileMenu);
  
/* navButton.addEventListener("click", linkVisible);*/  
 // console.log(navLinks);

 // navButton.addEventListener("click", function() {
  /*  if (navMenu.classList.contains("active")) {
      console.log(navMenu.classList.length);
  } */

  if (navLinkContainer.addEventListener("click", waehleZiel, true)) {
        //navLinks.addEventListener("click", function(){
        // animIcon.classList.add("open");
        navMenu.classList.remove("active");
        navLinkContainer.classList.remove("active");
        $('.overlay-content').hide();
      //}) 
    } 

   
/*  
    for(let i=0; i<navLinks.length; i++) 
      navLinks[i].addEventListener("click", function(){
        $('.animated-icon1').toggleClass('open');
        navMenu.classList.remove("active");
        navLinkContainer.classList.remove("active");
        
      })  */ 
  
     else { 
            //navLinkContainer.classList.remove("active");
      console.log("nix da")
    }; 

  //});



}






window.onload = init;


/*navLinks.addEventListener("click", linkVisible); */

/* linksNavi.addEventListener("click", function() {
  $('.animated-icon1').toggleClass('open');
}  
); */
/* 
navButton.addEventListener("click", mobileMenu);

function mobileMenu() {
    //navButton.classList.toggle("active");
    navMenu.classList.toggle("active");
};




navButton.addEventListener("click", linkVisible);

function linkVisible() {
  navLinks.classList.toggle("active");
};

navLinks.addEventListener("click", mobileMenu);
navLinks.addEventListener("click", linkVisible);
 */

/* SVG-Images mit inline SVG austauschen */
/* jQuery('img[src$="assets/img/stern_rot.svg"]').each(function() {
  ­    var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');    
      jQuery.get(imgURL, function(data) {
          var $svg = jQuery(data).find('svg');
          if (typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID );
          }
          if (typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          $img.replaceWith($svg);
      }, 'xml');    
  });

 */

// -------------------------------------------------------------------------------------------


