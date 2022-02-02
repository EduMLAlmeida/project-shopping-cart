const fetchProducts = async (item) => {
  const itemURL = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  const response = await fetch(itemURL);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
