import { useState, useEffect } from "react";
import { GifGrid } from "./components";
import Header from "./components/Header";
import { FaRegFaceSadCry } from "react-icons/fa6";

const GitExpertApp = () => {
  const [categories, setCategories] = useState(["anime"]);
  const [limit, setLimit] = useState(100);
  const [favorites, setFavorites] = useState([]);

  // Sincronizar favoritos con localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (gif) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === gif.id)
        ? prevFavorites.filter((fav) => fav.id !== gif.id)
        : [...prevFavorites, gif]
    );
  };

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return alert("La categoría ya existe");
    }
    setCategories([newCategory, ...categories]);
  };

  const deleteCategory = (category) => {
    setCategories(categories.filter((c) => c !== category));
  };

  return (
    <>
      <Header
        onToggleFavorite={toggleFavorite}
        favorites={favorites}
        limit={limit}
        onLimitChange={setLimit}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.length === 0 ? (
        <p className="aviso">
          {" "}
          <FaRegFaceSadCry className="aviso_icon" />
          No hay nada para mostrar. Añade una nueva categoría.
        </p>
      ) : (
        categories.map((c) => (
          <GifGrid
            key={c}
            category={c}
            onDeleteCategory={deleteCategory}
            limit={limit}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        ))
      )}
      <hr />
      <footer>
        <p>© 2024 GifApp. All rights reserved.</p>
        <p>Developed by Eddy T.</p>
      </footer>
    </>
  );
};

export default GitExpertApp;
