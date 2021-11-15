let mySection = document.getElementsByTagName("section");
//const sectionArray = Array.from(mySection);

let star = document.querySelector("#sternenwahl7");
let about = document.querySelector("#about");
let services = document.querySelector("#services");
let portfolio = document.querySelector("#portfolio");
let contact = document.querySelector("#contact");
let network = document.querySelector("#network");

const allSectionArray = [];

allSectionArray.push(star);
allSectionArray.push(about);
allSectionArray.push(services);
allSectionArray.push(portfolio);
allSectionArray.push(contact);
allSectionArray.push(network);

console.log(allSectionArray);


/* --------------------------------------------------------------------- */

const vieportCheck = function() {

  // Check ob Section sichtbar
  const isInViewport = function(elem1, elem2, elem3, elem4, elem5, elem6) {

    // Position Design your star - Check
    var pos1 = elem1.getBoundingClientRect();
    if(pos1.top >= 0 && pos1.bottom <= window.innerHeight) {
      $('.pfad').show();
      console.log('yourstar is fully visible in screen');
    }
    // checking for partial visibility
    else if( pos1.top <= window.innerHeight && pos1.bottom >= 0) {
      $('.pfad').show();
      console.log('yourstar is partially visible in screen');
    } 
    else {
      $('.pfad').hide();
      console.log('yourstar is not visible!')
    };
  
    // Position about - Check
    var pos2 = elem2.getBoundingClientRect();
    if(pos2.top >= 0 && pos2.bottom <= window.innerHeight ) {
      $('.pfad').show();
      console.log('About is fully visible in screen');
    }
    // checking for partial visibility
    else if(pos2.top <= window.innerHeight && pos2.bottom >= 0) {
      $('.pfad').show();
      console.log('About is partially visible in screen');
    }
    else {
      $('.pfad').hide();
      console.log('About is not visible!')
    };
    
    // Position Services - Check
    var pos3 = elem3.getBoundingClientRect();
    if(pos3.top >= 0 && pos3.bottom <= window.innerHeight ) {
      $('.pfad').show();
      console.log('Services is fully visible in screen');
    }
    // checking for partial visibility
    else if( pos3.top <= window.innerHeight && pos3.bottom >= 0) {
      $('.pfad').show();/**/
      console.log('Services is partially visible in screen');
    }
    else {
      $('.pfad').hide();
      console.log('Services is not visible!')
    };
  
    // Position Portfolio - Check
    var pos4 = elem4.getBoundingClientRect();
    if(pos4.top >= 0 && pos4.bottom <= window.innerHeight ) {
      $('.pfad').show();
      console.log('Porfolio is fully visible in screen');
    }
    // checking for partial visibility
    else if(pos4.top <= window.innerHeight && pos4.bottom >= 0) {
      $('.pfad').show();
      console.log('Portfolio is partially visible in screen')
    }
    else {
      $('.pfad').hide();
      console.log('Portfolio is not visible!')
    };
  
    // Position Kontakt - Check
    var pos5 = elem5.getBoundingClientRect();
    if(pos5.top >= 0 && pos5.bottom <= window.innerHeight ) {
      $('.pfad').show();
      console.log('Kontakt is fully visible in screen');
    }
    // checking for partial visibility
    else if(pos5.top <= window.innerHeight && pos5.bottom >= 0) {
      $('.pfad').show();
      console.log('Kontakt is partially visible in screen');
    }
    else {
      $('.pfad').hide();
      console.log('Kontakt is not visible!')
    }
    
    // Position Netzwerk - Check
    var pos6 = elem6.getBoundingClientRect();
    if(pos6.top >= 0 && pos6.bottom <= window.innerHeight ) {
      $('.pfad').show();
      console.log('Element is fully visible in screen');
    }
    // checking for partial visibility
    else if(pos6.top <= window.innerHeight && pos6.bottom >= 0) {
      $('.pfad').show();
      console.log('Element is partially visible in screen');
    }
    else {
      $('.pfad').hide();
      console.log('Element is not visible!')
    }
    
    };
    
  

    isInViewport(star, about, services, portfolio, contact, network)
    
    




};

