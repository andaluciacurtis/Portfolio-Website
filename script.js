const navBar = document.querySelector('nav');
let observerOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const pageOneObserver = new IntersectionObserver(function(entries, navObserver) {
  entries.forEach(entry=> {
    if (!entry.isIntersecting) {
      navBar.classList.add("show");
    } else {
      navBar.classList.remove("show");
    }
  })
}, observerOptions);

pageOneObserver.observe(pageOne);

let isDragStart = false;
let prevPageX;
let prevScrollLeft;


const carousel = document.querySelector('.carousel');
const firstImg = carousel.querySelectorAll("img")[0];
const arrows = document.querySelectorAll(".wrapper i");

let firstImgWidth = firstImg.clientWidth;

arrows.forEach(arrow=>{
  arrow.addEventListener("click", ()=>{
    carousel.scrollLeft += arrow.id == "left" ? -firstImgWidth : firstImgWidth;
  })})

carousel.addEventListener("mousedown", (e)=>{
  // updating global variables on mousedown event
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
})

carousel.addEventListener("mousemove", (e)=> {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
});

carousel.addEventListener("mouseup", ()=>{
  isDragStart = false;
})







const projects = document.querySelectorAll('.project');
// const triangles = document.querySelectorAll('.triangle');

for (let i = 0; i < projects.length; i++) {
  let currentProject = projects[i];
  currentProject.addEventListener("click", ()=> {
    currentProject.classList.add("selected");
    // triangles[i].style.visibility = "visible";
    for (let j = 0; j < projects.length; j++) {
      if (currentProject != projects[j]) {
        projects[j].classList.remove("selected");
        // triangles[j].style.visibility = "hidden";
      }
    }
  })
}

