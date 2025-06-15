import { fetchApi } from "./fetchAPI.js";
import { API_PRODUCT, API_USER } from "./constants.js";

export let params = {
    q: "",
    sort: "",
    order: "",
    page: 1,
    limit: 5,
}
 
export let htmlUsers = document.querySelector(".users .row");
export let htmlProducts = document.querySelector(".products .row");
export let templateUser = document.querySelector(".template-user");
export let templateProduct = document.querySelector(".template-product");

export let apiUser = await fetchApi(API_USER);
export let apiProduct =async () =>{
    return await fetchApi(API_PRODUCT + `?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}`);
}