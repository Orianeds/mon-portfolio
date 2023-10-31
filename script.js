// Javascript pour le menu hamburger
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
const aboutMe = document.querySelector(".about")
const competences = document.querySelector(".competences")
const projets = document.querySelector(".projets")
const contactMe = document.querySelector(".contact-me")

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})

aboutMe.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})

competences.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})

projets.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})

contactMe.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})


// Javascript pour l'animation d'écriture
const text = document.querySelector('.second-text');
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Oriane Da Silva !";
    }, 0);

    setTimeout(() => {
        text.textContent = "Conceptrice Développeuse d'Applications.";
    }, 4000);

    setTimeout(() => {
        text.textContent = "à la recherche d’une alternance pour février 2024.";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);


// Javascript for projects preview on click
let previewContainer = document.querySelector('.projects-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.projects-container .project').forEach(project =>{
    project.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = project.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
                if(name == target){
                    preview.classList.add('active');
                }
            });
    };
});

// Javascript to close the preview project with onclick
previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});