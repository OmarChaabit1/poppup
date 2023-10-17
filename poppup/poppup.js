const containerclick = document.querySelector(".container-popping");

const btnEl = document.querySelector(".btn"); 

const popupBtn = document.querySelector(".text-joining"); 

const closIcon = document.querySelector(".close-icon"); 

    
btnEl.addEventListener("click",() =>{
    containerclick.classList.add("active");
    popupBtn.classList.remove("active");
});
closIcon.addEventListener("click",()=>{
    popupBtn.classList.add("active");
    containerclick.classList.remove("active");
});