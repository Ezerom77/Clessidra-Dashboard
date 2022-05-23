import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar bg-light">
      <ul>
        <li>
          <NavLink to="/"exact className="text-dark py-2 px-3 w-100 d-inline-block" activeClassName="active">
            <FaIcons.FaHome className="me-2" /> Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/products"exact className="text-dark py-2 px-3 w-100 d-inline-block"activeClassName="active">
            <FaIcons.FaShoppingCart className="me-2" /> Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/users"exact className="text-dark py-2 px-3 w-100 d-inline-block"activeClassName="active">
            <FaIcons.FaUsers className="me-2" /> Usuarios
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
