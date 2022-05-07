import {useState} from 'react';
//Next js usa o mais atual fast refrash
function Home(){
    return(
    <div><h1>COUNTER</h1>
    <Contador />
    </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(0);
    function adicionarContador(){
        setContador(contador +1);
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home