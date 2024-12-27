import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

import Filter from "./components/Filter";
const GitExpertApp = () => {
  const [categories, setCategories] = useState(["anime"]); //estado inicial del componente
  const [limit, setLimit] = useState(5);

  const onAddCategory = (newCategory) => {
    //validacion donde revisamos si el valor de input esta en en estado
    //includes es un metodo de los arreglos que nos permite revisar si un elemento esta en el arreglo
    if (categories.includes(newCategory)) {
      //forma simple de validar si el elemento ya existe
      return window.alert("La categoria ya existe"); //si el elemento ya existe se muestra un alert
    }

    setCategories([newCategory, ...categories]); // agregar un nuevo elemento al arreglo
  };

  const deleteCategory = (category) => {
    setCategories(categories.filter((c) => c !== category));
  };

  return (
    <>
      <h1>Bienvenido a GifApp</h1>

      <div className="search">
        <AddCategory onNewCategory={(event) => onAddCategory(event)} />
        <Filter
          limit={limit}
          onLimitChange={setLimit}
          
        />
      </div>

      <hr />

      {categories.map((c) => (
        <GifGrid key={c} category={c} onDeleteCategory={deleteCategory} limit={limit}/>
      ))}

      <hr />

      <footer>
        <p>© 2023 GifApp. All rights reserved.</p>
        <p>Developed by Eddy T.</p>
      </footer>
    </>
  );
};

export default GitExpertApp;
