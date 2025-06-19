import { fetchApi } from "./fetchAPI.js";
import { API_PRODUCT, API_CATEGORY } from "./constants.js";

export let params = {
    q: "",
    sort: "",
    order: "",
    page: 1,
    limit: 12,
    category: ""
}
 
export let htmlCategories = document.querySelector(".categories .row");
export let htmlProducts = document.querySelector(".products .row");
export let templateCategory = document.querySelector(".template-category");
export let templateProduct = document.querySelector(".template-product");

export const selectOption = document.querySelector("#sort");
export const btnSearch = document.querySelector("#btn-search");
export const btnPrev = document.querySelector(".paginationPrev");
export const btnNext = document.querySelector(".paginationNext");
export const pageNum = document.querySelector(".paginationNumb");


export let apiCategory = await fetchApi(API_CATEGORY);
export let apiProduct = async () =>{
    if(params.category!="")
        return await fetchApi(API_PRODUCT + `?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}&category=${params.category}`);
    return await fetchApi(API_PRODUCT + `?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}`);
}