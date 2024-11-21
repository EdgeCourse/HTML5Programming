/*
While DOMContentLoaded fires when the HTML is parsed, it does not guarantee that images are fully loaded. It simply means the browser has the basic structure of the page ready.
Images are often loaded asynchronously, meaning the browser doesn't wait for them to download completely before moving on to parse the rest of the HTML. This speeds up the initial page display.   
Images can be large files, and downloading them takes time
*/


const productsData = [
  { id: 1, name: "JavaScript and JQuery: Interactive Front-End Web Development", price: 10, image: "img/product1.jpg" },
  { id: 2, name: "Eloquent JavaScript", price: 15, image: "img/product2.jpg" },
  { id: 3, name: "You Don't Know JS", price: 20, image: "img/product3.jpg" }, 
  { id: 4, name: "Effective JavaScript", price: 10, image: "img/product4.jpg" },
  { id: 5, name: "JavaScript: The Good Parts", price: 15, image: "img/product5.jpg" },
  { id: 6, name: "Deep JavaScript: Theory and Techniques", price: 20, image: "img/product6.jpg" }, 

  ];

document.addEventListener('DOMContentLoaded', () => {
// DOM elements
const productsContainer = document.querySelector('.products');
const shoppingCart = document.querySelector('.shopping-cart'); 
const shoppingCartList = document.querySelector('.shopping-cart-list');
const productQuantity = document.querySelector('.product-quantity');
const totalPrice = document.querySelector('.total-price');
const emptyCartBtn = document.querySelector('.empty-cart-btn');

// Cart items (consider using local storage for persistence)
let cartItems = [];

// Render products
function renderProducts() {
  productsContainer.innerHTML = '';
  productsData.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.draggable = true;
    productElement.dataset.productId = product.id;
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}"><br>
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    `;
    productsContainer.appendChild(productElement);

    // Drag event listeners
    productElement.addEventListener('dragstart', dragStart);
  });
}

// Render cart items
function renderCartItems() {
  shoppingCartList.innerHTML = '';
  cartItems.forEach(item => {
    const cartItemElement = document.createElement('li');
    cartItemElement.innerHTML = `
      ${item.name} - $${item.price} x ${item.quantity} 
      <button class="remove-item" data-product-id="${item.id}">Remove</button>
    `;
    shoppingCartList.appendChild(cartItemElement);

    cartItemElement.querySelector('.remove-item').addEventListener('click', removeItem);
  });

  // Update cart summary
  productQuantity.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalPrice.textContent = `$${total.toFixed(2)}`;
}

// Drag and drop handlers
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.dataset.productId);
}

function dragOver(event) {
  event.preventDefault(); 
}

function drop(event) {
  event.preventDefault();
  const productId = event.dataTransfer.getData('text/plain');
  const product = productsData.find(p => p.id === parseInt(productId));
  addToCart(product);
}

// Cart functions
function addToCart(product) {
  const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

  
  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity++; 
  } else {
    cartItems.push({ ...product, quantity: 1 }); 
  }

  renderCartItems();
}

function removeItem(event) {
  const productId = parseInt(event.target.dataset.productId);
  cartItems = cartItems.filter(item => item.id !== productId);
  renderCartItems();
}

function emptyCart() {
  cartItems = [];
  renderCartItems();
}

// Event listeners
shoppingCart.addEventListener('dragover', dragOver);
shoppingCart.addEventListener('drop', drop);
emptyCartBtn.addEventListener('click', emptyCart);

// Initial render
renderProducts();
renderCartItems();
});
/*
// Product data with images
const productsData = [
  { id: 1, name: "JavaScript and JQuery: Interactive Front-End Web Development", price: 10, image: "img/product1.jpg" },
  { id: 2, name: "Eloquent JavaScript", price: 15, image: "img/product2.jpg" },
  { id: 3, name: "You Don't Know JS", price: 20, image: "img/product3.jpg" }, 
  { id: 4, name: "Effective JavaScript", price: 10, image: "img/product4.jpg" },
  { id: 5, name: "JavaScript: The Good Parts", price: 15, image: "img/product5.jpg" },
  { id: 6, name: "Deep JavaScript: Theory and Techniques", price: 20, image: "img/product6.jpg" }, 

  ];

// DOM elements
const productsContainer = document.querySelector('.products');
const shoppingCart = document.querySelector('.shopping-cart'); 
const shoppingCartList = document.querySelector('.shopping-cart-list');
const productQuantity = document.querySelector('.product-quantity');
const totalPrice = document.querySelector('.total-price');
const emptyCartBtn = document.querySelector('.empty-cart-btn');

// Cart items (consider using local storage for persistence)
let cartItems = [];

// Render products
function renderProducts() {
  productsContainer.innerHTML = '';
  productsData.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.draggable = true;
    productElement.dataset.productId = product.id;
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}"><br>
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    `;
    productsContainer.appendChild(productElement);

    // Drag event listeners
    productElement.addEventListener('dragstart', dragStart);
  });
}

