import { getGifs } from '../helpers/gifs'
import { useEffect, useState } from 'react'
export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([])

    const loadGifs = async () => {
        const gifs = await getGifs(category);
        setGifs(gifs);
    }

    useEffect(() => {
        loadGifs()

    }, [category])

  return {
    gifs, 
    isLoading: !gifs.length
  }
}
