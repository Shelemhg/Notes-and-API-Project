import { Product } from "./products.js";
import {saveProduct} from "./products.js";
import {loadProductList} from "./products.js";
import {displayMessage} from "./products.js";
import {renderProducts} from "./products.js";
import {getAnsi} from "./products.js";
import {getInfo} from "./products.js";

var Products = [];

window.addEventListener("load", () => {
    Products = loadProductList();    
    renderProducts(Products);
} );

function changeColor(color){
    document.getElementById('message').classList.remove('white');    
    document.getElementById('message').classList.remove('green');
    document.getElementById('message').classList.remove('yellow');
    document.getElementById('message').classList.remove('red');
    document.getElementById('message').classList.add(color);
    return false;
}

export async function addNewProduct(){
    changeColor('white');
    var productUrl = document.getElementById("productUrl").value;
    var exp = /https:\/\/www.amazon.com\/*/ig;
    var correctUrl = productUrl.match(exp);


    if(correctUrl){
        console.log("URL matches amazon site");
        var ansi = getAnsi(productUrl);
        changeColor('yellow');
        displayMessage("Retriving information");
        // SEND REQUEST
        const product = await getInfo(ansi);

        if(product.product_title === undefined){
            changeColor('red');
            displayMessage("Error finding item. Please check the URL or try a different one.");
        }else{
            console.log("Saving new product");
            // SAVE product
            const newProduct = new Product(
                product.product_id, 
                product.product_title, 
                product.app_sale_price,
                product.product_main_image_url,
                product.available_quantity,
                `https://www.amazon.com/gp/product/${ansi}/`);            
            saveProduct(newProduct, Products);
            changeColor('green');
            displayMessage("Product added succesfully");
        }  
        Products = loadProductList();
    }else{
        changeColor('red');
        displayMessage("Please enter a valid URL");
    }
    renderProducts(Products); // Display Products on Screen
    return false;
}



document.getElementById("submit-btn").addEventListener("click", addNewProduct);