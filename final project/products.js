import {addNewProduct} from "./app.js";

export function loadProductList() {
    if (localStorage.getItem("Products") === null){
        var Products = [];
        localStorage.setItem('Products', JSON.stringify(Products));
        console.log("Products local S. Creado");
    }else{
        var Products = JSON.parse(localStorage.getItem('Products'));
        console.log("Products ya existe");
    }
    return Products;
}

export function getAnsi(productUrl){
    var index =  productUrl.split('/', 5).join('/').length;
    var ansi = productUrl.slice(index+1, index+11);
    return ansi;
}

export async function getInfo(ansi){
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
            'X-RapidAPI-Key': 'b833dc5582msha968449f5ac6b83p15b2e5jsn17749342ae63'
        }
    };
    
    return fetch(`https://amazon24.p.rapidapi.com/api/product/${ansi}?country=US`, options)
        .then(response => response.json())
        // .then(response => saveProduct(response, Products))
        // .then(response => displayInfo())
        .catch(err => console.error(err));
}

export function saveProduct(newProduct, Products){
    Products.push(newProduct);
    localStorage.setItem('Products', JSON.stringify(Products));
    return false;
}

export function displayInfo(response){
    var Products = JSON.parse(localStorage.getItem('Products'));
    console.log("Ahi viene Products");
    console.log(Products);
    console.table(Products);
    return false;
}

export function displayMessage(msg){
    document.getElementById('message').innerHTML = msg;
}


export class Product {
    constructor(id, title, price, imageUrl, quantity, url, comment) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.date = Date();  
        this.imageUrl = imageUrl; 
        this.quantity = quantity;
        this.url = url;
        this.comment = comment; 
    }
}

function addEveLis(Products){
    for (let i = 0; i < Products.length; ++i) {
        var elem = document.getElementById('delete-' + i);
        elem.addEventListener('click', function(event){deleteProduct('Products',i);});
        var check = document.getElementById('check-' + i);
        check.addEventListener('click', function(event){
            document.getElementById("productUrl").value = "";
            document.getElementById("productUrl").value = Products[i].url;
            addNewProduct();
        });
    }
}

export function renderProducts(Products){
    var dp = '';

    for (let i=0; i < Products.length; i++){
        if(Products[i].comment){
            var comment = Products[i].comment;
        }else{
            var comment = "";
        }
        dp += '<div class="product-wrapper">';
        dp += `<div class="img-wrapper"><img src="${Products[i].imageUrl}"></div>`;
        dp += `<div class="info-wrapper"><h3>${Products[i].title}</h3>`;
        dp += `<a href="${Products[i].url}" target="_blank">${Products[i].url}</a>`;        
        dp += `<p>ANSI: ${Products[i].id}</p>`;
        dp += `<p>Stock: ${Products[i].quantity}</p>`;
        dp += `<p>Comment: ${comment}</p>`;
        dp += `<div class="date-item">Date Consulted: ${Products[i].date}</div></div>`;
        dp += `<div class="price-wrapper"><h3>$ ${Products[i].price}</h3></div>`;
        dp += `<div class="buttons-wrapper"><button id="delete-${i}" class="delete-btn">Delete</button>`;
        dp += `<button id="check-${i}">Check Price Now</button></div>`;
        dp += '</div><hr>';
    }
    document.getElementById('result').innerHTML = dp;
    addEveLis(Products);
    console.table(Products);
    return false;
}

export function deleteProduct(ArrayName, item){
    var Products = JSON.parse(localStorage.getItem(ArrayName));
    console.log("Delete item: " + item);
    console.log(Products);
    Products.splice(item, 1);
    localStorage.setItem('Products', JSON.stringify(Products));    
    renderProducts(Products);
    return false;
}

