import "./style.css";

export default function Servicos() {
  return (
    <section className="servicos">
      <h1>Serviços da farmácia</h1>
      <p>Atendemos em qualquer lugar</p>

      <div className="grid cols-3">
        <div className="card">
          <h3>Abertura da empresa</h3>
          <p>Auxílio completo para abrir sua farmácia com segurança.</p>
        </div>
        <div className="card">
          <h3>Fiscal</h3>
          <p>Assessoria fiscal e tributária para manter tudo regular.</p>
        </div>
        <div className="card">
          <h3>Consultoria</h3>
          <p>Orientação sobre gestão e crescimento do negócio.</p>
        </div>
      </div>
    </section>
  );
}
