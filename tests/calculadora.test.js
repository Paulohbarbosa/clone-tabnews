test('Adiciona 1+1', () => {
    expect(1 + 1).toBe(2);
});

test('subtrair 1-1', () => {
    expect(1 - 1).toBe(0);
})
// função que erra
test('subtrair 1-1 que deveria ser 0', () => {
    expect(1 - 1).toBe(1);
});