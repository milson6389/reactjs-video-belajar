import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Profile from "../../assets/img/profile.png";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const isLoggedIn = true;

  const setIsMobileHandler = () => {
    setIsMobile(!isMobile);
  };
  const setIsActiveHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="relative px-5 py-2 bg-white h-fit">
      <nav className="md:hidden">
        <div className="z-10 mx-5">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img className="w-1/3 z-10" src={Logo} alt="Logo" />
            </Link>
            {isLoggedIn ? (
              <button
                onClick={setIsMobileHandler}
                id="btnToggle"
                className="cursor-pointer z-10"
              >
                {isMobile ? (
                  <i className="fa-solid fa-x"></i>
                ) : (
                  <i className="fa-solid fa-bars"></i>
                )}
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
        {isLoggedIn && (
          <ul
            className={`w-screen absolute top-0 start-0 toggleMenu flex flex-col justify-center gap-5 px-14 py-3 rounded-md border border-gray-100 bg-white shadow-lg  ${
              isMobile ? "translate-y-11" : "-translate-y-96"
            }`}
          >
            <li>
              <a href="/">Kategori</a>
            </li>
            <li>
              <a href="/">Profil Saya</a>
            </li>
            <li>
              <a href="/">Kelas Saya</a>
            </li>
            <li>
              <a href="/">Pesanan Saya</a>
            </li>
            <li>
              <a className="text-red" href="/">
                Keluar
                <i className="mx-1 fa-solid fa-arrow-right-from-bracket"></i>
              </a>
            </li>
          </ul>
        )}
      </nav>
      <nav className="mx-5 hidden md:flex justify-between items-center">
        <Link to="/">
          <img className="w-1/3 z-10" src={Logo} alt="Logo" />
        </Link>
        {isLoggedIn ? (
          <div className="flex items-center gap-5">
            <a href="/">Kategori</a>
            <div className="relative">
              <button onClick={setIsActiveHandler}>
                <img
                  src={Profile}
                  alt="profile"
                  className="w-[50px] h-[50px] relative"
                />
              </button>
              <ul
                className={`toggleMenu absolute end-0 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg ${
                  isActive ? "" : "hidden"
                }`}
              >
                <li className="p-4">
                  <a href="/">Profil Saya</a>
                </li>
                <li className="p-4">
                  <a href="/">Kelas Saya</a>
                </li>
                <li className="p-4">
                  <a href="/">Pesanan Saya</a>
                </li>
                <li className="p-4">
                  <a className="text-red" href="/">
                    Keluar
                    <i className="mx-1 fa-solid fa-arrow-right-from-bracket"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
