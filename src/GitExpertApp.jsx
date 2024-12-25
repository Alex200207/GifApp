import { useState } from "react";
import { AddCategory , GifGrid} from "./components";
const GitExpertApp = () => {
  const [categories, setCategories] = useState(["random"]); //estado inicial del componente

  const onAddCategory = (newCategory) => {
    //validacion donde revisamos si el valor de input esta en en estado
    //includes es un metodo de los arreglos que nos permite revisar si un elemento esta en el arreglo
    if (categories.includes(newCategory)) {
      //forma simple de validar si el elemento ya existe
      return window.alert("La categoria ya existe"); //si el elemento ya existe se muestra un alert
    }

    setCategories([newCategory, ...categories]); // agregar un nuevo elemento al arreglo
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        //  setCategories={setCategories}
        //cuando se utiliza on se esta indicando que es un evento
        //queremos decir que se esta emitiendo un algo
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/*iteramos el componente pasamos la key y las categorias ademas esta de forma inplicita*/}
      {categories.map((c) => (
        // iterar sobre el arreglo
        <GifGrid key={c} category={c} />
      ))}
    </>
  );
};

export default GitExpertApp;
