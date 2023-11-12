let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");
let socialsi = document.querySelector(".socials");

sun.addEventListener("click",function(){
    sun.style.display = "none";
    moon.style.display = "block";
    document.body.style.backgroundColor = "#D2305E";
    
})

moon.addEventListener("click",function(){
    moon.style.display = "none";
    sun.style.display = "block";
    document.body.style.backgroundColor = "#2B1A1E";
})




socialsi.addEventListener("mouseenter",function(){
    gsap.to(socialsi,{
        y:250,
        cursor:"pointer"
    })
})

socialsi.addEventListener("mouseleave",function(){
    gsap.to(socialsi,{
        y:-9,
        cursor:"pointer"
    })
})

let tl = gsap.timeline();
let cursor = document.querySelector(".cursor");
let dursor = document.querySelector(".dursor");
tl.from(".left h1,h4",{
    x:-300,
    stagger:0.3,
    scale:0
})



tl.from(".right img",{
    x:800,
    scale:0,
    rotate:360
})

tl.from(".socials",{
    x:100
})


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2 .page2content",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 5%",
        scrub:2
    }
})


tl2.to(".cursor",{
    scale:0
})

tl2.to(".dursor",{
    scale:0
})

tl2.from(".page2 .page2content",{
    x:-300,
    opacity:0,
    rotate:360,
    
})

tl2.to(".himmarquee",{
    y:700,
    fontWeight:900,
    fontSize:"1900px",
   
})

tl2.to(".logo h1",{
    y:1200,
    rotate:360
})

tl2.to(".page1 .left",{
    y:850,
    rotate:270
})

tl2.to(".page1 .right",{
    y:850,
    
    scale:1,
})


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 20%",
        scrub:2

    }
})

tl3.to(".page3",{
    backgroundColor:"#2B1A1E",
    scale:1.3,
    
 
})

tl3.from(".page3 .p3left",{
    x:300,
 
})

tl3.from(".page3 .p3right",{
    x:-300    
 
})

//loader

tl4 = gsap.timeline();

let value = 0; 
const countElement = document.querySelector('.count');

function updateCounter() {
  if (value <= 100) {
    countElement.innerHTML = value;
    value++;
    setTimeout(updateCounter, 10);
  }
}


updateCounter();



tl4.to(".loader h1",{
    x:680,
    scale:3
})

tl4.to(".loader",{
    y:-1000
})


let h2Elements = document.querySelectorAll('.contentp4 h2');


h2Elements.forEach((h2) => {
    let img = h2.querySelector('span img');

    h2.addEventListener("mousemove", function (dets) {
        img.style.display = "block";
        img.style.transform = "translate(-20%,-40%)"; 
         
        gsap.to(img, {
            left: dets.clientX - 120,
            top: dets.clientY - 120,
            

        });
        
    });

    h2.addEventListener("mouseleave", function () {
        img.style.display = "none";
        

    });
});


let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:".mainfooter",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0%",
        scrub:2

    }
})

tl5.from(".mainfooter .footer",{
    y:-600,
    opacity:0
})

tl5.from(".lowercontent",{
    y:600,
    scale:0
})

//work.html
let workhtml = document.querySelector('.workmain');
let work = document.querySelector('.work');
work.addEventListener('mousemove',function(){

   gsap.to(workhtml,{
    display:"block",
    opacity:1,
    y:400
   })
})

work.addEventListener('click',function(){
        gsap.to(workhtml,{
            y:-15,
           
        })
})
work.addEventListener('mouseleave',function(){
    gsap.to(workhtml,{
        display:"none",
        opacity:0
       })
    
})

//work.html
let contacthtml = document.querySelector('.contactmain');
let contact = document.querySelector('.contact');
contact.addEventListener('mousemove',function(){

   gsap.to(contacthtml,{
    display:"block",
    opacity:1,
    y:400
   })
})

contact.addEventListener('click',function(){
        gsap.to(contacthtml,{
            y:-15,
           
            
        })
})
contact.addEventListener('mouseleave',function(){
    gsap.to(contacthtml,{
        display:"none",
        opacity:0
       })
    
})


let crsrp1 = document.querySelector('.crsrp1');
let page1 = document.querySelector('.page1');
let right = document.querySelector('.right img');
page1.addEventListener('mousemove',function(dets){
    gsap.to('.crsrp1',{
        display:"block",
        left:dets.clientX+30,
        top:dets.clientY+30,
    
       
    })
})
page1.addEventListener('mouseleave',function(dets){
    gsap.to('.crsrp1',{
        display:"none",
       ease:"power2.out"
    })
})

right.addEventListener('mousemove',function(){
    gsap.to('.crsrp1',{
        width:"100px",
        height:"100px",
        color:"white",
        filter:"blur(0)",
        backgroundColor:"transparent",
        fontSize:"10vh",
       
       
       
    })
})

right.addEventListener('mouseleave',function(){
    gsap.to('.crsrp1',{
     
        width:"150px",
        height:"150px",
        filter:"blur(60px)",
        backgroundColor:"rgb(50, 190, 205)",
    })
})

tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 10%",
        scrub:2
    }
})

tl6.from(".contentp4",{
    y:800,
    scale:0,
})