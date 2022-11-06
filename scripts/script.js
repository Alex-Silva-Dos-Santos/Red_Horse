
var current_item = 0;
var items, items_size, controls, login_button, box, arrow_posi, arrow_left, arrow_right,
width;

//Definir valores das variaveis e chamar funções automaticas:

function init(){
    items = window.document.getElementsByClassName("p");
    items_size = items.length;
    controls = document.querySelectorAll(".control");
    login_button = document.getElementById('login_button');
    box = document.getElementById('login_box');
    arrow_left = document.getElementById("left");
    arrow_right = document.getElementById("right");
    slide();
    update_arrow_pos();
    if(window.innerWidth >= 500){
        window.addEventListener('resize', update_arrow_pos);
    }
    
}



//Atualizar posição dos botões do slide de acordo com o tamanho da tela:

function update_arrow_pos(){
    width = window.innerWidth;

    arrow_posi = (width * 4.7)/1360;
    arrow_posi = Number(arrow_posi.toFixed(1))+20;
    arrow_left.style.left = arrow_posi+"vw";
    arrow_right.style.right = arrow_posi+"vw";
}

function slide(){ 
    Array.from(controls).forEach(control => {
        control.addEventListener('click', () => {
            const isleft = control.classList.contains("arrow_left");
            if(isleft){
                current_item--;
            }else{
                current_item++;
            }
            if(current_item >= items_size){
                current_item = 0;
            }if(current_item < 0){
                current_item = items_size - 1;
            }
            Array.from(items).forEach(element => {
                element.classList.remove('current'); 
            });
            items[current_item].scrollIntoView({
                nline: "center",
                behavior: "smooth",
                block: "nearest"
            })
            Array.from(items)[current_item].classList.add('current');
        });
    });
    
}

//Abrir Menu:

function open_Menu(){
    var menu_Button = window.document.getElementById("show_menu");
    var menu = window.document.getElementById("menu");
    menu.classList.add('open');
    menu_Button.style.display = "none";
}

//Fechar Menu:

function close_Menu(){
    var menu_Button = window.document.getElementById("show_menu");
    var menu = window.document.getElementById("menu");
    menu.classList.remove('open');
    menu_Button.style.display = "inline-block";
}

//Abrir Login:
        
function open_login(){
    close_Menu();
    Array.from(controls).forEach(element => {
        element.style.display = 'none';
    });
    box.classList.remove('closed_login');
    var container = document.getElementById('container');
    container.style.position= 'unset';  
    Array.from(items).forEach(element => {
        element.classList.remove('product');
    });
}

//Fechar Login

function close_login(){
    box.classList.add('closed_login');
    Array.from(controls).forEach(element => {
        element.style.display = 'unset';
    });
    Array.from(items).forEach(element => {
        element.classList.add('product');
    });
}