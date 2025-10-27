import { useState } from 'react'
import './style.css'

function AdicionarUsuario(){
    const [nome,setnome]=useState('');
     const [email,setemail]=useState('')

     const [usuarios,setUsuarios]=useState([]);

     const handleAdicionarUsuario=(event)=>{
        //Previne o comportamento padrao do formulario
        event.preventDefault();
        if (nome&&email){
            setUsuarios([...usuarios,{nome,email}])
            setnome('');
            setemail('');
        }
     }

    return(
        <div className='container'>
            <h2>Adicionar Usuario</h2>
            <form onSubmit={handleAdicionarUsuario}>
                <input type="text"
                placeholder='Nome'
                value={nome} 
                onChange={(e)=> setnome(e.target.value)} 
                    />
                <input type="email" 
                placeholder='Email'
                value={email}
                onChange={(e)=> setemail(e.target.value)}
                />
                <button type='submit'>Adicionar</button>
            </form>
            <hr />
            <h3>Usuario Adicionar</h3>
            <ul>
                {usuarios.map((usuarios,index)=>(
                    <li key={index}>
                    {usuarios.nome}-{usuarios.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdicionarUsuario