import { render } from "@testing-library/react"
import  GitExpertApp  from "../GitExpertApp";


describe('Pruebas en el componente', () => { 
    test('', () => { 
        render(<GitExpertApp />);
        screen.debug();
    })
 })