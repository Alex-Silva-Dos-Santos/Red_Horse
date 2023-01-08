
var current_item = 0;
var items, items_size, controls, login_button, login_box, arrow_posi, arrow_left, arrow_right,
width, products_amount;
var products = [
    {"flavor": "Maçã Verde", "product_img": "imagens/RedMacaVerde.jpg", "price":"7.999,99", "id":"324"},
    {"flavor": "Frutas Tropicais", "product_img": "imagens/RedFrutasTropicais.jpg", "price":"7.999,99", "id":"543"},
    {"flavor": "Coco&Açai", "product_img": "imagens/RedCoco&Açai.jpg", "price":"7.999,99", "id":"049"},
    {"flavor": "Original", "product_img": "imagens/redHorse.webp", "price":"7.999,99", "id": "390"}
]
var others_products = [
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "111"},
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "222"},
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "333"},
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "444"},
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "555"},
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "666"},
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "777"},
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "888"},
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "999"},
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "123"},
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "324"},
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "545"},
    {"type": "Ice", "flavor": "Red Fruits", "product_img": "imagens/Ice.png", "price":"000.000,00", "id": "247"},
]

var cart = [];

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
    var buttons = document.getElementsByClassName("add_product_button");

    slide();       
}

 //Create product list
 function addProductsToList(){
    //#####################Slide#################################
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
        product_img.classList.add("prod_img");
        price_paragraph.classList.add("price")
        add_button.classList.add("add_product_button");
        add_button.setAttribute("id", `${products[c]["id"]}`);
        add_button.addEventListener("click", function(){
            document.getElementById("manage_prod_window").style.display = "unset";
            constructProdWindow(add_button, products);
        })       
    }
    //##############################################################
    for(c = 0; c < others_products.length; c++){
        let prod_descrip = document.createElement("p");
        let price = document.createElement("p");
        let button = document.createElement("button");
        let product_img = document.createElement("img");
        let list = document.getElementById("product_list");
        let list_item = document.createElement("li");

        price.innerHTML = others_products[c]["price"];
        button.innerHTML = "ADCIONAR";
        product_img.setAttribute("src", others_products[c]["product_img"]);
        prod_descrip.innerHTML = `${others_products[c]["type"]} ${others_products[c]["flavor"]} 275ml 960 unidades`;
        
        list_item.appendChild(product_img);
        list_item.appendChild(prod_descrip);
        list_item.appendChild(price);
        list_item.appendChild(button);
        list.appendChild(list_item);

        button.setAttribute("id", `${others_products[c]["id"]}`);
        button.classList.add("add_product_button");
        product_img.classList.add("prod_img");

        button.addEventListener("click", function(){
            document.getElementById("manage_prod_window").style.display = "unset";
            constructProdWindow(button, others_products);
        })

        list_item.classList.add("others_products");
        price.classList.add("price");                
    }
    

 }  

 function constructProdWindow(object, list){

    let manage_prod_window = document.getElementById("manage_prod_window");
    let product_container = document.querySelector("#prod_container");
    let confirm_button = document.querySelector("#confirm_button");
    let cancel_button = document.querySelector("#cancel_button");  
    let buttons_container = document.querySelector("#buttons_container");
    let prod_img = document.querySelector("#prod_img");
    let description = document.querySelector("#description");
    let price = document.querySelector("#price");
    let range_form = document.querySelector("#prod_amount");
    let amount_value = document.querySelector("#amount_value");

    for(var c = 0; c < list.length; c++){
        if(list[c]["id"] == object.id.toString()){

            prod_img.setAttribute("src", list[c]["product_img"]);
            description.innerHTML = list[c]["type"] + list[c]["flavor"] + "275ml 960 unidades";
            price.innerHTML = list[c]["price"];                        
        }
    }
    
  
    
    product_container.setAttribute("id", "product_info_container")

    updateAmount(amount_value, range_form)
    document.addEventListener("input", function(){     
        updateAmount(amount_value, range_form);
    })

    buttons_container.style.display = "flex";
    

    cancel_button.addEventListener("click", function(){
        document.getElementById("manage_prod_window").style.display = "none";
    })

    manage_prod_window.style.right = "0%"

}

function updateAmount(object, range){
    object.innerHTML = range.value;
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

function destructWindow(window){
    document.parentNode.removeChild(window);
}

