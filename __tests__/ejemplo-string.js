const password = "123456"

describe("Valida que el password no esté vacio y minimo 6 length", () => {
    test('Que el password tenga longitud 6', () => {
        expect(password).toHaveLength(6);
    })

    test('Password no está vacio', () => {
        expect(password).not.toHaveLength(0);
    })
})