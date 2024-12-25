describe('first', () => { 
    test('should be equal', () => {
        // Arrange
        const expected = 1;
        // Act
        const result = 1;
        // Assert
        expect(result).toBe(expected);
    })
})

//un snapshot es una captura de un componente o de un valor que se espera que no cambie
//cuando un componente cambia de manera inesperada, el snapshot se encarga de avisar que algo cambio