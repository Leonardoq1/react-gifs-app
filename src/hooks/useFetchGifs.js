//Un hook no es mas que una funcion
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGift";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // //Aqui creamos una funcion getImages asincrona que en la constante newImages nos trae la promesa de la funcion getGifs que tiene las categorias y los gifs
    const getImages = async () => {
         const newImages = await getGifs(category);
         setImages(newImages);
         setIsLoading (false);
     }

    // //En el codigo de useEffect estamos haciendo que no se vuelva a renderisar
     useEffect(() => {
         getImages()
     }, [])

  return {
    images: images,
    isLoading: isLoading
  }
}
