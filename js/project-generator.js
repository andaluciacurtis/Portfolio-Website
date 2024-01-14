async function generate() {
  const response = await fetch('./projects.json');
  const data = await response.json();

  let i = 0;
  data.forEach(project => {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    let prevImg = project["prevImg"];
    let title = project["title"];
    let intro = project["intro"];

    let links = project["links"];
    let imgs = project["imgs"];


    let projectPrev = document.createElement("div");
    projectPrev.classList.add("project-prev");

    projectPrev.innerHTML = `
      <img src="${prevImg}" alt="" srcset="">
      <h3>${title}</h3>
      <p class="intro">${intro}</p>
      <h4>Read more!</h4>
      <div class="read-more">
          <i class="fa-solid fa-angle-up"></i>
          <i class="fa-solid fa-angle-down"></i>
      </div>
    `

    let projectSpec = document.createElement("div");
    projectSpec.classList.add("outer-spec-container");
    //ensuring everything lines up depending on the side the project is on
    if (i % 2 != 0) {
      projectSpec.classList.add("right-project");
      projectSpec.innerHTML = `<div class="right-triangle"></div>`;
    } else {
      projectSpec.innerHTML = `<div class="left-triangle"></div>`;
    }

    projectSpec.innerHTML += `
      <div class="project-spec">
        <h2>${project["title"]}</h2>

        <div class="spec-links">
          <a href="${links[0]}">View Site</a>
          <a href="${links[1]}">GitHub</a>
        </div>

        <div class="spec-img-container">
          <img src="${imgs[0]}" alt="">
          <img src="${imgs[1]}" alt="">
          <img src="${imgs[2]}" alt="">
          <img src="${imgs[3]}" alt="">
        </div>

        <div class="project-desc">
          <p>${project["desc"]}</p>
          
          <p>
            <span class="important">Initial goal:</span>
            ${project["initialGoal"]}
          </p>

          <p>
            <span class="important">Most difficult aspect:</span>
            ${project["diffAspect"]}
          </p>

          <p>
            <span class="important">Biggest take away:</span>
            ${project["takeAway"]} 
          </p>

          <p>
            <span class="important">What I would do next:</span>
            ${project["next"]}
          </p>
        </div>
      </div>
    `;

    projectDiv.appendChild(projectPrev);
    projectDiv.appendChild(projectSpec);

    projectGrid.appendChild(projectDiv);
    i++;
  })
}