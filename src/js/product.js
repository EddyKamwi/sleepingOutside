import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  //create a list or array to help with appending more products
  let soCart = [];
  //check if you have a pending cart
  if (getLocalStorage("so-cart")) {
    soCart = getLocalStorage("so-cart");
  }
  //append a new product to the list
  soCart.push(product);
  //commit a list to localstorage
  setLocalStorage("so-cart", soCart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
