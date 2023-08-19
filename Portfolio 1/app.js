const hamberger =  document.querySelector('.header .nav-bar .nav-list .hamburger' );
const mobileMenu =  document.querySelector('.header .nav-bar .nav-list ul' );
const header =  document.querySelector('.header.container');

hamberger.addEventListener('click', ()=>{
    hamberger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

header.addEventListener('scroll', ()=>{
    var scroll_position = window.screenY;
    if(scroll_position>100){
        
    }
});

