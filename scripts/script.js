
var current_item = 0;
var items, items_size, controls, login_button, login_box, arrow_posi, arrow_left, arrow_right,
width, products_amount;
var products = [
    {"flavor": "Maçã Verde", "product_img": "imagens/RedMacaVerde.jpg", "price":"7.999,99"},
    {"flavor": "Frutas Tropicais", "product_img": "imagens/RedFrutasTropicais.jpg", "price":"7.999,99"},
    {"flavor": "Coco&Açai", "product_img": "imagens/RedCoco&Açai.jpg", "price":"7.999,99"},
    {"flavor": "Original", "product_img": "imagens/redHorse.webp", "price":"7.999,99"}
]
var others_products = [
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
    {"type": "ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00"},
]


//Definir valores das variaveis e chamar funções automaticas:

window.addEventListener("load", init);

function init(){
    addProductsToList();
    items = window.document.getElementsByClassName("p");
    items_size = items.length;
    controls = document.querySelectorAll(".control");
    login_button = document.getElementById('login_button');
    login_box = document.getElementById('login_box');
    arrow_left = document.getElementById("left");
    arrow_right = document.getElementById("right");
    
    slide();       
}

 //Create product list
 function addProductsToList(){
    for( c = 0; c < products.length; c++){
        //tags creation
        let price_paragraph = document.createElement("p");
        let img_path = products[c]["product_img"];
        let paragraph = document.createElement('p');
        let list = document.getElementById("list");
        let product_img = document.createElement("img");
        let list_item = document.createElement("li");
        let add_button = document.createElement("button");
        
        //defining tags content;
        price_paragraph.innerHTML = products[c]["price"];
        paragraph.innerHTML = "Red Horse "+products[c]["flavor"]+" 480 unidades";
        add_button.innerHTML = "ADCIONAR";
        product_img.setAttribute("src", img_path)
        list_item.appendChild(product_img);   
        list_item.appendChild(paragraph);
        list_item.appendChild(price_paragraph);
        list_item.appendChild(add_button);
        list.appendChild(list_item);
        
        //class definition
        if(c == 0){
            list_item.classList.add("current");
        }
        list_item.classList.add("p");
        list_item.classList.add("product");
        price_paragraph.classList.add("price")
        add_button.classList.add("add_product_button");
        


    }
    for(c = 0; c < others_products.length; c++){
        let price = document.createElement("p");
        let button = document.createElement("button");
        let img = document.createElement("img");
        let list = document.getElementById("product_list");
        let list_item = document.createElement("li");

        price.innerHTML = others_products[c]["price"];
        button.innerHTML = "ADCIONAR";
        img.setAttributte("src", others_products[c][product_img]);

    }
 }  


//Atualizar posição dos botões do slide de acordo com o tamanho da tela:



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
    let menu_Button = window.document.getElementById("show_menu");
    let menu = window.document.getElementById("menu");
    menu.classList.add('open');
    menu_Button.style.display = "none";
}

//Fechar Menu:

function close_Menu(){
    let menu_Button = window.document.getElementById("show_menu");
    let menu = window.document.getElementById("menu");
    menu.classList.remove('open');
    menu_Button.style.display = "inline-block";
   
}

//Abrir Login:
        
function open_login(){

    close_Menu();

   
    let container = document.getElementById('container');
    let menu_button = document.getElementById("show_menu");   
      
    login_box.classList.remove("closed_login");  
    container.style.position = 'unset';  
    Array.from(items).forEach(element => {
        element.classList.remove('product');
    });
    menu_button.style.position = 'unset';  
}

//Fechar Login

function close_login(){
   
    let menu_button = document.getElementById("show_menu");
    menu_button.style.position = "absolute";  
    login_box.classList.add("closed_login")
    Array.from(items).forEach(element => {
        element.classList.add('product');
    });
    
   
    
}

function addProduct(){
    let amount_txt = document.getElementById("products_amount");
    products_amount = Number(amount_txt)+1;
    products_amount.toString();
    amount_txt.innerHTML = `${products_amount}`;
}