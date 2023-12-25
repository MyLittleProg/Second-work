{
    
    
    document.querySelector('.header__burger').addEventListener('click',()=>{
       
        document.querySelector(".cont-mod").classList.toggle('active');
        document.querySelector(".plashka").classList.toggle('active-plashka');
        document.querySelector("body").classList.toggle('lock');

        if(document.querySelector(".plashka").classList == 'plashka active-plashka'){
            document.querySelector(".header__menu").style.display = "block";
        }else{
            document.querySelector(".header__menu").style.display = "none";
        }
    })
}