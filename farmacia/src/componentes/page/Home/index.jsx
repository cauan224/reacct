import "./style.css";
import { Link } from "react-router-dom";
import banner from "../../assets/banner-farmacia.jpg";

export default function Home() {
  return (
    <main className="home">
      <section className="home_banner">
        <img src={banner} alt="Banner da farmácia" className="home_image" />
        <div className="home_text">
          <h1>Bem-vindo à <span>Farmácia Nóis</span></h1>
          <p>Cuidando da sua saúde com atenção, qualidade e preço justo 💊</p>
          <Link to="/servicos" className="btn">
            Ver nossos serviços
          </Link>
        </div>
      </section>

      <section className="home_about">
        <h2>Por que escolher a gente?</h2>
        <div className="home_cards">
          <div className="card">
            <h3>Atendimento humanizado</h3>
            <p>Nossa equipe está pronta para te ajudar com simpatia e profissionalismo.</p>
          </div>
          <div className="card">
            <h3>Preços acessíveis</h3>
            <p>Medicamentos com descontos exclusivos e ofertas diárias.</p>
          </div>
          <div className="card">
            <h3>Entrega rápida</h3>
            <p>Receba seus produtos em casa com segurança e agilidade.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
