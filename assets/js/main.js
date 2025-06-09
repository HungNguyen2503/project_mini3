import { fetchApi } from "./fetchAPI.js";

let htmlUsers = document.querySelector(".users .row");
let htmlProducts = document.querySelector(".products .row");
let templateUser = document.querySelector(".template-user");
let templateProduct = document.querySelector(".template-product");


let itemUser = document.querySelector(".users .item");
let itemProduct = document.querySelector(".products .item");


function showProducts(products){
    products.forEach(product => {
        const clone = templateProduct.content.cloneNode(true);
        clone.querySelector(".item__img img").src = product.thumbnail;
        clone.querySelector(".item__content h2").textContent = product.title;
        clone.querySelector(".item__details span:first-child").textContent = "$" + product.price;
        clone.querySelector(".item__details span:last-child").textContent = "Còn lại: " + product.stock + " sp";
    
        htmlProducts.appendChild(clone);
    });
}


const getData = async () => {
    let apiUsers = await fetchApi("https://data-json-server-uxiu.onrender.com/api/users");
    let apiProducts = await fetchApi("https://data-json-server-uxiu.onrender.com/api/products");

    apiUsers.forEach(item => {
        const clone = templateUser.content.cloneNode(true);
        clone.querySelector("p").textContent = item.username;
        
        htmlUsers.appendChild(clone);
    });
    showProducts(apiProducts);
}

getData();
/*start form filter*/
const btnSearch = document.querySelector("#btn-search");
let i = 0;
btnSearch.addEventListener("click", async () =>{
    const inputSearch = document.querySelector("#search");
    const products = await fetchApi(`https://data-json-server-uxiu.onrender.com/api/products?title_like=${inputSearch.value.trim()}`);
    htmlProducts.innerHTML = ""; // Xóa nội dung cũ
    showProducts(products);
    
    
    console.log(++i);
});


const selectOption = document.querySelector("#sort");
selectOption.addEventListener("change", async () => {
    if(selectOption.value === "default") {
        htmlProducts.innerHTML = ""; // Xóa nội dung cũ
        const products = await fetchApi("https://data-json-server-uxiu.onrender.com/api/products");
        showProducts(products);
    }else if(selectOption.value === "asc") {
        htmlProducts.innerHTML = ""; // Xóa nội dung cũ
        const products = await fetchApi("https://data-json-server-uxiu.onrender.com/api/products?_sort=price&_order=asc");
        showProducts(products);
    }else if(selectOption.value === "desc") {
        htmlProducts.innerHTML = ""; // Xóa nội dung cũ
        const products = await fetchApi("https://data-json-server-uxiu.onrender.com/api/products?_sort=price&_order=desc");
        showProducts(products);
    }
});

/**end form filter */