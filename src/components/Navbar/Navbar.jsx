import { AppName, Logo, LogoWrapper, NavbarWrapper } from "./styled";
import { NavLink } from "react-router-dom";
import { getImageBasePath } from "../../utils/getImageBasePath";

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
    </NavbarWrapper>
  );
};

export default Navbar;
