require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('FetchProducts é uma função?', () => {
    expect(typeof(fetchProducts)).toBe('function');
  });
  it('Ao executar a função fetchProducts com o argumento "computador", fetch foi chamada?', () => {
    fetchProducts('computador');    
    expect(fetch).toHaveBeenCalled();
  });
  it('Ao executar a função fetchProducts com o argumento "computador", fetch utiliza o endpoint correto?', () => {
    const testURL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    fetchProducts('computador');    
    expect(fetch).toHaveBeenCalledWith(testURL);
  });
  it('Ao executar a função fetchProducts com o argumento "computador", o retorno é uma estrutura de dados igual a computadorSearch?', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('Ao executar a função fetchProducts sem argumento, o retorno é um erro com a mensagem "You must provide an url"?', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});