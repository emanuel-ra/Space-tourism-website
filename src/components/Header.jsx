import {NavLink } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";

const routes  = [    
    {'path':'/' ,'text': '00 HOME'} ,
    {'path':'/destination' ,'text': '01 DESTINATION'}  ,
    {'path':'/crew' ,'text': '02 CREW'}  ,
    {'path':'/technology' ,'text': '03 TECHNOLOGY'} ,
  ]


function Header() {

  return (
    <header className="min-w-full absolute justify-between items-center flex lg:p-10">      
      
      <section className="w-1/2 flex justify-between items-center relative pl-12">
        <img src={Logo} alt="Logo" />
        <span className="hidden lg:block h-1 w-[90%] border-b-2 absolute -right-24 z-10"></span>
      </section>

      <nav className="bg-white/25 w-10/12 lg:w-1/2 hidden md:flex md:justify-center md:backdrop-blur-sm">
        <ul className="flex space-x-4">
          {routes.map((route,index) => (
            <li key={index.toString()} className="h-24">
              <NavLink          
                id="nav_link"     
                to={route.path}
                end
                className={({ isActive }) => isActive ? "is-active" : undefined}
              >
                {route.text}
              </NavLink>
            </li>
          ))}
          <a href="" className="blockh-full flex justify-center items-center p-4 md:hidden">
            <img src={hamburger} alt="mobile menu" />
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
