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
 })