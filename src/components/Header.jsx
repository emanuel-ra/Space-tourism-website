import { NavLink } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";


import {routes} from "../data/menu"



function Header() {
  return (
    <header className="min-w-full absolute justify-between items-center flex lg:py-10 lg:pl-10">

      <section className="lg:w-1/2 flex lg:justify-between lg:items-center relative pl-6 lg:pl-12">
        <img src={Logo} alt="Logo" />
        <span className="hidden h-1 w-[90%] border-b-[1px] absolute -right-20 z-10 lg:block"></span>
        <h1 className="sr-only">Space Tourism Website</h1>
      </section>

      <nav className="bg-white/25 w-10/12 hidden md:flex md:justify-center md:backdrop-blur-sm lg:w-1/2">
        <ul className="flex space-x-4">
          {routes.map((route, index) => (
            <li key={index.toString()} className="h-24">
              <NavLink
                id="nav_link"
                to={route.path}
                end
                className={({ isActive }) => isActive ? "is-active" : undefined }
              >
                {route.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <section className="p-4 relative md:hidden">
        <button className="blockh-full flex justify-center items-center p-4" onClick={
          () => {
            let sideMenu = document.getElementById('side_mobile_menu');
            sideMenu.classList.toggle('hidden')
          }
        }>
          <img src={hamburger} alt="mobile menu" />
        </button>
      </section>

      
    </header>
  );
}

export default Header;