// Render cart items
function renderCartItems() {
  shoppingCartList.innerHTML = '';
  cartItems.forEach(item => {
    const cartItemElement = document.createElement('li');
    cartItemElement.innerHTML = `
      ${item.name} - $${item.price} x ${item.quantity} 
      <button class="remove-item" data-product-id="${item.id}">Remove</button>
    `;
    shoppingCartList.appendChild(cartItemElement);

    cartItemElement.querySelector('.remove-item').addEventListener('click', removeItem);
  });

  // Update cart summary
  productQuantity.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalPrice.textContent = `$${total.toFixed(2)}`;
}

// Drag and drop handlers
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.dataset.productId);
}

function dragOver(event) {
  event.preventDefault(); 
}

function drop(event) {
  event.preventDefault();
  const productId = event.dataTransfer.getData('text/plain');
  const product = productsData.find(p => p.id === parseInt(productId));
  addToCart(product);
}

// Cart functions
function addToCart(product) {
  const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity++; 
  } else {
    cartItems.push({ ...product, quantity: 1 }); 
  }

  renderCartItems();
}

function removeItem(event) {
  const productId = parseInt(event.target.dataset.productId);
  cartItems = cartItems.filter(item => item.id !== productId);
  renderCartItems();
}

function emptyCart() {
  cartItems = [];
  renderCartItems();
}

// Event listeners
shoppingCart.addEventListener('dragover', dragOver);
shoppingCart.addEventListener('drop', drop);
emptyCartBtn.addEventListener('click', emptyCart);

// Initial render
renderProducts();
renderCartItems();
*/

