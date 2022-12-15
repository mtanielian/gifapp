import { render, screen } from '@testing-library/react'
import ListItem from '../../src/components/ListItem'


describe('Probando componente <ListItem>', () => {
  const url = 'https://giphy.com/gifs/TOEIAnimationUK-goku-dragon-ball-super-broly-WOb8EeFziTQNE02WXs'
  const title = 'hola soy goku'
  
  test('probando que renderice el <ListItem> una imagen', async () => {
    const {container} = render(<ListItem url={url} title={title}/>)
    expect(screen.getByRole('img', {name: title})).toBeTruthy()
    expect(container.querySelector(`[src="${url}"]`)).toBeTruthy()
  })

  test('probando que muestre el titulo el <ListItem>', () => {
    render(<ListItem url={url} title={title}/>)
    expect(screen.getAllByText(title)).toBeTruthy()
    expect(screen.getAllByText(title).length).toBe(1)
  })
})