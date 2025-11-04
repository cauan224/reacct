import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <strong>Farmácia Pague Mais</strong> - CNPJ 66.787.000/0002-00
      </div>
      <div>
        Rua da Cura, 8080 - Salvador/BA
        <div className="copy">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
