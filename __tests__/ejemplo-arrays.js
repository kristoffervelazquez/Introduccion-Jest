const carrito = ['p1', 'p2', 'p3'];

describe('Testing al carrito de compras ', () =>{
    test('Probar que el array tenga 3 elementos', () =>{
        expect(carrito).toHaveLength(3);
    });
    test('Verificar que el carrito no esté vacio', () =>{
        expect(carrito).not.toHaveLength(0)
    })
})