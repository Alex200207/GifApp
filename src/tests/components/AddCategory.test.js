import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory/>  ', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 
        //establecer nuestro sujeto de pruebas 
        //renderizemos l componente
        render( <AddCategory onNewCategory={()=> {}}/>)
    

        //disparar un evento
        const input = screen.getByRole('textbox')//extraemos el input

        //usar el fireEvent para simular un evento
        fireEvent.input( input , { target: { value: 'Saitama'}})//disparramos el evento input y le pasamos el valor que queremos que tenga el input

        //hacer la asercion
        expect( input.value ).toBe('Saitama')//hacemos la asercion para verificar que el valor del input sea 'Saitama'
        screen.debug()
     })


     test('debe de llamar onNewCategory si el input tiene un valor ',  () => { 

        const inputValue = 'Saitama';//creamos una variable con el valor de Saitama

        //TODO: 

        render( <AddCategory onNewCategory={() => {}}/>)//objeto de prueba

        const input = screen.getByRole('textbox')//creamos la referencia al input

        const form = screen.getByRole('form')//creamos la referencia al formulario

        //disparar elementos

        fireEvent.input( input, {target: {value: inputValue}})//disparamos el evento input y le pasamos el valor de la variable inputValue
        fireEvent.submit(form); //disparamos el evento submit
        screen.debug()

        expect(input.value).toBe('')//esperamos que el valor del input sea vacio
      })
 })