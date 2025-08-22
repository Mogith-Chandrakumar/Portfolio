const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeList = document.querySelectorAll('.resume-list');
const resumebox = document.querySelectorAll('.resume-box');
const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfoliobox = document.querySelectorAll('.portfolio-box');

var typed = new Typed(".text", {
    strings: ["SE Undergraduate","Frontend developer","Flyer designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function toggleMore() {
  var moreText = document.getElementById("moreText");
  var btn = document.getElementById("toggleButton");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btn.innerText = "Read less";
  } else {
    moreText.style.display = "none";
    btn.innerText = "Read more";
  }
}

//nav bar action and selection and rotation when number is clicked
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`;
        
        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');

        const array = Array.from(sections);
        const arrsecs = array.slice(1 , -1);
        arrsecs.forEach (arrsec => {
            if (arrsec.classList.contains('active')) {
                sections[4].classList.add('action-contact');
            }
        });
        if (sections[0].classList.contains('active')) {
            sections[4].classList.remove('action-contact');
        }
    });
});

// resume selection when clicking tab-list
resumeList.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumebox[idx].classList.add('active');
    });
});
// portfolio section when clicking tab-list
portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfoliobox[idx].classList.add('active');
    });
});

//visibility for content action when reloading (cube reloading animation)
setTimeout(() => {
    sections[4].classList.remove('active');
}, 1500);