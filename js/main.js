//scroll할 때 navbar background color 변경
// Element.getBoundingClientRect()
// 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공하는 DOMRect 객체를 반환
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar_dark');
    }else{
        navbar.classList.remove('navbar_dark');
    }
});

// menu toggle 기능
const navbarToggle = document.querySelector('.toggle');
const navbarMenu = document.querySelector('.navbar_menu');
const navbarLink = document.querySelector('.navbar_links');
navbarToggle.addEventListener('click',()=>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    navbarLink.classList.toggle('active');
});


