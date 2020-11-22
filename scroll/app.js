import ScrollMagic from 'scrollmagic'
import {TweenMax} from 'gsap/all'

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

console.log(video, intro, text);

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

//Video Animation
let accelAmount = 0.1;
let scrollPosition = 0;
let delay = 0;

scene.on('update', e => {
    scrollPosition = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollPosition - delay) * accelAmount;
    console.log(scrollPosition, delay);

    video.currentTime = delay;
}, 33.3);
