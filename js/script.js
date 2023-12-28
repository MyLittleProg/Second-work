{
    //Включения и выключения бургер меню
    
    document.querySelector('.header__burger').addEventListener('click',()=>{
       
        document.querySelector(".cont-mod").classList.toggle('active');
        document.querySelector(".plashka").classList.toggle('active-plashka');
        document.querySelector("body").classList.toggle('lock');

        if(document.querySelector(".plashka").classList == 'plashka active-plashka'){
            document.querySelector(".header__menu").style.display = "block";
            document.body.style.overflow = "hidden";
            document.querySelector('.wrapper').style.display = "none";
        }else{
            document.querySelector(".header__menu").style.display = "none";
            document.body.style.overflow = "scroll";
            document.querySelector('.wrapper').style.display = "block";
        }
    })

    //Включения и выключение спойлеров в футоре

        document.querySelector(".wrapper").addEventListener("click", function(event) {
            const target = event.target;
            const one_spoyler = document.querySelector('.active-spoiler_mod');
            
            if (target.classList.contains("item__title")) {
                if(one_spoyler != null){
                    if(one_spoyler.classList.contains("active-spoiler_mod")){
                        one_spoyler.classList.remove('active-spoiler_mod')
                       }
                }
               target.classList.toggle('active-spoiler_mod')
            }
        });
   

}