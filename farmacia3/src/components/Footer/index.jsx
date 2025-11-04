import "./style.css"; // CSS na mesma pasta

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div>
                    <strong>Farmácia Menos Saúde</strong>
                    <br />
                    CNPJ: 00.000.000/0001-00
                </div>
                <div>RUA DA SAÚDE, 345 - Barra da Polvoram</div>
                <div className="copy">
                    &copy; {new Date().getFullYear()} Todos os direitos reservados
                </div>
            </div>
        </footer>
    );
}