/*
// cart.js

// Product data with images
const productsData = [
{ id: 1, name: "JavaScript and JQuery: Interactive Front-End Web Development", price: 10, image: "img/product1.jpg" },
{ id: 2, name: "Eloquent JavaScript", price: 15, image: "img/product2.jpg" },
{ id: 3, name: "You Don't Know JS", price: 20, image: "img/product3.jpg" }, 
{ id: 4, name: "Effective JavaScript", price: 10, image: "img/product4.jpg" },
{ id: 5, name: "JavaScript: The Good Parts", price: 15, image: "img/product5.jpg" },
{ id: 6, name: "Deep JavaScript: Theory and Techniques", price: 20, image: "img/product6.jpg" }, 

];

// DOM elements
const productsContainer = document.querySelector('.products');
const shoppingCart = document.querySelector('.shopping-cart'); 
const shoppingCartList = document.querySelector('.shopping-cart-list');
const productQuantity = document.querySelector('.product-quantity');
const totalPrice = document.querySelector('.total-price');
const emptyCartBtn = document.querySelector('.empty-cart-btn');

// Cart items (consider using local storage for persistence)
let cartItems = [];

// Render products
function renderProducts() {
productsContainer.innerHTML = '';
productsData.forEach(product => {
const productElement = document.createElement('div');
productElement.classList.add('product');
productElement.draggable = true;
productElement.dataset.productId = product.id;
productElement.innerHTML = `
<img src="${product.image}" alt="${product.name}"><br>
<h3>${product.name}</h3>
<p>$${product.price}</p>
`;
productsContainer.appendChild(productElement);

// Drag event listeners
productElement.addEventListener('dragstart', dragStart);
});
}

// Render cart items
function renderCartItems() {
shoppingCartList.innerHTML = '';
cartItems.forEach(item => {
const cartItemElement = document.createElement('li');
cartItemElement.innerHTML = `
${item.name} - $${item.price} x ${item.quantity} 
<button class="remove-item" data-product-id="${item.id}">Remove</button>
`;
shoppingCartList.appendChild(cartItemElement);

cartItemElement.querySelector('.remove-item').addEventListener('click', removeItem);
});

// Update cart summary
productQuantity.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0);
const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
totalPrice.textContent = `$${total.toFixed(2)}`;
}

// Drag and drop handlers
function dragStart(event) {
event.dataTransfer.setData('text/plain', event.target.dataset.productId);
}

function dragOver(event) {
event.preventDefault(); 
}

function drop(event) {
event.preventDefault();
const productId = event.dataTransfer.getData('text/plain');
const product = productsData.find(p => p.id === parseInt(productId));
addToCart(product);
}

// Cart functions
function addToCart(product) {
const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

if (existingItemIndex !== -1) {
cartItems[existingItemIndex].quantity++; 
} else {
cartItems.push({ ...product, quantity: 1 }); 
}

renderCartItems();
}

function removeItem(event) {
const productId = parseInt(event.target.dataset.productId);
cartItems = cartItems.filter(item => item.id !== productId);
renderCartItems();
}

function emptyCart() {
cartItems = [];
renderCartItems();
}

// Event listeners
shoppingCart.addEventListener('dragover', dragOver);
shoppingCart.addEventListener('drop', drop);
emptyCartBtn.addEventListener('click', emptyCart);

// Initial render
renderProducts();
renderCartItems();
*/
//es5
/*
// Product data with images
var productsData = [
  { id: 1, name: "JavaScript and JQuery: Interactive Front-End Web Development", price: 10, image: "img/product1.jpg" },
  { id: 2, name: "Eloquent JavaScript", price: 15, image: "img/product2.jpg" },
  { id: 3, name: "You Don't Know JS", price: 20, image: "img/product3.jpg" }, 
  { id: 4, name: "Effective JavaScript", price: 10, image: "img/product4.jpg" },
  { id: 5, name: "JavaScript: The Good Parts", price: 15, image: "img/product5.jpg" },
  { id: 6, name: "Deep JavaScript: Theory and Techniques", price: 20, image: "img/product6.jpg" }, 
];

// DOM elements
var productsContainer = document.querySelector('.products');
var shoppingCart = document.querySelector('.shopping-cart'); 
var shoppingCartList = document.querySelector('.shopping-cart-list');
var productQuantity = document.querySelector('.product-quantity');
var totalPrice = document.querySelector('.total-price');
var emptyCartBtn = document.querySelector('.empty-cart-btn');

// Cart items (consider using local storage for persistence)
var cartItems = [];

// Render products
function renderProducts() {
  productsContainer.innerHTML = '';
  productsData.forEach(function(product) {
    var productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.draggable = true;
    productElement.dataset.productId = product.id;
    productElement.innerHTML = 
      '<img src="' + product.image + '" alt="' + product.name + '"><br>' +
      '<h3>' + product.name + '</h3>' +
      '<p>$' + product.price + '</p>';
    productsContainer.appendChild(productElement);

    // Drag event listeners
    productElement.addEventListener('dragstart', dragStart);
  });
}

// Render cart items
function renderCartItems() {
  shoppingCartList.innerHTML = '';
  cartItems.forEach(function(item) {
    var cartItemElement = document.createElement('li');
    cartItemElement.innerHTML = 
      item.name + ' - $' + item.price + ' x ' + item.quantity + ' ' +
      '<button class="remove-item" data-product-id="' + item.id + '">Remove</button>';
    shoppingCartList.appendChild(cartItemElement);

    cartItemElement.querySelector('.remove-item').addEventListener('click', removeItem);
  });

  // Update cart summary
  productQuantity.textContent = cartItems.reduce(function(sum, item) { 
    return sum + item.quantity; 
  }, 0);
  var total = cartItems.reduce(function(sum, item) { 
    return sum + item.price * item.quantity; 
  }, 0);
  totalPrice.textContent = '$' + total.toFixed(2);
}

// Drag and drop handlers
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.dataset.productId);
}

function dragOver(event) {
  event.preventDefault(); 
}

function drop(event) {
  event.preventDefault();
  var productId = event.dataTransfer.getData('text/plain');
  var product = productsData.find(function(p) { 
    return p.id === parseInt(productId); 
  });
  addToCart(product);
}

// Cart functions
function addToCart(product) {
  var existingItemIndex = cartItems.findIndex(function(item) {
    return item.id === product.id;
  });

  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity++; 
  } else {
    // ES5 way to "clone" the product object and add quantity
    var newItem = Object.create(product);
    newItem.quantity = 1;
    cartItems.push(newItem);
  }

  renderCartItems();
}

function removeItem(event) {
  var productId = parseInt(event.target.dataset.productId);
  cartItems = cartItems.filter(function(item) { 
    return item.id !== productId; 
  });
  renderCartItems();
}

function emptyCart() {
  cartItems = [];
  renderCartItems();
}

// Event listeners
shoppingCart.addEventListener('dragover', dragOver);
shoppingCart.addEventListener('drop', drop);
emptyCartBtn.addEventListener('click', emptyCart);

// Initial render
renderProducts();
renderCartItems();

*/