import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 3500,
    triggerElement: intro,
    triggerHook: 0
})
    .setPin(intro)
    .addTo(controller);

const text = intro.querySelector('h1');
const textAnim = TweenMax.fromTo(text, 1, {opacity: 0}, {opacity: 1});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

let accelAmount = 0.1;
let scrollPosition = 0;
let delay = 1;

scene.on('update', e => {
    scrollPosition = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollPosition - delay) * accelAmount;

    video.currentTime = delay;
}, 33);
