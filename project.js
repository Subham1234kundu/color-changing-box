let rect = document.querySelector(".box");
rect.addEventListener("mousemove",(elem)=>{

 let rectLocation= rect.getBoundingClientRect();
 let insideRectVal = elem.clientX-rectLocation.left;

 if(insideRectVal<rectLocation.width/2){

    let redcolor = gsap.utils.mapRange(0,rectLocation.width/2,255,0,insideRectVal);

    gsap.to(rect,{
        backgroundColor: `rgb(${redcolor},0,0)`,
        ease: Power4,
        
    })

 }else{
    // console.log("right");
    let bluecolor = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insideRectVal);

    gsap.to(rect,{
        backgroundColor: `rgb(0,0,${bluecolor})`,
        ease: Power4,
        
    })
 }
})


//off
rect.addEventListener("mouseleave",()=>{

    gsap.to(rect,{
        backgroundColor:"white",
    });
})
