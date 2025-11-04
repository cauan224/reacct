import './style.css'

export default function Footer(){

    return(
        <footer className='footer-container'>
            <div className='card'>
                <div className='card2'>
                    <div className='footer-content'>
                    </div>
                    <strong>Notes</strong>
                    <br />
                    CNPJ-00.000.000/0001
                </div>
                <div>
                    RUA DA SAUDE,345 Barra da polvoram
                </div>
                <div className='copy'>
                    &copy; {new Date().getFullYear()}Todos os direitos reservados

                </div>

            </div>

        </footer>
    )
}