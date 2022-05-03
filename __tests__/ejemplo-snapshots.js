const cliente = {
    nombre: 'Kristoffer 2',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', () => {
    test('Es Kristoffer?', () => {
        expect(cliente).toMatchSnapshot();
    });
})