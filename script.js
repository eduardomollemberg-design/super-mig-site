console.log("Site carregado com sucesso!");

const menuMobile = document.querySelector('.menu-mobile');
const navList = document.querySelector('nav ul');

if(menuMobile && navList){

    menuMobile.addEventListener('click', () => {

        navList.classList.toggle('active');

    });

}