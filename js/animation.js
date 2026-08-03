const cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px) scale(1.01)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


// ==========================
// Ripple Effect Button
// ==========================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

e.preventDefault();

const ripple=document.createElement("span");

const x=e.clientX-this.getBoundingClientRect().left;

const y=e.clientY-this.getBoundingClientRect().top;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

