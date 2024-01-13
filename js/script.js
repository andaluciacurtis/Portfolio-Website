const currentURL = window.location.href;
let isPageOne = false;

if (!currentURL.includes("/project-specs")) {
  // ADDING NAV INTERSECTION OBSERVERS
  // BUT ONLY FOR THE FIRST PAGE
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
    {
      rootMargin: "-100px 0px 0px 0px"
    }
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
    {
      rootMargin: "-100px 0px 0px 0px",
      threshold: 0.3
    }
  );

  pageThreeObserver.observe(pageThree);
}

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
  bgDimmer.classList.toggle("dimmer-show");
}

// Project page
const projects = document.querySelectorAll(".project");
let specOpen = false;

projects.forEach(project=> {
  let readMore = project.querySelector(".read-more");
  let spec = project.querySelector(".outer-spec-container");

  readMore.addEventListener("click", ()=> {
    let currentlyOpen = spec.style.height != "0px";

    if (currentlyOpen) {
      spec.style.height = "0px";
      specOpen = false;
    } else {
      // close any specs that are open
      if (specOpen) {
        for (let i = 0; i < projects.length; i++) {
          if (projects[i] != project) {
            projects[i].querySelector(".outer-spec-container").style.height = "0px";
          }
        }
      }

      spec.style.height = "600px";
      specOpen = true;
    }
  })
})