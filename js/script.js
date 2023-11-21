/*--------------------------- typing animation---------------------------- */
let typed = new Typed(".typing", {
  strings: ["","Web Designer","Graphic Designer", "web Developer", "Mechanical Engineer", ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
/*----------------Aside----------------------- */
const nav = document.querySelector(".nav"),
navlist = nav.querySelectorAll("li"),
totalNavList = navlist.length;
for(let i=0; i<totalNavList; 1++){
  const = navlist[i].querySelector("a");
  addEventListener.addEventListener("click", function(){
    this.classList.add("active")
  })
}

