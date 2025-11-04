import "./style.css";

export default function FaleConosco() {
    return (
        <div className="page">
            <h1>Fale Conosco</h1>
            <p>Tem alguma dúvida, sugestão ou reclamação? Entre em contato conosco!</p>
            
            <form className="contact-form">
                <label>
                    Nome:
                    <input type="text" placeholder="Seu nome" />
                </label>

                <label>
                    Email:
                    <input type="email" placeholder="Seu email" />
                </label>

                <label>
                    Mensagem:
                    <textarea placeholder="Escreva sua mensagem aqui"></textarea>
                </label>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}