import api from "./api"

interface Gif {
  id: string,
  title: string,
  images: Images
}

interface Images {
  downsized_medium: { url: string} 
}


export const searchGifs = async (term: string) => {
  const {data} = await api.get(`${term}&limit=12`)
  const gifs = data.data.map( (img: Gif) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  
  return gifs
}
