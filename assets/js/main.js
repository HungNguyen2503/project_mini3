import { drawCategory } from "./drawCategory.js";
import { drawProduct } from "./drawProduct.js";
import {
  btnNext,
  btnPrev,
  btnSearch,
  pageNum,
  params,
  selectOption,
} from "./variables.js";

async function getData() {
  await drawCategory();
  await drawProduct();
  let selectCategories = document.querySelectorAll(".categories .item");
  selectCategories.forEach((category) => {
    category.addEventListener("click", () => {
      params.category = category.getAttribute('data-value');
      params.page = 1;
      pageNum.innerHTML = params.page;
      drawProduct();
    });
  });
  hideSplash();
}

getData();

/*start form filter*/
btnSearch.addEventListener("click", async () => {
  const inputSearch = document.querySelector("#search");
  params.q = inputSearch.value.trim();
  drawProduct();
});

selectOption.addEventListener("change", async () => {
  switch (selectOption.value) {
    case "default": {
      params.sort = "";
      params.order = "";
      break;
    }
    case "price_asc": {
      params.sort = "price";
      params.order = "asc";
      break;
    }
    case "price_desc": {
      params.sort = "price";
      params.order = "desc";
      break;
    }
    case "discount_desc": {
      params.sort = "discountPercentage";
      params.order = "desc";
      break;
    }
  }

  drawProduct();
});
/**end form filter */

/**Paginate start */
btnPrev.addEventListener("click", () => {
  if (params.page > 1) {
    params.page--;
    pageNum.innerHTML = params.page;
    drawProduct();
  }
});
btnNext.addEventListener("click", () => {
  params.page++;
  pageNum.innerHTML = params.page;
  drawProduct();
});

/**Paginate end */

/**Splash start */
function hideSplash() {
  document.querySelector(".splash").classList.add("splash-hide");
  document.querySelector("body").style.overflow = "auto";
  setTimeout(() => {
    document.querySelector(".splash").style.display = "none";
  }, 2000);
}
/**Splash end */
