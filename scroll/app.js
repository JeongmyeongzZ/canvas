import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const intro = document.querySelector('.intro');
// const video = intro.querySelector('video');
//
// const controller = new ScrollMagic.Controller();
//
// let scene = new ScrollMagic.Scene({
//     duration: 3500,
//     triggerElement: intro,
//     triggerHook: 0
// })
//     .setPin(intro)
//     .addTo(controller);
//
// const text = intro.querySelector('h1');
// const textAnim = TweenMax.fromTo(text, 1, {opacity: 0}, {opacity: 1});
//
// new ScrollMagic.Scene({
//     duration: 3000,
//     triggerElement: intro,
//     triggerHook: 0
// })
//     .setTween(textAnim)
//     .addTo(controller);
//
// let accelAmount = 0.1;
// let scrollPosition = 0;
// let delay = 1;
//
// scene.on('update', e => {
//     scrollPosition = e.scrollPos / 1000;
// });
//
// setInterval(() => {
//     delay += (scrollPosition - delay) * accelAmount;
//
//     video.currentTime = delay;
// }, 33);


const second = document.querySelector('.second');
const ctx = second.getContext('2d');

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
        scrub: 0.5,
    },
    onUpdate: render
});

images[0].onload = render;

function render() {
    const image = images[airpods.frame];
    const stageWidth = document.body.clientWidth;
    const stageHeight = document.body.clientHeight;

    ctx.clearRect(0, 0, stageWidth, stageHeight);
    ctx.drawImage(image, 0, 0);
}