let icon = document.getElementById("sun");
let body = document.querySelector("body");

icon.addEventListener("click", function(){
    this.classList.toggle("fa-moon");
    this.classList.toggle("fa-sun");
    
   
    if(this.classList.contains("fa-sun")) {
        body.style.background = "white";
        body.style.color = "black";
    } else {
        body.style.background = "black";
        body.style.color = "white";
    }
    body.style.transition = "1s";
});

let mega = document.querySelector(".mega")
let links = document.querySelector("ul")

mega.addEventListener("click", function(){
    if(links.style.left ==="-1000px" || !links.style.left ){
        links.style.left = "0"
    }else{
        links.style.left = "-1000px"
    }
})