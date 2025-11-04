import './style.css'

export default function Funcionario(){

    return(
        <div className='container'>
            <h2>Funcionario</h2>
            <form>
                <input type="text" placeholder='Nome' />
                <input type="text" placeholder='Cargo' />
                <button type='submit'>Adicionar</button>
            </form>
            <ul>
                <li>Exemplo de Funcionario</li>
            </ul>

        </div>
    )
}