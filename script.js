const navBar = document.querySelector('nav');

const pageOneObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry=> {
    if (!entry.isIntersecting) {
      navBar.classList.add("show");
    } else {
      navBar.classList.remove("show");
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
    threshold: 0.5
  }
);

pageThreeObserver.observe(pageThree);