import './style.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <div>
                <strong>Contabilidade Simples</strong>
                <br />
                CNPJ- 00.111.222/4444
            </div>
            <div>
                Rua F,345-Centro-Salvador-Bahia
            </div>
            <div className='copy'>
                &copy; {new Date().getFullYear} Todos os direitos reservados.
            </div>
        </footer>
    )
}