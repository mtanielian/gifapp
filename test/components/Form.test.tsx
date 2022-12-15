import { fireEvent, render, screen } from '@testing-library/react'
import Form from '../../src/components/Form'

describe('testing component Form', () => {
  const query = 'Saitama'
  test('buscando saitama en el formulario', () => {
    render(<Form handleResponseGif={() => {}}/>)
    const input = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.input(input, {  target : { value: query } })
    expect(input.value).toBe(query)
  })


  test('llamar a la accion que dispare el formulario y guarde el valor', () => {
    
    const handleResponse = jest.fn()
    
    render(<Form handleResponseGif={handleResponse}/>)
    
    const input = screen.getByRole('textbox') as HTMLInputElement
    const form = screen.getByRole('form') as HTMLFormElement
    fireEvent.input(input, {  target : { value: query } })
    fireEvent.submit(form)
    
    expect(handleResponse).toHaveBeenCalled()
    expect(handleResponse).toHaveBeenCalledTimes(1)
    expect(handleResponse).toHaveBeenCalledWith(query)
  })


  test('cuando no hay valor en el input no deberia llamar a la funcion de respuesta ni hacer sumbit', () => {
    
    const handleResponse = jest.fn()
    
    render(<Form handleResponseGif={handleResponse}/>)
    
    const form = screen.getByRole('form') as HTMLFormElement
    fireEvent.submit(form)
    
    expect(handleResponse).not.toHaveBeenCalled()
    expect(handleResponse).toHaveBeenCalledTimes(0)
    expect(handleResponse).not.toHaveBeenCalledWith(query)
  })


})