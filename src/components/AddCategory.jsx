import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = (event) => {
    //usamos el evento para obtener el valor del input
    //los eventos contienen un target que es el elemento que disparo el evento
    //informacion sobre la ubicacion valor entre otras
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    console.log("submit");
    event.preventDefault(); //evita que se recargue la pagina

    if (inputValue.trim().length <= 1) return; //esta funcion se va cumplir si el valor del input es menor o igual a 1
    // setCategories((categorias) => [inputValue, ...categorias]);//agrega el nuevo elemento al arreglo de categorias y preserva las anteriores
    onNewCategory(inputValue.trim()); //
    setInputValue(""); //limpia el input para que este vacio despues de agregar la categoria
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange} //cada vez que cambie el input se dispara el evento
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,//la funcion onNewCategory es requerida
};
