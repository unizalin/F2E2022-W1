gsap.registerPlugin(ScrollTrigger, TextPlugin);

const srollMT = gsap.timeline({
  scrollTrigger: {
    trigger: ".matrix", 
    pin: true, //重要！ pin需設為true
    scrub: true,
  },
});
srollMT.to(".matrix1",{ 
  top: "10%",
  left: 0,
  duration: 10
}).to(".matrix2",{ 
  top: "10%",
  left: "-20px",
  duration: 10
},"<").to(".matrix3",{ 
  top: "14%",
  left: "-32px",
  duration: 10
},"<").to(".matrix4",{ 
  top: "14%",
  left: "-52px",
  duration: 10
},"<").to(".matrix5",{ 
  top: "18%",
  left: "-64px",
  duration: 10
},"<").to(".matrix6",{ 
  top: "18%",
  left: "-84px",
  duration: 10
},"<")


srollMT.to(".matrix1",{ 
  top: "10%",
  left: 0,
  duration: 15
}).to(".matrix2",{ 
  top: "10%",
  left: "-20px",
  duration: 10,
  opacity:0 ,
},"<").to(".matrix3",{ 
  top: "88px",
  left: "-40px",
  duration: 10,
  opacity:0 ,
},"<").to(".matrix4",{ 
  top: "88px",
  left: "-60px",
  duration: 10,
  opacity:0 ,
},"<").to(".matrix5",{ 
  top: "90px",
  left: "-80px",
  duration: 10,
  opacity:0 ,
},"<").to(".matrix6",{ 
  top: "92px",
  left: "-100px",
  duration: 10,
  opacity:0 ,
},"<").to(".primary",{
  color: "#f1cb04",
  duration: 12,
},"<").to(".blackText",{
  color: "#000",
  duration: 12,
},"<").to(".matrix",{
  background: "#fff",
  duration: 12,
},"<")


srollMT.to(".matrix1",{ 
  top: "-20px",
  opacity:0 ,
  duration: 15
})

const srollS2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2", 
    pin: true, //重要！ pin需設為true
    scrub: true,
  },
});

srollS2.to(".section2",{  background: "#fff1aa",
}).to(".section2 .card1",{ 
  xPercent: "-90",opacity: 1,rotation: 4,
},"<").to(".section2 .card1 .emoji1",{
  bottom:"35%"
},"<").to(".section2 .card1 .emoji2",{
  bottom:"8%"
},"<").to(".section2 .card1 .emoji3",{
  bottom:"55%"
},"<")
srollS2.to(".section2 .card1",{ opacity:0,yPercent: "-100"})
srollS2.to(".section2 .card2",{ xPercent: "-90",opacity: 1,rotation: 4,
}).to(".section2 .card2 .emoji1",{
  bottom:"35%"
},"<").to(".section2 .card2 .emoji2",{
  bottom:"8%"
},"<").to(".section2 .card2 .emoji3",{
  bottom:"55%"
},"<")
srollS2.to(".section2 .card2",{ opacity:0,yPercent: "-100"})
srollS2.to(".section2 .card3",{ xPercent: "-90",opacity: 1,rotation: 4,
}).to(".section2 .card3 .emoji1",{
  bottom:"35%"
},"<").to(".section2 .card3 .emoji2",{
  bottom:"8%"
},"<").to(".section2 .card3 .emoji3",{
  bottom:"55%"
},"<")
srollS2.to(".section2 .card3",{ opacity:0,yPercent: "-100"})


const srollS3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3", 
    pin: true, //重要！ pin需設為true
    scrub: true,
  },
});
srollS3.to(".section3 .bottom .left",{ opacity: 1 , x: 0
}).to(".section3 .bottom .icon",{ opacity:1,y:0
},"<").to(".section3 .bottom .right",{ opacity:1,x:0
},"<")

const srollS4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section4", 
    pin: true, //重要！ pin需設為true
    scrub: true,
  },
});
srollS4.to('.section4 .content',{
  opacity: 1,
})

const srollS5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5", 
    pin: true, //重要！ pin需設為true
    scrub: true,
  },
});

srollS5.to(".section5 .swiper",{
  y:0
})

const srollS6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section6", 
    pin: true, //重要！ pin需設為true
    scrub: true,
  },
});

srollS6.to(".section6 .contest",{
  y:0
})

const srollS7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section7", 
    pin: true, //重要！ pin需設為true
    scrub: true,
  },
});

srollS7.to(".section7 p",{
  y:0
})


const srollS8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section8", 
    pin: true, //重要！ pin需設為true
    scrub: true,
  },
});

srollS8.to(".section8 .left",{
  y:0
})

const srollS9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section9", 
    pin: true, //重要！ pin需設為true
    scrub: true,
  },
});

srollS8.to(".section9 .left",{
  y:0
})

const srollS10 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section10", 
    pin: true, //重要！ pin需設為true
    scrub: true,
  },
});

srollS10.to(".section10 .top",{
  y:0
})