body.addEventListener('wheel', vieportCheck);
body.addEventListener('scroll', vieportCheck);


//-------------------------------------------------------------------------------------

const vieportCheck = function() {

  // Check ob Section sichtbar
  const isInViewport = function(elem1, elem2, elem3, elem4, elem5, elem6) {
    //var elem = window.pageYOffset;
  if ($(star).is(":visible")){

    // Position Design your star - Check
    var pos1 = elem1.getBoundingClientRect();
    if(pos1.top <= 200 && pos1.bottom >= window.innerHeight) {
      $('.pfad').show().html("<p>Dein Stern-1</p>");
      console.log('Star is fully visible in screen');
    }
    // checking for partial visibility
    else if(pos1.top >= window.innerHeight && pos1.bottom <= 100) {
      $('.pfad').show().html("<p>Dein Stern-2</p>");
      console.log('Star is partially visible in screen');
    } 
    else {
      $('.pfad').hide();
      console.log('Star is not visible!');
    };
  }
   
  else if ($(about).is(":visible")){
    // Position about - Check
    var pos2 = elem2.getBoundingClientRect();
    if(pos2.top <= 200 && pos2.bottom >= window.innerHeight) {
      $('.pfad').show().html("<p><em>Über mich-test1</em></p>");
      console.log('About is fully visible in screen');
    }
    // checking for partial visibility
    else if(pos2.top >= window.innerHeight && pos2.bottom <= 0) {
      $('.pfad').show().html("<p><em>Über mich-test2</em></p>");
      console.log('About is partially visible in screen');
    }
    else {
      $('.pfad').hide();
      console.log('About is not visible!');
    };
  }

  else {$('.pfad').show().html("<p><em>alles andere</em></p>");}
  /*  
    // Position Services - Check
    var pos3 = elem3.getBoundingClientRect();
    if(pos3.top >= 0 && pos3.bottom <= window.innerHeight) {
      $('.pfad').show();
      console.log('Services is fully visible in screen');
    }
    // checking for partial visibility
    else if( pos3.top <= window.innerHeight && pos3.bottom >= 0) {
      $('.pfad').show();
      console.log('Services is partially visible in screen');
    }
    else {
      $('.pfad').hide();
      console.log('Services is not visible!')
    };
  
    // Position Portfolio - Check
    var pos4 = elem4.getBoundingClientRect();
    if(pos4.top >= 0 && pos4.bottom <= window.innerHeight ) {
      $('.pfad').show();
      console.log('Porfolio is fully visible in screen');
    }
    // checking for partial visibility
    else if(pos4.top <= window.innerHeight && pos4.bottom >= 0) {
      $('.pfad').show();
      console.log('Portfolio is partially visible in screen')
    }
    else {
      $('.pfad').hide();
      console.log('Portfolio is not visible!')
    };
  
    // Position Kontakt - Check
    var pos5 = elem5.getBoundingClientRect();
    if(pos5.top >= 0 && pos5.bottom <= window.innerHeight ) {
      $('.pfad').show();
      console.log('Kontakt is fully visible in screen');
    }
    // checking for partial visibility
    else if(pos5.top <= window.innerHeight && pos5.bottom >= 0) {
      $('.pfad').show();
      console.log('Kontakt is partially visible in screen');
    }
    else {
      $('.pfad').hide();
      console.log('Kontakt is not visible!')
    }
    
    // Position Netzwerk - Check
    var pos6 = elem6.getBoundingClientRect();
    if(pos6.top >= 0 && pos6.bottom <= window.innerHeight ) {
      $('.pfad').show();
      console.log('Netzwerk is fully visible in screen');
    }
    // checking for partial visibility
    else if(pos6.top <= window.innerHeight && pos6.bottom >= 0) {
      $('.pfad').show();
      console.log('Netzwerk is partially visible in screen');
    }
    else {
      $('.pfad').hide();
      console.log('Netzwerk is not visible!')
    }
     */
    };
    
  

    isInViewport(star, about, services, portfolio, contact, network)
    
    




};

body.addEventListener('wheel', vieportCheck);
body.addEventListener('scroll', vieportCheck);

