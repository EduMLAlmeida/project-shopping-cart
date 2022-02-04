// Comandos para utilizar local storage na função abaixo retirados de https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/e90b472b-e79b-4b29-9979-8222daff0d70/local-e-session-storage/2ac29f5c-c36e-473d-8546-6fb18340e55e?use_case=next_button

function cartStorageItemClickListener(event) {
  event.target.remove();
  const cartItemsArray = document.getElementsByTagName('li');
  localStorage.removeItem('cartItemsStorage');
  localStorage.setItem('cartItemsStorage', JSON.stringify([]));
  for (let index = 0; index < cartItemsArray.length; index += 1) {
    const cartItems = JSON.parse(localStorage.getItem('cartItemsStorage'));
    cartItems.push(cartItemsArray[index].innerText);
    localStorage.setItem('cartItemsStorage', JSON.stringify(cartItems));
  }
}

function createCartStorageItemElement(itemText) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = itemText;
  li.addEventListener('click', cartStorageItemClickListener);
  return li;
}

// Comandos para utilizar local storage na função abaixo retirados de https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/e90b472b-e79b-4b29-9979-8222daff0d70/local-e-session-storage/2ac29f5c-c36e-473d-8546-6fb18340e55e?use_case=next_button

const getSavedCartItems = () => {
  if (localStorage.getItem('cartItemsStorage') === null) {
    localStorage.setItem('cartItemsStorage', JSON.stringify([]));
  } else {
    const cartItemsArray = JSON.parse(localStorage.getItem('cartItemsStorage'));
    const cartProductsContainer = document.getElementById('cart-items');
    cartItemsArray.forEach((element) => {
      console.log(element);
      cartProductsContainer.appendChild(createCartStorageItemElement(element));
    });
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
