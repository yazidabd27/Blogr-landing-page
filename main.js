let icon=document.getElementById('icon');
let collapse= document.querySelector('.collapse');
let show=true;

let navlinks=document.querySelectorAll('.nav-link');
let dropdown=document.querySelectorAll('.dropdown-menu');
let arrowLight=document.querySelectorAll('.toggle .arrow-light');
let arrowDark=document.querySelectorAll('.toggle .arrow-dark');

icon.onclick=()=>{
    if(show){
        collapse.classList.add('show');
        icon.src='images/icon-close.svg';
        show=false;
    }else{
        collapse.classList.remove('show');
        icon.src='images/icon-hamburger.svg';
        show=true;
    }
}

navlinks.forEach((nav,index)=>{
    nav.onclick=()=>{
        if(dropdown[index].classList.contains('show')){
            dropdown[index].classList.remove('show');
            arrowLight[index].classList.remove('rotate');
            arrowDark[index].classList.remove('rotate');
        }else{
            dropdown[index].classList.add('show');
            arrowLight[index].classList.add('rotate');
            arrowDark[index].classList.add('rotate');
        }
    }
})