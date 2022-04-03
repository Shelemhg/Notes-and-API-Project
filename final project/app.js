import { Product } from "./products.js";
import {saveProduct} from "./products.js";
import {loadProductList} from "./products.js";
import {displayMessage} from "./products.js";
import {displayProducts} from "./products.js";
import {getAnsi} from "./products.js";
import {getInfo} from "./products.js";
import {deleteProduct} from "./products.js";

var Products = [];


window.addEventListener("load", () => {
    // window.localStorage.clear();
    Products = loadProductList();    
    // console.log(Products[1].id);
    displayProducts(Products);
} );

async function addNewProduct(){
    var productUrl = document.getElementById("productUrl").value;
    var exp = /https:\/\/www.amazon.com\/*/ig;
    var correctUrl = productUrl.match(exp);


    if(correctUrl){
        console.log("URL matches amazon site");
        var ansi = getAnsi(productUrl);
        // SEND REQUEST
        const product = await getInfo(ansi);

        if(product.product_title === undefined){  
            document.getElementById('ansi').innerHTML = ansi;
            displayMessage("Error finding item. Please check the URL or try a different one.");
        }else{
            console.log("Saving new product");
            // SAVE product
            const newProduct = new Product(
                product.product_id, 
                product.product_title, 
                product.app_sale_price,
                product.product_main_image_url,
                product.available_quantity);            
            saveProduct(newProduct, Products);
        }

        

        Products = loadProductList();    
        // // console.log(Products[1].id);
        // document.getElementById('result').innerHTML = displayProducts(Products);
        
        // displayInfo(productInfo);
    }else{
        displayMessage("Please enter a valid URL");
    }
    displayProducts(Products);

    return false;
}



document.getElementById("submit-btn").addEventListener("click", addNewProduct);