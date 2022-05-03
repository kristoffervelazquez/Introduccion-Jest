const cliente = {
    nombre: 'Kristoffer',
    balance: 501
}

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400)
    });
    test('Es el kris?', () => {
        expect(cliente.nombre).toBe('Kristoffer')
    });
    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro')
    });
    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(500);
    })
})