
gsap.registerPlugin(ScrollTrigger) 

gsap.from( ".skills .box", {
    scrollTrigger : {
        trigger : ".skills .container",
        toggleActions : "play reverse none reset",
        markers: false,
        start : "top 60%",
        end: "bottom 30%",

    },
    y: 100,
    opacity: 0,
    scale: 0,
    ease: "elastic.out(0.4, 0.15)",
    duration: 1,
    stagger: 0.5,

});

gsap.to(".boxA", {
    x: 935,
    rotation: 360,
    duration: 4,
    toggleActions : "play reverse none reset",
});

gsap.to(".boxC", {
    x: -935,
    rotation: 360,
    duration: 4,
    toggleActions : "play reverse none reset",
});

gsap.to(".boxB", {
    y: 50,
    rotation: 360,
    duration: 4,
    toggleActions : "play reverse none reset", 
})

