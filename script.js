const navBar = document.querySelector('nav');
const outerContainer = document.querySelector('.outer-container');

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