///////
let diaSemana = document.querySelectorAll('.semana .box');
let inputs = document.querySelectorAll('.semana .box .taskInput');
let listItem = document.getElementsByClassName("item");
let rainbowBtn = document.getElementById('rainbowBtn');
let body = document.querySelectorAll('body')
let siteLogo = document.getElementById('site-logo');
let siteMenu = document.getElementById('site-menu');
let menuBtn1 = document.getElementById('menu-btn1');
let menuBtn2 = document.getElementById('menu-btn2');
let menuBtn3 = document.getElementById('menu-btn3');

let boxSelected = false;

async function waitAndLoadSlayer(){
    await new Promise(r => setTimeout(r, 700));
    window.location.href = "index.html";
}
async function waitAndLoadAbout(){
    await new Promise(r => setTimeout(r, 700));
    window.location.href = "about.html";
}
async function waitAndLoadManual(){
    await new Promise(r => setTimeout(r, 700));
    window.location.href = "manual.html";
}


//LOGO SLIDE
function logoSlide(){
    siteLogo.style.margin = '10px 0 0px 4000px';
    siteMenu.style.margin = '-40px';
    menuBtn1.style.color = '#fff';
    menuBtn2.style.color = '#fff';
    menuBtn3.style.color = '#fff';
}


//RAINBOW MODE
function rainbowMode(){
    
        setInterval(function(){

            for(z = 0; z < diaSemana.length; z++){       
                
                changeColorBG(body[0]);    
         }
        },2000)
       
    }    
    



//COLORS
function changeColorBG(e){
    let red = '#ffbebc';
    let yellow = '#ffffd1';
    let green = '#dbffd6';
    let blue = '#c4faf8';
    let purple = '#ecd4ff';
    let colorPalette = [red, yellow, green, blue, purple];
    let randomIndex = Math.floor(Math.random() * colorPalette.length);
    let randomColor = colorPalette[randomIndex];
    e.style.backgroundColor = randomColor;
}

//SEMANA BOX SECTION
//BOX IS SELECTED?
setInterval(function(){

    for(i = 0; i < diaSemana.length; i++) {
        if(inputs[i].style.display === 'block'){
            boxSelected = true;
            break;
        }else if(boxSelected == true && inputs[i].style.display === 'none'){
            boxSelected = false;
        }
    }

    //BOX IS SELECTED
    if(boxSelected === true){

    
    }


    //BOX IS NOT SELECTED
    if(boxSelected === false){
    for(i = 0; i < diaSemana.length; i++){
        diaSemana[i].style.backgroundColor = '#fff';
    }
    for(a = 0; a < listItem.length; a++){
        listItem[a].classList.remove('change-style');
    }          
    }



},100);




document.addEventListener('click',function(e){    
     

    function decorateBox(){       

        //BORDERS
    for(b = 0; b < listItem.length; b++){
        listItem[b].classList.remove('change-style');
      }

      //COR DE BOX SELECIONADA
    for(i = 0; i < diaSemana.length; i++){
        
        let inputType = diaSemana[i].childNodes[3].nodeName
        diaSemana[i].style.transition = '0.3s'

        if( inputType === 'INPUT' && inputs[i].style.display === 'block'){
            changeColorBG(diaSemana[i])
            
            for(a = 0; a < listItem.length; a++){
                listItem[a].classList.add('change-style');
            }            
        }else{
            diaSemana[i].style.backgroundColor = '#fff'
        }
        
       } 
    }   

       //ENTER DECORATION
       document.addEventListener("keypress", function (event)
       {
           if (event.key === "Enter")
           {
                decorateBox();          
           }          
       }) 

       decorateBox();

})






   

       


