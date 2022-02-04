const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Ao executar a função getSavedCartItems, localStorage.getItem foi chamado?', () => {
    getSavedCartItems();    
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('Ao executar a função getSavedCartItems, localStorage.getItem foi chamado com o "cartItems" como parâmetro?', () => {
    const testParam = 'cartItems';
    getSavedCartItems(testParam);    
    expect(localStorage.getItem).toHaveBeenCalledWith(testParam);
  });
});
