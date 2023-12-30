let projects = document.querySelectorAll('.project');
let triangles = document.querySelectorAll('.triangle');

for (let i = 0; i < projects.length; i++) {
  let currentProject = projects[i];
  currentProject.addEventListener("click", ()=> {
    currentProject.classList.add("selected");
    triangles[i].style.visibility = "visible";
    for (let j = 0; j < projects.length; j++) {
      if (currentProject != projects[j]) {
        projects[j].classList.remove("selected");
        triangles[j].style.visibility = "hidden";
      }
    }
  })
}