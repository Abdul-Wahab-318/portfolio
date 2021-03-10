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
})

//remove animation from all social links when animation ends
social.addEventListener('animationend', function(){
    social.classList.remove('default-icon-anime');
    header.style.opacity='1'; // because on smaller screens side header is open by default and then animation runs which closes it. So in media query i set header opacity=0 and when the blinking animation ends it sets opacity back to 1
    for(var i=0; i< allLinks.length; i++)
    {
        allLinks[i].classList.remove('default-icon-anime');
    }
})

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
  }) // when hamburger is clicked

  

  crossHeader.addEventListener('click',function(){
      toggleHeaderAnime();
      headerBtn.style.display='block';
      blackOverlay.classList.toggle('d-none');
  }) // when cross is pressed on extra small screens

  blackOverlay.addEventListener('click',function(){
    toggleHeaderAnime();
    headerBtn.style.display='block';
    blackOverlay.classList.toggle('d-none');
  }) // when black overlay is clicked


  var screenWidth= screen.width;
  if(screenWidth<992)
  {
      console.log('yeet')
      toggleHeaderAnime();
  } // when screen size is below 992px then hide header 


  const h1=document.querySelector('#animatingInfo');

  h1.addEventListener('animationend', function(){
  h1.removeAttribute('data-text');
  console.log('yee');
  h1.innerHTML="WEB DEVELOPER ...";
  h1.setAttribute('data-text','WEB DEVELOPER ...');
              
  })



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
      }, 800, function() {
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
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>'
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
  themeSwitch.classList.toggle('fa-toggle-on');
  themeSwitch.classList.toggle('fa-toggle-off');
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
})


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
    document.querySelector('#scrollBtn').style.display='block';
  }
  else{
    document.querySelector('#scrollBtn').style.display='none';
  }
}