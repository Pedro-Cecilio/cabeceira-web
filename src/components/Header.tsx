import { Link, useLocation } from "react-router-dom";
import logo from "../../src/assets/headerLogo.svg";
import profile from "../../src/assets/profile.svg";
import menu from "../../src/assets/menu.svg";
import closeIconMenu from "../../src/assets/closeIconMenu.svg";
import { useState } from "react";

const MobileHeader = () => {
  return (
    <nav className="w-full min-[730px]:hidden p-2 flex flex-col items-center gap-12 my-8 bg-blue-950 ">
      <Link to="/" className="text-white text-base font-bold font-16">
        Minha cabeceira
      </Link>
      <Link to="/explore" className="text-white text-base font-bold font-sans">
        Explorar
      </Link>
    </nav>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen((previous) => !previous);
  };
  const { pathname } = useLocation();

  return (
    <header className="w-full h-min-[300px] p-2  bg-blue-950 ">
      <div className="flex items-center  justify-between max-[730px]:hidden">
        <Link to="/">
          <img className="w-[54px] h-[55px]" src={logo} />
        </Link>
        <div className="w-64 h-[29px] flex items-center gap-16">
          <Link
            to="/"
            className={`text-white text-base ${
              pathname === "/" && "font-bold"
            }  font-16`}
          >
            Minha cabeceira
          </Link>
          <Link
            to="/explore"
            className={`text-white text-base font-sans  ${
              pathname === "/explore" && "font-bold"
            }`}
          >
            Explorar
          </Link>
        </div>
        <Link to="/profile">
          <img className="w-[34px] h-9 " src={profile} />
        </Link>
      </div>
      <div className="min-[730px]:hidden flex relative justify-between items-center">
        <img
          className="w-[45px] h-[45px]"
          src={menuOpen ? closeIconMenu : menu}
          onClick={handleMenuOpen}
        />
        <img className="w-[54px] h-[55px]" src={logo} />
        <Link to="/profile">
          <img className="w-[34px] h-9 " src={profile} />
        </Link>
      </div>
      {menuOpen && <MobileHeader />}
    </header>
  );
};

export default Header;