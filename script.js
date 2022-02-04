// constante criada porque a string se repetia no código(lint pediu).
const cartItemsString = 'cart-items';

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// Comandos para utilizar local storage na função abaixo retirados de https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/e90b472b-e79b-4b29-9979-8222daff0d70/local-e-session-storage/2ac29f5c-c36e-473d-8546-6fb18340e55e?use_case=next_button

function cartItemClickListener(event) {
  event.target.remove();
  const cartItemsArray = document.querySelectorAll('.cart__item');
  localStorage.removeItem('cartItemsStorage');
  localStorage.setItem('cartItemsStorage', JSON.stringify([]));
  for (let index = 0; index < cartItemsArray.length; index += 1) {
    const cartItems = JSON.parse(localStorage.getItem('cartItemsStorage'));
    cartItems.push(cartItemsArray[index].innerText);
    localStorage.setItem('cartItemsStorage', JSON.stringify(cartItems));
  }
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Comandos para utilizar local storage na função abaixo retirados de https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/e90b472b-e79b-4b29-9979-8222daff0d70/local-e-session-storage/2ac29f5c-c36e-473d-8546-6fb18340e55e?use_case=next_button

const addToCart = async (event) => {
  const productID = event.target.parentElement.firstElementChild.innerText;
  const productsObject = await fetchItem(productID);
  const { id, title, price } = productsObject;
  const dataObject = { sku: id, name: title, salePrice: price };
  const cartProductsContainer = document.getElementById(cartItemsString);
  cartProductsContainer.appendChild(createCartItemElement(dataObject));
  const cartItemsArray = document.getElementsByTagName('li');
  localStorage.removeItem('cartItemsStorage');
  localStorage.setItem('cartItemsStorage', JSON.stringify([]));
  for (let index = 0; index < cartItemsArray.length; index += 1) {
    const cartItemsToStore = JSON.parse(localStorage.getItem('cartItemsStorage'));
    cartItemsToStore.push(cartItemsArray[index].innerText);
    const cartItems = JSON.stringify(cartItemsToStore);
    saveCartItems('cartItemsStorage', cartItems);
  }  
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const addToCartButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  addToCartButton.addEventListener('click', addToCart);
  section.appendChild(addToCartButton);

  return section;
}

const includesProduct = async () => {
  const productsObject = await fetchProducts('computador');
  productsObject.results.forEach((element) => {
    const { id, title, thumbnail } = element;
    const dataObject = { sku: id, name: title, image: thumbnail };
    const productsContainer = document.getElementById('products-container');
    productsContainer.appendChild(createProductItemElement(dataObject));
  });
};

// Comandos para utilizar local storage na função abaixo retirados de https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/e90b472b-e79b-4b29-9979-8222daff0d70/local-e-session-storage/2ac29f5c-c36e-473d-8546-6fb18340e55e?use_case=next_button

function createCartStorageItemElement(itemText) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = itemText;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const clearCartButton = document.getElementById('clear-button');
const cartContainer = document.getElementById(cartItemsString);

function clearCart() {
  const cartProductItems = document.querySelectorAll('.cart__item');
  console.log(cartProductItems);
  console.log(cartProductItems.length);
  for (let index = 0; index < cartProductItems.length; index += 1) {
    console.log('teste2');
    cartContainer.removeChild(cartContainer.firstElementChild);
  }
console.log('teste');
}

clearCartButton.addEventListener('click', clearCart);

window.onload = () => {
  includesProduct();

  // Comandos para utilizar local storage na função abaixo retirados de https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/e90b472b-e79b-4b29-9979-8222daff0d70/local-e-session-storage/2ac29f5c-c36e-473d-8546-6fb18340e55e?use_case=next_button

  if (localStorage.getItem('cartItemsStorage') === null) {
    localStorage.setItem('cartItemsStorage', JSON.stringify([]));
  } else {
    const cartItemsArray = JSON.parse(getSavedCartItems('cartItemsStorage'));
    const cartProductsContainer = document.getElementById(cartItemsString);
    cartItemsArray.forEach((element) => {
      cartProductsContainer.appendChild(createCartStorageItemElement(element));
    });
  }
};
