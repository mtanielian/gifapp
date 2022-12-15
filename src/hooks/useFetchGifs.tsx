import { useCallback, useEffect, useState } from "react"
import { searchGifs } from "../services/gifs.services"

interface Gifs {
  id: string,
  url: string,
  title: string
}

interface Props {
  term: string
}

export const useFetchGifs = ({term} : Props) => {
  const [gifs, setGifs] = useState<Gifs[]>([])
  


  const getGifs = useCallback(async () => {
    const founded:Gifs[] = await searchGifs(term)
    setGifs(prev => [...founded, ...prev])
   }, [term])

  useEffect(() => {
    getGifs()
  }, [term])


  return { gifs }
}


