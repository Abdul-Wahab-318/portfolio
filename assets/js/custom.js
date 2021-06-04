//  variables
const profile=document.querySelector('#profileImg');
const social=document.querySelector("#socialLinks").firstElementChild.firstElementChild; // first social link
const allLinks=document.querySelectorAll('#socialLinks li'); // all social links
var blackOverlay=document.getElementById('blackOverlay');
var header=document.getElementById('header');
const headerBtn=document.getElementById('headerBtn');
const crossHeader=document.getElementById('crossHeader');
//

profile.addEventListener('click',function(){
    profile.firstElementChild.classList.toggle('profileAnimationClass')
} ,{passive: true});

//remove animation from all social links when animation ends
social.addEventListener('animationend', function(){
    social.classList.remove('default-icon-anime');
    header.style.opacity='1'; // because on smaller screens side header is open by default and then animation runs which closes it. So in media query i set header opacity=0 and when the blinking animation ends it sets opacity back to 1
    for(var i=0; i< allLinks.length; i++)
    {
        allLinks[i].classList.remove('default-icon-anime');
    }
} ,{passive: true})

/* generic functions */
function toggleHeaderAnime()
{
  header.classList.toggle('remove-header-anime');
  header.classList.toggle('show-header-anime');
}
 /**/

  headerBtn.addEventListener('click',function(){
      toggleHeaderAnime();
      blackOverlay.classList.toggle('d-none');
      if(screenWidth<576)
      {
          headerBtn.style.display='none';
      }
  } ,{passive: true}) // when hamburger is clicked

  

  crossHeader.addEventListener('click',function(){
      toggleHeaderAnime();
      headerBtn.style.display='block';
      blackOverlay.classList.toggle('d-none');
  },{passive: true}) // when cross is pressed on extra small screens

  blackOverlay.addEventListener('click',function(){
    toggleHeaderAnime();
    headerBtn.style.display='block';
    blackOverlay.classList.toggle('d-none');
  },{passive: true}) // when black overlay is clicked


  var screenWidth= screen.width;
  if(screenWidth<992)
  {
      console.log('<992px')
      toggleHeaderAnime();
  } // when screen size is below 992px then hide header 

  if(screenWidth>992)
  {
      console.log('> 992px')
      //toggleHeaderAnime();

  } // when screen size is above 992px then hide header 




  const h1=document.querySelector('#animatingInfo');

  h1.addEventListener('animationend', function(){
  h1.removeAttribute('data-text');
  console.log('yee');
  h1.innerHTML="WEB DEVELOPER ...";
  h1.setAttribute('data-text','WEB DEVELOPER ...');
              
  } ,{passive: true})



//jquery
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  //
  if(screenWidth<992)
  {
    toggleHeaderAnime();
    blackOverlay.classList.toggle('d-none');
    headerBtn.style.display='block';
  }
  //
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 100, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
// owl carousel
$('.portfolio-owl').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  loop:true,
  singleItem:true,
  dots:false,
  margin:0,
  autoplayHoverPause:true,
  autoplay:true,
  autoplayTimeout:4000,
  navText:[
    '<i class="fas icon-fa-chevron-left"></i>',
    '<i class="fas icon-fa-chevron-right"></i>'
  ],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
$('.review-owl').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  nav:false,
  margin:40,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1200:{
          items:3
      }
  }
})

var theme = document.querySelector('#theme');
var themeSwitch =document.querySelector('#theme-switch');
theme.addEventListener('click',function(){
  //themeSwitch.classList.toggle('icon-fa-toggle-on');
  //themeSwitch.classList.toggle('icon-fa-toggle-off');
  themeSwitch.classList.toggle('rotateSwitch');
  themeSwitch.classList.toggle('unrotateSwitch');
  //changed switched icon
  //change colors
  if(getComputedStyle(document.documentElement).getPropertyValue('--reviewSlider')!="#040b14"){
    console.log('switching colors')
    document.documentElement.style.setProperty('--cwhite', '#040b14');
    document.documentElement.style.setProperty('--bglight', 'black');
    document.documentElement.style.setProperty('--textBlack', 'white');
    document.documentElement.style.setProperty('--reviewSlider', '#040b14');
    document.documentElement.style.setProperty('--portfolioSlider', '#040b14');
  }
  else{
    document.documentElement.style.setProperty('--cwhite', 'white');
    document.documentElement.style.setProperty('--bglight', '#f5f8fd');
    document.documentElement.style.setProperty('--textBlack', '#272829');
    document.documentElement.style.setProperty('--reviewSlider', 'white');
    document.documentElement.style.setProperty('--portfolioSlider', 'rgba(228,237,249,0.4)');
  }
} ,{passive: true})


