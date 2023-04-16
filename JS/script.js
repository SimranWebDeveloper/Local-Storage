import { languages } from "./data.js";


const btnEng=document.querySelector('.eng');
const btnAze=document.querySelector('.aze');
const langArr=document.querySelectorAll('[data-lang="en"]');
let langSet;




let font_color=document.querySelector('#font-color');
let btn_color=document.querySelector('.btn-color');
let colorsArray=document.getElementsByClassName('select-color')
let btnSet=font_color.className;


function localStoreSelect(btnSet,color,icon) {
    btn_color.innerHTML=icon;
    font_color.className=  btnSet//'bg-light'
    btnSet=  font_color.className
    localStorage.setItem('btnSet',btnSet)
    for(let element of colorsArray ){
        element.style.color=color
    };
    //   For Azerbaijan languages
    if (localStorage.getItem('langSet')==='az') {
        for (const index in languages.az) {
            langArr[index].innerHTML= languages.az[index];
    
        }
    }
    else  {
        for (const index in languages.en) {
            langArr[index].innerHTML= languages.en[index];
    
        }
    }
}

if (localStorage.getItem('btnSet')==='bg-light') {
    localStoreSelect('bg-light','black','<i class="bi bi-brightness-high"></i>')
}
else{
    localStoreSelect('bg-dark','white','<i class="bi bi-moon text-light"></i>')
}








function localStoreSet(btnSet,color,icon) {
    btn_color.innerHTML=icon;
    font_color.className=  btnSet//'bg-light'
    btnSet=  font_color.className
    localStorage.setItem('btnSet',btnSet)
    for(let element of colorsArray ){
        element.style.color=color
    };

}

btn_color.addEventListener('click',()=>{
    // when white
    
    if (font_color.className==='bg-light') {
            localStoreSet('bg-dark','white','<i class="bi bi-moon text-light"></i>')
    }
    // when dark
    else{
        localStoreSet('bg-light','black','<i class="bi bi-brightness-high"></i>')
    }

})


btnAze.addEventListener('click',()=>{
    langSet='az';
    for (const index in languages.az) {
        langArr[index].innerHTML= languages.az[index];

    }
    localStorage.setItem('langSet',langSet)
})
btnEng.addEventListener('click',()=>{
    langSet='en'
    for (const index in languages.en) {
        langArr[index].innerHTML= languages.en[index];
    }
    localStorage.setItem('langSet',langSet)
})