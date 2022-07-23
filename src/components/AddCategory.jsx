import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <=1) return; //aqui estamos evaluando si es menos o igual a 1


        // setCategories ((categories) =>[inputValue, ...categories]);
        setInputValue('');
        onNewCategory ( inputValue.trim() );
      
        // console.log(inputValue);
    };


    return (
        <form onSubmit={ (event) => onSubmit (event) }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
