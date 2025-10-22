// projeto\src\components\InfoAluno\index.jsx
import { useState } from 'react';
import './style.css'

function InfoAluno(){
    // const nome = "Cauan coelho";
    // const Idade = "21";
    // const Curso = "Densevolvimento de Sistema";

    const [nome,setNome]=useState("Cauan coelho");
    const [Idade,setIdade]=useState(20);
    const [Curso,setCurso]=useState("DS");


    return(
        <div className=' info-aluno'>
            <h2>Infomaçao do aluno</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {Idade}</p>
            <p>Curso: {Curso}</p>

        </div>


    );
}

export default InfoAluno