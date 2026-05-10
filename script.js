// Scroll Suave para link Interno

const linksInterno = document.querySelectorAll('a[href^="#"]');

function scrollSuave(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
};

linksInterno.forEach((item)=>{
    item.addEventListener('click', scrollSuave);
});

// Animação do site Slide

const elementosSection = document.querySelectorAll("section *");
elementosSection.forEach((item)=>{
item.classList.add('animacao');
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animacao--ativo");
      observer.unobserve(entry.target); 
    }
}) 
}, {threshold: 0.2}); 

elementosSection.forEach((item) => {
  observer.observe(item);
});
