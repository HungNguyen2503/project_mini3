import { drawProduct } from "./drawProduct.js";
import { drawUser } from "./drawUser.js";
import { params } from "./variables.js";

async function getData(){
    await drawUser();
    await drawProduct();
    hideSplash();
}

getData();




/*start form filter*/
const btnSearch = document.querySelector("#btn-search");
btnSearch.addEventListener("click", async () =>{
    const inputSearch = document.querySelector("#search");
    params.q = inputSearch.value.trim();
    drawProduct();
});

const selectOption = document.querySelector("#sort");
selectOption.addEventListener("change", async () => {
    switch(selectOption.value){
        case "default":{
            params.sort = "";
            params.order = "";
            break;
        }
        case "price_asc":{
            params.sort = "price";
            params.order = "asc";
            break;
        }
        case "price_desc":{
            params.sort = "price";
            params.order = "desc";
            break;
        }
        case "discount_desc":{
            params.sort = "discountPercentage";
            params.order = "desc";
            break;
        }
    }
    
    drawProduct();
});
/**end form filter */


/**Paginate start */
const btnPrev = document.querySelector(".paginationPrev");
const btnNext = document.querySelector(".paginationNext");
const pageNum = document.querySelector(".paginationNumb");
btnPrev.addEventListener('click', ()=>{
    if(params.page > 1){
        params.page--;
        pageNum.innerHTML = params.page;
        drawProduct();
    }
});
btnNext.addEventListener('click', ()=>{
    params.page++;
    pageNum.innerHTML = params.page;
    drawProduct();
});
/**Paginate end */

/**Splash start */
function hideSplash(){
    document.querySelector(".splash").classList.add("splash-hide");
    document.querySelector("body").style.overflow = "auto";
    setTimeout(()=>{
        
        document.querySelector(".splash").style.display = "none";
    },2000);
}
/**Splash end */