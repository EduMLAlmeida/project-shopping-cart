require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('FetchItem é uma função?', () => {
    expect(typeof(fetchItem)).toBe('function');
  });
  it('Ao executar a função fetchItem com o argumento "MLB1615760527", fetch foi chamada?', () => {
    fetchItem('MLB1615760527');    
    expect(fetch).toHaveBeenCalled();
  });
  it('Ao executar a função fetchItem com o argumento "MLB1615760527", fetch utiliza o endpoint correto?', () => {
    const testURL = 'https://api.mercadolibre.com/items/MLB1615760527';
    fetchItem('MLB1615760527');    
    expect(fetch).toHaveBeenCalledWith(testURL);
  });
  it('Ao executar a função fetchItem com o argumento "MLB1615760527", o retorno é uma estrutura de dados igual a item?', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('Ao executar a função fetchItem sem argumento, o retorno é um erro com a mensagem "You must provide an url"?', async () => {
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
