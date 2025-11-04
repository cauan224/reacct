import { Link, NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <Link to="/" className="brand">
          <img src={logo} alt="Logo da farmácia" />
          <span>Farmácia Nóis</span>
        </Link>

        <nav className="nav">
          <NavLink
            to="/servicos"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Serviços
          </NavLink>
          <NavLink
            to="/sobre-nos"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Sobre
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
