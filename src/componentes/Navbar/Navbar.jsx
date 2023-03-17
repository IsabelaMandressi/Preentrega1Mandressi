import ListNavbar from "../ListNavbar/ListNavbar"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <ul className="categories" style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between", width: "20em"
            }}>
                    <NavLink
                        to="/todo"
                        className={({ isActive }) =>
                            isActive ? "active-navbar" : "navbar-item"
                        }
                    >
                        <ListNavbar title="Todo" />
                    </NavLink>

                    <NavLink
                        to="/tote-bags"
                        className={({ isActive }) =>
                            isActive ? "active-navbar" : "navbar-item"
                        }
                    >
                        <ListNavbar title="Tote bags" />
                    </NavLink>

                    <NavLink
                        to="pañuelos"
                        className={({ isActive }) =>
                            isActive ? "active-navbar" : "navbar-item"
                        }
                    >
                        <ListNavbar title="Pañuelos" />
                    </NavLink>
                    <NavLink
                        to="/poleras"
                        className={({ isActive }) =>
                            isActive ? "active-navbar" : "navbar-item"
                        }
                    >
                        <ListNavbar title="Poleras" />
                    </NavLink>
            </ul>
            <CartWidget />
        </div>

    )
}

export default Navbar