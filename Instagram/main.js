var tema = document.getElementById('idSwitch')
var escuro = false;

const groups = document.getElementsByClassName('group')
const apps = document.getElementsByClassName('get-the-app')
const noite = document.getElementsByClassName('darkTheme')
const logo = document.getElementsByClassName('instagram-logo')

tema.addEventListener('change',function(){
    for (i = 0; i < groups.length; i++){
        groups[i].classList.toggle('dark-group')
    }
    apps[0].classList.toggle('white-uv')
    noite[0].classList.toggle('white-uv')

    if (escuro){
        document.body.style.backgroundColor = '#f3f3f3';
        logo[0].setAttribute('src','img/Intagram-logo.png')
        escuro = false;
    } else {
        document.body.style.backgroundColor = '#181717';
        logo[0].setAttribute('src','img/Intagram-logo-light.png')
        escuro = true;
    }
})