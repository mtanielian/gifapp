import { searchGifs } from '../../src/services/gifs.services'

describe('testing gif services', () => {
  test('call api services', async () => {
    const query = 'Goku'
    const data = await searchGifs(query)

    expect(data.length).toBeGreaterThan(0)
    expect(data[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    })
  })
})