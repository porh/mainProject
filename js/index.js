(()=>{
    document.querySelectorAll(".menuButton").forEach((el)=>{
        el.addEventListener("click", ()=>{
            document.querySelectorAll("nav, main, header").forEach((el)=>{
                el.classList.toggle("hide");
            });
        });
    });
    
    const onResize = () => {
        const bodyH = document.body.clientHeight;
        const winW = document.querySelector('html').clientWidth;
        const winH = document.querySelector('html').clientHeight;
        let maxWidth = window.getComputedStyle(document.body).getPropertyValue('max-width');
        maxWidth = maxWidth.replace("px","");
        maxWidth = parseInt(maxWidth);
    
        let mul = 1;
        if (maxWidth < winW && bodyH < winH) {
            mul = winW / maxWidth;
            if (bodyH * mul > winH) mul = winH / bodyH;
        }
        const top = ((bodyH*mul/2) - bodyH/2);
        
        document.documentElement.style.setProperty('--bodyScale', mul); 
        document.documentElement.style.setProperty('--bodyTop', top+"px"); 
    };
    window.addEventListener("resize", onResize);
    onResize();
    
    intId = setInterval(()=>{
        debuggerCheck = true;
        const time1 = new Date().getTime();
        console.log(time1+' tst debugger');
        eval("// what are You doin here???\n// set debuggerCheck = false in console to disable\ndebugger");
        const time2 = new Date().getTime();
        if (time2-100 > time1) {
            console.log('debugger present');
            // on release, can
            // send notification to server
            // delete dom struct
        }
        if (!debuggerCheck)  clearInterval(intId);
        
    },100);
    document.querySelector("form input").focus();
})();