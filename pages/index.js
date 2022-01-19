import {useState} from 'react';
//Next js usa o mais atual fast refrash
function Home(){
    return(
    <div><h1>Home 1</h1>
    <Contador />
    </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(1);
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