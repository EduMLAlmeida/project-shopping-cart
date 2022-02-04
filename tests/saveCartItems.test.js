const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Ao executar a função saveCartItems com o argumento "<ol><li>Item</li></ol>", localStorage.setItem foi chamado?', () => {
    saveCartItems('storageName', 'item');    
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Ao executar a função saveCartItems com o argumento "<ol><li>Item</li></ol>", localStorage.setItem foi chamado com dois parâmetros, sendo o primeiro "cartItems e o segundo sendo o valor passado como argumento para saveCartItems?', () => {
    const testParam1 = 'storageName';
    const testParam2 = 'item';
    saveCartItems(testParam1, testParam2);    
    expect(localStorage.setItem).toHaveBeenCalledWith(testParam1, testParam2);
  });
});
