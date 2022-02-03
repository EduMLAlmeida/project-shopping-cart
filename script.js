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

function cartItemClickListener(event) {
  event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addToCart = async (event) => {
  // função criada por mim.
  const productID = event.target.parentElement.firstElementChild.innerText;
  const productsObject = await fetchItem(productID);
  const { id, title, price } = productsObject;
  const dataObject = { sku: id, name: title, salePrice: price };
  const productsContainer = document.getElementById('cart-items');
  productsContainer.appendChild(createCartItemElement(dataObject));
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

window.onload = () => {
  includesProduct();
};
