/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const assert = require('assert');

const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let someOfAllNumbers = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number') {
      return undefined;
    }
    someOfAllNumbers += array[index];
  }
  const result = Math.round(someOfAllNumbers / array.length);
  return result;
};

module.exports = average;

const arrayTest = [2, 4, 6, 8, 10];

assert.strictEqual(average(arrayTest), 6);
assert.strictEqual(average([2, '2']), undefined);
assert.strictEqual(average([0.1, 0.2, 0.3, 1]), 0);
assert.strictEqual(average([]), undefined);
assert.strictEqual(average([' ']), undefined);
assert.strictEqual(average([47, 63, 122]), 77);
