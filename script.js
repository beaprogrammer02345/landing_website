burger=document.querySelector('.burger')
logo=document.querySelector('.logo')
navbar=document.querySelector('.navbar')
navigation=document.querySelector('.navigation')
burger.addEventListener('click',()=>{

    navbar.classList.toggle('v-class-resp');
    logo.classList.toggle('v-class-resp');
    navigation.classList.toggle('h-nav');


})