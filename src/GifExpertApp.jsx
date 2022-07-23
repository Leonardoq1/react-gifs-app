import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Anime'])

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) {
      return;
    }   //Esta condicion esta preguntamdo, si el nombre ya exite en el array de categories, si no existe se guarda y si ya exite, no lo guarda.

    // console.log(newCategory)
    setCategories([newCategory, ...categories]) //Forma 1 para agregar un nuevo dato de un array. (los ... son para hacer como una copia).
    // setCategories (cat => [...categories, 'Soy un nuevo']); //Forma 2 para agregar un nuevo dato en un array.
  };
  return (
    <>
      <h1 className='center title'>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      />


      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
        ))
      }

    </>
  )
}
