// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

var t1= gsap.timeline()

t1.from(".logo,.options p",{
    y:-10,
    duration:0.5,
    opacity:0,
    delay:0.5,
    stagger:0.1
})
t1.from(".title h1,.title p",{
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.3,
}) 
t1.from(".title button",{
    scale:0,
    opacity:0,
    duration:0.6,
    // ease:"power2.inOut",
})

gsap.from(".content h1, .content p",{
    y:-110,
    opacity:0,
    duration:2,
    stagger:2,
    scrollTrigger:{
        trigger:".content h1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 10%",
        // scrub:true

    }
})
gsap.from(".projects img",{
    x:400,
    opacity:0,
    duration:2,
    stagger:0.5,
    scrollTrigger:{
        trigger:".projects img",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 10%",
    }
})
gsap.to(".contact button",{
    scale:1.2,
    duration:0.8,
    repeat:-1,
    yoyo:true
})