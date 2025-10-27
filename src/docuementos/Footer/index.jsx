import './style.css'


function Footer(){
    return(
        <footer className="footer-container">
            <p>&copy; {new Date().getFullYear()}Senai
                <br />CNPJ: 123.456.789.10
            </p>
            
        </footer>
    )
}

export default Footer