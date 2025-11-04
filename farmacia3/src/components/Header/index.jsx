import { Link } from "react-router-dom";
import "./style.css"; // Agora está correto - CSS na mesma pasta

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">Farmácia Menos Saúde</div>
                <nav className="nav">
                    <Link to="/">Início</Link>
                    <Link to="/sobre-nos">Sobre Nós</Link>
                    <Link to="/fale-conosco">Fale Cosnco</Link>
                </nav>
            </div>
        </header>
    );
}