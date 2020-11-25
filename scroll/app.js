import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { gsap, TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
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

new ScrollMagic.Scene({
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


const second = document.querySelector('.second');
const ctx = second.getContext('2d');

let scene3 = new ScrollMagic.Scene({
    duration: 3500,
    triggerElement: second,
    triggerHook: 0
})
    .setPin(intro)
    .addTo(controller);

const frameCount = 147;
const currentFrame = index => (
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
);

const images = []
const airpods = {
    frame: 0
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

gsap.to(airpods, {
    frame: frameCount - 1,
    snap: "frame",
    scrollTrigger: {
        scrub: 0.5
    },
    onUpdate: render
});

images[0].onload = render;

function render() {
    ctx.clearRect(0, 0, document.body.clientWidth, document.body.clientHeight);
    ctx.drawImage(images[airpods.frame], 0, 0);
}