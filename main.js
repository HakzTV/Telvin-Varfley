// Back to top button 
const myButton = document.querySelector('#myBtn');

// This is to check whether the user has scrolled down before the button can appear
window.onscroll = ()=>{
    scrollPage()
};
// function that was invoked above
function scrollPage(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop>20){
        myButton.style.display = "block";
    }else{
        myButton.style.display = "none"
    }
}
// Event lister to the back to top button
myButton.addEventListener('click',()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop=0;
})

// Desktop landing animation 
var desktop = {};
desktop.opacityIn = [0,1];
desktop.scaleIn = [0.2, 1];
desktop.scaleOut = 3;
desktop.durationIn = 800;
desktop.durationOut = 600;
desktop.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.desktop .letters-1',
    opacity: desktop.opacityIn,
    scale: desktop.scaleIn,
    duration: desktop.durationIn
  }).add({
    targets: '.desktop .letters-1',
    opacity: 0,
    scale: desktop.scaleOut,
    duration: desktop.durationOut,
    easing: "easeInExpo",
    delay: desktop.delay
  }).add({
    targets: '.desktop .letters-2',
    opacity: desktop.opacityIn,
    scale: desktop.scaleIn,
    duration: desktop.durationIn
  }).add({
    targets: '.desktop .letters-2',
    opacity: 0,
    scale: desktop.scaleOut,
    duration: desktop.durationOut,
    easing: "easeInExpo",
    delay: desktop.delay
  }).add({
    targets: '.desktop .letters-3',
    opacity: desktop.opacityIn,
    scale: desktop.scaleIn,
    duration: desktop.durationIn
  }).add({
    targets: '.desktop .letters-3',
    opacity: 0,
    scale: desktop.scaleOut,
    duration: desktop.durationOut,
    easing: "easeInExpo",
    delay: desktop.delay
  }).add({
    targets: '.desktop .letters-4',
    opacity: desktop.opacityIn,
    scale: desktop.scaleIn,
    duration: desktop.durationIn
  }).add({
    targets: '.desktop .letters-4',
    opacity: 0,
    scale: desktop.scaleOut,
    duration: desktop.durationOut,
    easing: "easeInExpo",
    delay: desktop.delay
  }).add({
    targets: '.desktop',
    opacity: 0,
    duration: 500,
    delay: 500
  });
// Mobile nav bar
// Selection of DOM attributes
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const menuLinks = document.getElementsByClassName('menu-links')[0];

// Event listener to make the mobile nav bar work.
toggleButton.addEventListener('click', () => {
    menuLinks.classList.toggle('active')
})

//Mobile text animation for 900px and lower using GSAP
anime.timeline({loop: true})
  .add({
    targets: '.tablet-size .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.tablet-size .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.tablet-size .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.tablet-size .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.tablet-size .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.tablet-size',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
//Mobile text animation for 600px and lower using GSAP
var textWrapper = document.querySelector('.phone-size .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.phone-size .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.phone-size',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

