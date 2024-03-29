//inicializace proměných a vyběr elementu pomoci querySelector

let header = document.querySelector('.header');
let site = document.querySelector('.site');
let btn = document.querySelector('.btn');

let imageOverlay = document.querySelector('.image-container').children[0];
let mainImage = document.querySelector('.image-container').children[1];

let links = Array.from(document.querySelectorAll('.link'));


//animace slide vyvotřena v css keyframes slide. 
//Funkce je zavolaná na konci setTimeout{},2000
function animate () {
    setTimeout(() =>{
      header.classList.add('active');  
      imageOverlay.style.animation = 'slide 1s forwards';
      mainImage.style.animation = 'slide-perm 1s forwards';
    }, 2000);

    setTimeout(()=>{
        site.classList.add('active');
        btn.classList.add('active');
    },3000);

    links.forEach((link, index) =>{
        setTimeout(()=>{
            link.classList.add('active');
        }, (index * 200) + 2500)
    })
}

animate()

