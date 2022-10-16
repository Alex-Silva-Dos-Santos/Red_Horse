var current_item = 0;
var sl = setInterval(slide, 3000);


function slide(){

    var items = window.document.getElementsByClassName("product");
    var items_size = items.length;
    current_item++;
    if(current_item >= items_size){
        current_item = 0;
    }
    Array.from(items).forEach(element => {
        element.classList.remove('current'); 
});
    Array.from(items)[current_item].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
    });  
    Array.from(items)[current_item].classList.add('current');
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
        