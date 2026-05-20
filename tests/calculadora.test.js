const calculadora = require('../models/calculadora');

test('soma 1+1 que deveria ser 2', () => {
    expect(calculadora.soma(1, 1)).toBe(2);
});

test('soma palavra + 1 deveria ser erro', () => {
    expect(calculadora.soma('palavra', 1)).toBe('Erro');
})