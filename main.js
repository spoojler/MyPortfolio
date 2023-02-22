const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', (event) => {
  if (burger.classList.contains('active')) {
    burger.classList.remove('active');
    menu.classList.remove('active');
  } else {
    burger.classList.add('active');
    menu.classList.add('active');
  }
});

const cvButton = document.getElementById('cv-button');
const downloadButton = document.getElementById('download-button');
const cvImage = document.getElementById('cv-image');

const aboutMeButton = document.getElementById('aboutme-button');

const projectsButton = document.getElementById('projects-button');
const projectsArticle = document.getElementById('projects-article');

const contactButton = document.getElementById('contact-button');
const footer = document.getElementById('footer');

aboutMeButton.addEventListener('click', () => {
  burger.classList.remove('active');
  menu.classList.remove('active');
  window.scrollTo(0, 0);
});

projectsButton.addEventListener('click', () => {
  burger.classList.remove('active');
  menu.classList.remove('active');
  projectsArticle.scrollIntoView();
});

contactButton.addEventListener('click', () => {
  burger.classList.remove('active');
  menu.classList.remove('active');
  footer.scrollIntoView();
});

cvButton.addEventListener('click', () => {
  if (cvImage.classList.contains('active')) {
    cvImage.classList.remove('active');
    downloadButton.classList.remove('active');
    cvButton.innerText = 'Show CV';
  } else {
    cvImage.classList.add('active');
    downloadButton.classList.add('active');
    cvButton.innerText = 'Hide CV';
  }
});

const projectStack = document.querySelector('.project-stack');
projectStack.classList.remove('project-stack-animation');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      projectStack.classList.add('project-stack-animation');
      return;
    }
    projectStack.classList.remove('project-stack-animation');
  });
});

observer.observe(document.querySelector('.project-stack-wrapper'));
