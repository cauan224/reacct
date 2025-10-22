// projeto\src\components\InfoCurso\index.jsx

import { useState } from 'react';
import './style.css'

function InfoCurso(){
    // const nome = "Cauan coelho";
    // const Idade = "21";
    // const Curso = "Densevolvimento de Sistema";

    const [nome,setNome]=useState("Cauan coelho");
    const [Idade,setIdade]=useState(20);
    const [Curso,setCurso]=useState("DS");
    const[DadosDoCurso,setDadosDoCurso]=useState ();
    const [Local,setLocal]=useState("Rua dos parceiros");
    const [DataInicio,setDataInicio]=useState("Cauan coelho");
    const [DataFinal,setDataFinal]=useState("Cauan coelho");

    return(
        <div className=' info-aluno'>
            <h2>Infomaçao do Curso</h2>
            <p>DadosDoCurso {DadosDoCurso}</p>
            <p>Nome: {nome}</p>
            <p>Idade: {Idade}</p>
            <p>Curso: {Curso}</p>
            <p>Local: {Local}</p>
            <p>DataInicio:{DataInicio}</p>
            <p>DataFinal:{DataFinal}</p>

        </div>


    );
}

export default InfoCurso