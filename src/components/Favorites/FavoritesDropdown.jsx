import { useEffect, useRef, useState } from "react";
import { getMovieDetails } from "../../service/api";
import { useClickOutside } from "../../utils/useClickOutside";
import { getFromLocalStorage } from "./helper";
import { DropdownButton, DropdownListWrapper, DropdownWrapper } from "./styled";

const FavoritesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const favoriteMovies = getFromLocalStorage();
  const [favorites, setFavorites] = useState([]);

  const favoritesPopupRef = useRef(null);
  useClickOutside(favoritesPopupRef, () => setIsOpen(false));

  useEffect(() => {
    async function getData() {
      const results = await Promise.all(
        favoriteMovies.map(async (f) => getMovieDetails(f))
      );
      setFavorites(results);
    }
    getData();
  }, []);

  return (
    <DropdownWrapper ref={favoritesPopupRef}>
      <DropdownButton onClick={() => setIsOpen(true)}>
        <span style={{ fontSize: "14px", textAlign: "center" }}>
          Favorite movies
        </span>
      </DropdownButton>
      {isOpen && (
        <DropdownListWrapper>
          <ul className="favorites-list">
            {favorites.map((favorite) => (
              <li style={{ lineHeight: "2" }}>{favorite.title}</li>
            ))}
          </ul>
        </DropdownListWrapper>
      )}
    </DropdownWrapper>
  );
};

export default FavoritesDropdown;