// FORM VALIDATION ____----- FORM VALIDATION ---- -___ FORM

function validateForm(event){
  var fName= document.querySelector('#fName');
  var lName= document.querySelector('#lName');
  var mobile= document.querySelector('#mobile');
  var email= document.querySelector('#email');
  var message= document.querySelector('#message');
  var contactForm=document.querySelector('#contactForm');
  var king=0;
  if(fName.value.length<=3){
    console.log('small fName')
    document.getElementsByClassName('error')[0].classList.add("full-opacity");
    king++;
  }
  if(lName.value.length<=3){
    console.log('small LName')
    document.getElementsByClassName('error')[1].classList.add("full-opacity");
    king++;
  }
  if(email.value.length<=8){
    console.log('small email')
    document.getElementsByClassName('error')[2].classList.add("full-opacity");
    king++;
  }
  if(mobile.value.length<=10){
    console.log('small mobile')
    document.getElementsByClassName('error')[3].classList.add("full-opacity");
    king++;
  }
  if(message.value.length<=2){
    console.log('small mobile')
    document.getElementsByClassName('error')[4].classList.add("full-opacity");
    king++;
  }
  if(king==0)
  {
    console.log('clearing all');
    //clearAll();
  }
  else{
    event.preventDefault();
  }
}

function clearError(e){
  e.nextElementSibling.classList.remove('full-opacity')
}
function clearAll()
{
  for(var i=0; i<5 ; i++)
  {
    document.getElementsByClassName('error')[i].classList.remove("full-opacity");
    fName.value="";
    lName.value="";
    mobile.value="";
    email.value="";
    message.value="";
  }
}
window.onscroll = function() {scrollTop()}
//scroll to top btn
function scrollTop()
{
  if(document.body.scrollTop>70 || document.documentElement.scrollTop > 70)
  {
    document.querySelector('#scrollBtn').style.display='flex';
  }
  else{
    document.querySelector('#scrollBtn').style.display='none';
  }
}

window.onload = function(){

  //ADDS ANIMATION TO INTRO SECTION ON LOAD
  var introText = document.querySelector('#introText')
  introText.classList.add("animateBigName")



  var loader=document.querySelector('#loader');
  loader.style.opacity='0';
  loader.style.zIndex='-100';
  if(loader.firstElementChild.firstElementChild.style.animationIterationCount==5)
  {
    loader.firstElementChild.firstElementChild.style.animation='unset'
  }

  

}


/*SHUFFLE JS*/
/*
var Shuffle = window.Shuffle;
var element = document.querySelector('.my-shuffle-container');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});

Shuffle.options = {
  buffer: 0, // Useful for percentage based heights when they might not always be exactly the same (in pixels).
  columnThreshold: 0.01, // Reading the width of elements isn't precise enough and can cause columns to jump between values.
  columnWidth: 10, // A static number or function that returns a number which tells the plugin how wide the columns are (in pixels).
  delimiter: null, // If your group is not json, and is comma delimeted, you could set delimiter to ','.
  easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)', // CSS easing function to use.
  filterMode: Shuffle.FilterMode.ANY, // When using an array with filter(), the element passes the test if any of its groups are in the array. With "all", the element only passes if all groups are in the array.
  group: Shuffle.ALL_ITEMS, // Initial filter group.
  gutterWidth: 0, // A static number or function that tells the plugin how wide the gutters between columns are (in pixels).
  initialSort: null, // Shuffle can be initialized with a sort object. It is the same object given to the sort method.
  isCentered: false, // Attempt to center grid items in each row.
  isRTL: false, // Attempt to align grid items to right.
  itemSelector: '*', // e.g. '.picture-item'.
  roundTransforms: true, // Whether to round pixel values used in translate(x, y). This usually avoids blurriness.
  throttle: false, // By default, shuffle will throttle resize events. This can be changed or removed.
  sizer: null, // Element or selector string. Use an element to determine the size of columns and gutters.
  speed: 250, // Transition/animation speed (milliseconds).
  staggerAmount: 15, // Transition delay offset for each item in milliseconds.
  staggerAmountMax: 150, // Maximum stagger delay in milliseconds.
  throttleTime: 300, // How often shuffle can be called on resize (in milliseconds).
  useTransforms: true, // Whether to use transforms or absolute positioning.
};*/