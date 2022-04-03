
export function loadProductList() {
    if (localStorage.getItem("Products") === null){
        var Products = [];
        localStorage.setItem('Products', JSON.stringify(Products));
        console.log("Products local S. Creado");
    }else{
        var Products = JSON.parse(localStorage.getItem('Products'));
        console.log("Products ya existe");
    }
    // console.table(Products);
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
    // var newProduct = {
    //     "isPrime":false,
    //     "product_id":"B07T81554H",
    //     "product_title":"Sony WF-1000XM3 Industry Leading Noise Canceling Truly Wireless Earbuds Headset/Headphones with AlexaVoice Control And Mic For Phone Call, Black",
    //     "noResults":false,
    //     "message":"",
    //     "product_detail_url":"https://www.amazon.com/dp/B07T81554H",
    //     "original_price":199.99,
    //     "app_sale_price":"128.0",
    //     "currency":"$",
    //     "discount":"71.99",
    //     "discount_percentage":"36.00",
    //     "product_overview":{
    //         "_Brand_":"Sony",
    //         "_Ear_Placement_":"In Ear",
    //         "_Color_":"Black",
    //         "_Connectivity_Technology_":"Wireless",
    //         "_Model_Name_":"WF-1000XM3/B"
    //     },
    //     "product_technical_spec":{
    //         },
    //     "reviews_number":"17,796 ratings",
    //     "product_main_image_url":"https://m.media-amazon.com/images/I/61zKkP36kDL._AC_SL1500_.jpg",
    //     "product_information_html":[
    //     ],
    //     "available_quantity":30,
    //     "breadcrumbs":[],
    //     "price_information":{
    //         "app_sale_price":128,
    //         "currency":"$",
    //         "original_price":199.99,
    //         "discount":71.99,
    //         "discount_percentage":36
    //     }
        
    // }
    // var testProduct = {
    //     "product_id":"B07T81554H",
    //     "product_title":"Sony WF-1000XM3 Industry Leading Noise Canceling Truly Wireless Earbuds Headset/Headphones with AlexaVoice Control And Mic For Phone Call, Black",
    //     "original_price":199.99        
    // }
    // saveProduct(testProduct, Products);
    // return false;

}

export function saveProduct(newProduct, Products){
    // console.log("Saving Response:" + newComment + "in Products.");
    Products.push(newProduct);
    localStorage.setItem('Products', JSON.stringify(Products));

    // console.table(Products);
    return false;
}

export function displayInfo(response){
    var Products = JSON.parse(localStorage.getItem('Products'));
    console.log("Ahi viene Products");
    console.log(Products);
    console.table(Products);
    // document.getElementById('result').innerHTML = response.app_sale_price;
    // document.getElementById('result').innerHTML = response;
    return false;
}

export function displayMessage(msg){
    document.getElementById('message').innerHTML = msg;
}


export class Product {
    constructor(id, title, price, imageUrl, quantity) {
        this.id = id;
        this.title = title;
        this.price = parseInt(price);
        this.date = Date();  
        this.imageUrl = imageUrl; 
        this.quantity = quantity;     
    }
}

function addEveLis(Products){
    for (let i = 0; i < Products.length; ++i) {
        var elem = document.getElementById('delete-' + i);
        elem.addEventListener('click', function(event){deleteProduct('Products',i);});
    }
}

export function displayProducts(Products){
    var dp = '';

    for (let i=0; i < Products.length; i++){
        dp += '<div class="product-wrapper">';
        dp += `<h3>${Products[i].title}</h3>`;
        dp += `<p>${Products[i].id}</p>`;
        dp += `<button id="delete-${i}">Delete</button>`;
        dp += '</div>';
    }
    document.getElementById('result').innerHTML = dp;
    addEveLis(Products);
    console.table(Products);
    return false;
}

export function deleteProduct(ArrayName, item){
// export function deleteProduct(){
    var Products = JSON.parse(localStorage.getItem(ArrayName));
    console.log("Delete item: " + item);
    console.log(Products);
    Products.splice(item);
    localStorage.setItem('Products', JSON.stringify(Products));    
    displayProducts(Products);
    return false;
}

