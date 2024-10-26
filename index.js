import{getAllproducts} from './api/alimente.js';
import { mapProductToCard } from './utils/layout.js';


document.addEventListener('DOMContentLoaded', displayProducts);

async function displayProducts() {
    const products = await getAllproducts();

  document.querySelector(".products").innerHTML = products
    .map(mapProductToCard)
    .join(" ");
}