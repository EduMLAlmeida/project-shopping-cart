const saveCartItems = (storageName, itemsToStore) => {
  localStorage.setItem(storageName, itemsToStore);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
