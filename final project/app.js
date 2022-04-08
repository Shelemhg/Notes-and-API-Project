import { Product } from "./products.js";
import {loadProductList} from "./products.js";
import {displayMessage} from "./products.js";
import {renderProducts} from "./products.js";
import {getAnsi} from "./products.js";
import {getInfo} from "./products.js";
import {searchID} from "./products.js";

var Products = [];

window.addEventListener("load", () => {
    Products = loadProductList();    
    renderProducts(Products);
} );

export async function addNewProduct(){
    var productUrl = document.getElementById("productUrl").value;
    var exp = /https:\/\/www.amazon.com\/*/ig;
    var correctUrl = productUrl.match(exp);

    if(correctUrl){
        console.log("URL matches amazon site");
        var ansi = getAnsi(productUrl);
        // console.log("ANSI: " + ansi);
        displayMessage("Retriving information", "yellow");

        // SEND REQUEST
        const product = await getInfo(ansi);

        if(product.product_title === undefined){
            displayMessage("Error finding item. Please check the URL or try a different one.", "red");
        }else{
            // SAVE product data to variable: newProduct
            const newProduct = new Product(
                product.product_id, 
                product.product_title, 
                product.app_sale_price,
                product.product_main_image_url,
                product.available_quantity,
                `https://www.amazon.com/gp/product/${ansi}/`,
                document.getElementById("comment").value); 
            //  Check if the product ID or ANSI already exists in the database, if so, save only date and price, else, save the whole thing
            searchID(newProduct, Products);
            //  Clear inputs
            document.getElementById("productUrl").value = "";
            document.getElementById("comment").value = "";
            displayMessage("Product added succesfully", "green");
        } 
        Products = loadProductList();
    }else{
        displayMessage("Please enter a valid URL", "red");
    }
    // //  Dummy Product
    // console.log("Saving new product");
    // // SAVE product
    // const newProduct = new Product(
    //     "111", 
    //     "Title test 1", 
    //     3.99,
    //     "URL test 1",
    //     11,
    //     `https://www.amazon.com`,

    // console.log("addition to array:");
    // console.log(JSON.stringify(newProduct.price_history));

    renderProducts(Products); // Display Products on Screen
    return false;
}

document.getElementById("submit-btn").addEventListener("click", addNewProduct);