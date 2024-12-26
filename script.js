var crsr = document.querySelector("#cursor")
var crsrbr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+10+"px"
    crsr.style.top = dets.y+"px"
    crsrbr.style.left = dets.x -100 +"px"
    crsrbr.style.top = dets.y - 100 +"px"
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:"#main",
        scroller: 'body',
        markers:true,
        start: "top - 30%",
        end: "top -100%",
        scrub:2
    }
})

var h4all  = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border= "1px #fff solid"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border= "0px #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.from("#about-us, #about-us-in",{
    y:50,
    opacity: 0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start: "top 60%",
        end: "top 50%",
        markers: true,
        scrub:3
    }
})

gsap.from(".cards",{
    scale:0.8,
    opacity: 0,
    duration:1,
    stagger: 0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start: "top 80%",
        end: "top 50%",
        markers: true,
        scrub:2 
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
    },
});