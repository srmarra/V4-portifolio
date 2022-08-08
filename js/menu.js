let menuIsOpened = false;
const button = document.querySelector('.Bmenu ul.button');
const menu = document.querySelector('.Bmenu ul.menu');


button.addEventListener("click", ()=>{
    if(!menuIsOpened){
        menu.style.display = 'flex'
        menu.style.transform = "none"
        menuIsOpened = true;
    }else{
        menu.style.display = 'none'
        menuIsOpened = false;
    }

})