const projectSpecContainer = document.querySelector(".project-specs-container");
const projectPrevContainer = document.querySelector(".project-grid");

generate();

async function generate() {
  const response = await fetch('./projects.json');
  const data = await response.json();

  let basicProjectFooter = `
  <div class="back-button">
    <a href="index.html#pageThree"><i class="fa-solid fa-arrow-left-long"></i></a>
  </div>
  <h4>Want to check out another project?</h4>
  `;
  
  data.forEach(project => {
    let projectDiv = document.createElement("div");
    projectDiv.id = project["id"];

    let links = project["links"];
    let imgs = project["imgs"];

    projectDiv.innerHTML = `
      <hr class="project-divider">
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

      <div class="project-spec">
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

    let otherLinks = document.createElement("div");
    otherLinks.classList.add("project-mini-links");

    for (let i = 0; i < data.length; i++) {
      if (data[i] != project) {
        otherLinks.innerHTML += `
          <a href="#${data[i]["id"]}">${data[i]["title"]}</a>
        `;
      }
    }

    let projectFooter = document.createElement("div");
    projectFooter.classList.add("bottom-text");
    projectFooter.innerHTML = basicProjectFooter;
    projectFooter.appendChild(otherLinks);

    projectDiv.appendChild(projectFooter);
    projectSpecContainer.appendChild(projectDiv);
  })
}