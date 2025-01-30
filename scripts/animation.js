let stopAnimation = (identifier,animationClass,animationAfter="")=>{
    let node = document.querySelector(identifier);
    node.addEventListener("animationend",(e)=>{
        e.target.classList.remove(animationClass);
        if(animationAfter){
            e.target.setAttribute("animation",animationAfter);
        }
    })
}

export {stopAnimation}