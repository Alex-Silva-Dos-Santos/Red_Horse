var current_item = 0;
    
function init(){
    var items = window.document.getElementsByClassName("product");
    var items_size = items.length;
    var controls = document.querySelectorAll(".control");
    console.log(controls);
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

function slide(){ 
    
    
}

function open_Menu(){
    var menu_Button = window.document.getElementById("show_menu");
    var menu = window.document.getElementById("menu");
    menu.classList.add('open');
    menu_Button.style.display = "none";
}

function close_Menu(){
    var menu_Button = window.document.getElementById("show_menu");
    var menu = window.document.getElementById("menu");
    menu.classList.remove('open');
    menu_Button.style.display = "inline-block";
}
        