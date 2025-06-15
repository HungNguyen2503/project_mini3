import { apiProduct, htmlProducts, templateProduct } from "./variables.js";

export const drawProduct = ()=> {
    htmlProducts.innerHTML = "";
    apiProduct()
    .then(products => {
        products.forEach(product => {
            const clone = templateProduct.content.cloneNode(true);
            clone.querySelector(".item__img span").textContent = Math.round(product.discountPercentage*10)/10 + "%";
            clone.querySelector(".item__img img").src = product.thumbnail;
            clone.querySelector(".item__content h2").textContent = product.title;
            clone.querySelector(".item__details span:first-child").textContent = "$" + product.price;
            clone.querySelector(".item__details span:last-child").textContent = "Còn lại: " + product.stock + " sp";
            htmlProducts.appendChild(clone);
        });
    });
}