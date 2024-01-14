// ADDING NAV INTERSECTION OBSERVERS
const navBar = document.querySelector('nav');
isPageOne = true;

const pageOneObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry=> {
    if (!entry.isIntersecting) {
      navBar.classList.add("show");
      isPageOne = false;
    } else {
      navBar.classList.remove("show");
      isPageOne = true;

      // Making sure the mobile nav links + dimmer disappear when the nav does
      if (navOpen) {
        openCloseNav();
      }
    }
  })
}, 
  {rootMargin: "-100px 0px 0px 0px"}
);

pageOneObserver.observe(pageOne);

const pageThreeObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry=> {
    if (!entry.isIntersecting) {
      navBar.style.backgroundColor = "white";
    } else {
      navBar.style.backgroundColor = "var(--dark-blue)";
    }
  })
}, 
  {rootMargin: "-100px 0px 0px 0px", threshold: 0.3}
);

pageThreeObserver.observe(pageThree);

// CREATING MOBILE NAV
const navToggle = document.querySelector(".mobile-nav-toggle");
const mobileNav = document.querySelector(".mobile-nav-container");
const bgDimmer = document.querySelector(".mobile-bg-dimmer");
const navLinks = document.querySelectorAll(".nav-links a");

let navOpen = false;

navToggle.addEventListener("click", ()=> {
  if (!isPageOne) {
    openCloseNav();
  }
})

// Adding listener for each link, so when clicked, the nav will go away
navLinks.forEach(link=> {
  link.addEventListener("click", ()=> {
    openCloseNav();
  })
})

function openCloseNav() {
  navOpen = !navOpen;
  mobileNav.classList.toggle("nav-show");
}

// Project page
const projectGrid = document.querySelector(".project-grid");
generate().then(setUpListeners);

function setUpListeners() {
  const projects = document.querySelectorAll(".project");
  let specOpen = false;
  
  projects.forEach(project=> {
    let readMore = project.querySelector(".read-more");
    let spec = project.querySelector(".outer-spec-container");
  
    let downArrow = project.querySelector(".fa-angle-down");
    let upArrow = project.querySelector(".fa-angle-up");
  
    readMore.addEventListener("click", ()=> {
      let currentlyOpen = spec.classList.contains("open-project")
  
      if (currentlyOpen) {
        spec.classList.remove("open-project");
        project.classList.remove("selected-project");
  
        downArrow.style.display = "block";
        upArrow.style.display = "none";
        specOpen = false;
  
      } else {
        // close any specs that are open
        if (specOpen) {
          for (let i = 0; i < projects.length; i++) {
            if (projects[i] != project) {
              let otherProj = projects[i];
              otherProj.querySelector(".outer-spec-container").classList.remove("open-project");
              otherProj.querySelector(".fa-angle-down").style.display = "block";
              otherProj.querySelector(".fa-angle-up").style.display = "none";
              otherProj.classList.remove("selected-project");
            }
          }
        }
  
        spec.classList.add("open-project");
        project.classList.add("selected-project");
        downArrow.style.display = "none";
        upArrow.style.display = "block";
        specOpen = true;
      }
    })
  })
  
}




