import { apiCategory, htmlCategories, templateCategory } from "./variables.js";

export const drawCategory = () => {
    apiCategory.forEach(item => {
    const clone = templateCategory.content.cloneNode(true);
    clone.querySelector("p").textContent = item.name;
    clone.querySelector(".item").dataset.value = item.slug;

    htmlCategories.appendChild(clone);
});
}