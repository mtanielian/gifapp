import  List from '../../src/components/List'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'
import { render, screen } from '@testing-library/react'
jest.mock('../../src/hooks/useFetchGifs')

const mockMyFunction = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>;


describe('test <List />', () => {

  test('send term and expect response and render list', async() => {
    const term = 'Vegeta'
    
    const gifs = [{
      id: 'abd',
      url: 'https://dbz.com/vegeta.jpg',
      title: 'vegeta insecto'
    },
    {
      id: 'asd',
      url: 'https://dbz.com/goku.jpg',
      title: 'goku emocionado por pelear'
    }]
    
    mockMyFunction.mockReturnValue({gifs})
    
    render(<List term={term} />)
    const imgs = screen.getAllByRole('img') as HTMLImageElement[]
    expect(imgs.length).toBe(2)
  })
})