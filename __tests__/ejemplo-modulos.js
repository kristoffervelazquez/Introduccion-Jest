import {sumar} from '../js/funciones.js'


describe('Suma de dos numeros', () => {
    test('Sumar 10 y 20, debe dar como resutlado 30', () => {
        expect(sumar(10,20)).toBe(30)
    })
})