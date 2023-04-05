import { AppName, Logo, LogoWrapper, NavbarWrapper } from "./styled";
import { NavLink } from "react-router-dom";
import { getImageBasePath } from "../../utils/getImageBasePath";
import Search from "../Search/Search";
import FavoritesDropdown from "../Favorites/FavoritesDropdown";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <LogoWrapper>
          <Logo>
            <img
              alt="Movie Time logo"
              src={getImageBasePath("logo.png")}
              style={{ width: "100%", height: "100%" }}
            />
          </Logo>
          <AppName>MovieTime</AppName>
        </LogoWrapper>
      </NavLink>
      <ul style={{ display: "flex", listStyle: "none", alignSelf: "flex-end" }}>
        <li>
          <FavoritesDropdown />
        </li>
        <li>
          <Search />
        </li>
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
