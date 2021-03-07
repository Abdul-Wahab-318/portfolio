//  variables
const profile=document.querySelector('#profileImg');
const social=document.querySelector("#socialLinks").firstElementChild.firstElementChild; // first social link
const allLinks=document.querySelectorAll('#socialLinks li'); // all social links
var blackOverlay=document.getElementById('blackOverlay');
var header=document.getElementById('header');
const headerBtn=document.getElementById('headerBtn');
const crossHeader=document.getElementById('crossHeader');
const kingCrimson=document.querySelector('#kingCrimson');
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



 /*   */
  
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
     /* header.addEventListener('animationend',function(){
        header.style.opacity="1";
      })*/
  } // when screen size is below 992px then hide header 


  const h1=document.querySelector('#animatingInfo');

  h1.addEventListener('animationend', function(){
  h1.removeAttribute('data-text');
  console.log('yee');
  h1.innerHTML="WEB DEVELOPER ...";
  h1.setAttribute('data-text','WEB DEVELOPER ...');
              
  })

  //play kingCrimson Sound Effect

  function playAudio()
  {
    kingCrimson.play();
    kingCrimson.volume=0.2;
  }





//jquery





  

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
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