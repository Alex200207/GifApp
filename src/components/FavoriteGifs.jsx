import { GifItem } from "./GifItem";

function FavoriteGifs({ favorites, onToggleFavorite }) {
  return (
    <>
      {favorites.map((gif) => (
        <GifItem
          key={gif.id}
          {...gif}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
        />
      ))}
    </>
  );
}

export default FavoriteGifs;
