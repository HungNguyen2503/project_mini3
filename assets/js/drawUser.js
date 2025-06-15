import { apiUser, htmlUsers, templateUser } from "./variables.js";

export const drawUser = () => {
    apiUser.forEach(item => {
    const clone = templateUser.content.cloneNode(true);
    clone.querySelector("p").textContent = item.username;
    
    htmlUsers.appendChild(clone);
});
}