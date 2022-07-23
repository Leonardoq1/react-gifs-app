// import { useState, useEffect } from 'react';
import { GifItem } from './GifItem';
// import { getGifs } from "../helpers/GetGift";
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {

    /* 
    const [images, setImages] = useState([]);

    // //Aqui creamos una funcion getImages asincrona que en la constante newImages nos trae la promesa de la funcion getGifs que tiene las categorias y los gifs
     const getImages = async () => {
         const newImages = await getGifs(category);
         setImages(newImages);
     }

    // //En el codigo de useEffect estamos haciendo que no se vuelva a renderisar
     useEffect(() => {
         getImages()
     }, []) */

    const { images, isLoading } = useFetchGifs (category); // Este es nuestro hook useFetchGifs que es el mismo codigo que esta arriba.
   

    return (
        <>
            <h3> {category} </h3>
            {
                 isLoading && ( <h2>Cargando...</h2> ) //Si isLoadig esta en true, develve el h2 con el mensaje.
            }
            

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            // title={image.title}
                            // url = {image.url}
                            { ...image } //Aqui estamos espaciendo todas la propeties de image (id,title,url) dentro deLComponente GifItem
                        />
                    ))
                }
            </div>


        </>
    )
}
