(()=>{
    document.querySelectorAll(".menuButton").forEach((el)=>{
        el.addEventListener("click", ()=>{
            document.querySelectorAll("nav, main, header").forEach((el)=>{
                el.classList.toggle("hide");
            });
        });
    });
})();