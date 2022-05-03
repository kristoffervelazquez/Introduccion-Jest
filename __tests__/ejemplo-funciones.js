
function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

describe('Testing a las funciones aritmeticas', () => {
    test('Suma de 20 y 30', () => {
        expect(sumar(20, 30)).toBe(50);
    });
    test('Resta de 10 y 5', () => {
        expect(restar(10, 5)).toBe(5);
    });
    test('Que la suma de 10y 10', () => {
        expect(sumar(10, 10)).not.toBe(1010)
    })
    test('Que la resta de 10 y 5 no sea 2', () => {
        expect(restar(10, 5)).not.toBe(2)
    })
})