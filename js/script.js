
const courseCards = document.querySelectorAll(".course-card");

courseCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-course");

}

});

},{
threshold:.20
});

courseCards.forEach(card=>{

observer.observe(card);

});


const buttons=document.querySelectorAll(".course-btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

e.preventDefault();

const ripple=document.createElement("span");

const x=e.clientX-this.getBoundingClientRect().left;

const y=e.clientY-this.getBoundingClientRect().top;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.classList.add("course-ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});


const viewBtn=document.querySelector(".view-btn");

viewBtn.addEventListener("mouseenter",()=>{

viewBtn.style.letterSpacing="1px";

});

viewBtn.addEventListener("mouseleave",()=>{

viewBtn.style.letterSpacing="0px";

});