import { useState, useEffect, useMemo } from "react";
import { AddCategory, GifGrid } from "./components";
import Filter from "./components/Filter";
import Header from "./components/Header";

const GitExpertApp = () => {
  const [categories, setCategories] = useState(["anime"]);
  const [limit, setLimit] = useState(5);
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
      <Header />

      <div className="search">
        <AddCategory onNewCategory={(event) => onAddCategory(event)} />
        <Filter limit={limit} onLimitChange={setLimit} />
      </div>
      <hr />
      {categories.map((c) => (
        <GifGrid
          key={c}
          category={c}
          onDeleteCategory={deleteCategory}
          limit={limit}
          onToggleFavorite={toggleFavorite}
          favorites={favorites}
        />
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
