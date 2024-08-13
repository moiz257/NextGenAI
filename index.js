function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }


});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveAnimation()

function navAnimation(){
    var nav=document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
    let tl=gsap.timeline()
    tl.to("#nav-bottom",{
      height:"17vh"
    })
    tl.to(".nav-part2 h5",{
        display:"block"
    })
    tl.to(".nav-part2 h5 span",{
        y:0,
   stagger:{
    amount:0.5
   }
    })
})

nav.addEventListener("mouseleave",function(){
  let tl=gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        y:25,
        // duration:0.3,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-part2 h5",{
      display:"none",
      duration:0.1
  })
    tl.to("#nav-bottom",{
        height:0,
        duration:0.2
      })
})
}
navAnimation()

function page2Animation(){
  var rightElems=document.querySelectorAll(".right-elem")

rightElems.forEach(function(elems){
  elems.addEventListener("mouseenter",function(){
    gsap.to(elems.childNodes[3],{
      opacity:1,
      scale:1
    })
  })
  elems.addEventListener("mouseleave",function(){
    gsap.to(elems.childNodes[3],{
      opacity:0,
      scale:0
    })
  })
  elems.addEventListener("mousemove",function(dets){
    gsap.to(elems.childNodes[3],{
      x:dets.x -elems.getBoundingClientRect().x-90,
      y:dets.y -elems.getBoundingClientRect().y-215
    })
  })
})
}
page2Animation()


function page3Animation (){
  var page3Center= document.querySelector(".page3-center")
  var video= document.querySelector("#page3 video")
  
  page3Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
      transform:"scaleX(1) scaleY(1)",
      opacity:1,
      borderRadius:0
    })
  
  })
  
  video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
      transform:"scaleX(0.7) scaleY(0)",
      opacity:0,
      borderRadius:"30px"
    })
  })
}

page3Animation()

function video(){
  var sections=document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    elem.childNodes[3].style.opacity=1
    elem.childNodes[3].play()
    
  })
  elem.addEventListener("mouseleave",function(){
    elem.childNodes[3].style.opacity=0
    elem.childNodes[3].load()
    
  })
  
})
}
video()

function page7Animations(){
  
gsap.from("#btm7-part2 h4",{
  x:0,
  duration:1,
  scrollTrigger:{
 trigger:"#btm7-part2",
  scroller:"#main",
  start:"top 80%",
  end:"top 10%",
  // markers:true,
  scrub:true
  }
})


gsap.from("#btm7-part3 h4",{
  x:0,
  duration:1,
  scrollTrigger:{
 trigger:"#btm7-part3",
  scroller:"#main",
  start:"top 80%",
  end:"top 10%",
  // markers:true,
  scrub:true
  }
})
gsap.from("#btm7-part4 h4",{
  x:0,
  duration:1,
  scrollTrigger:{
 trigger:"#btm7-part4",
  scroller:"#main",
  start:"top 80%",
  end:"top 10%",
  // markers:true,
  scrub:true
  }
})

}

page7Animations()


function windowAnimation(){
  window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
  
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // Adjust the timeout duration as needed
  });
}
windowAnimation()
