
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert('Open article details (simulate navigation)');
  });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


const searchToggle = document.getElementById('searchToggle');
const searchBox = document.getElementById('searchBox');

searchToggle.addEventListener('click', () => {
  if (searchBox.style.display === 'block') {
    searchBox.style.display = 'none';
  } else {
    searchBox.style.display = 'block';
    searchBox.focus();
  }
})

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.pointerEvents = 'none';

  setTimeout(() => {
    preloader.remove();
  }, 500); 
});
document.addEventListener("DOMContentLoaded", function () {
  const ad = document.getElementById("filestackAd");
  const triggerScrollPoint = 900;
  let isSticky = false;

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > triggerScrollPoint && !isSticky) {
      ad.classList.add("sticky");
      isSticky = true;
    } else if (scrollY <= triggerScrollPoint && isSticky) {
      ad.classList.remove("sticky");
      isSticky = false;
    }
  }


  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
});


  
  