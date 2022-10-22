import { NavLink } from "react-router-dom";
import {routes} from "../data/menu"
import close from "../assets/shared/icon-close.svg";

function Aside() {
  return (
    <>
        <aside id="side_mobile_menu" className="w-[65%] min-h-screen absolute bg-white/10 backdrop-blur-md right-0 transition-all ease-in-out duration-150 hidden">
            <section className="w-full flex justify-end p-6">
                <button onClick={
                        () => {
                            let sideMenu = document.getElementById('side_mobile_menu');
                            sideMenu.classList.toggle('hidden')
                        }
                    }>
                    <img src={close} alt="" />
                </button>
            </section>
            <ul className="flex flex-col">
                {routes.map((route, index) => (
                    <li key={index.toString()} className="h-12 lg:h-24">
                    <NavLink
                        id="nav_link_mobile"
                        to={route.path}
                        end
                        className={({ isActive }) =>
                        isActive ? "is-active-mobile" : undefined
                        }
                        onClick={
                            () => {
                                let sideMenu = document.getElementById('side_mobile_menu');
                                sideMenu.classList.toggle('hidden')
                            } 
                        }
                    >
                        {route.text}
                    </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    </>    
  )
}

export default Aside