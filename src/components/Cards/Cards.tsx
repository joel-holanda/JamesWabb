import { Link } from "react-router-dom"
import '../Cards/CardsStyle.sass'

function Options(){
    return(
    <>       
        <div className="w-full h-full flex justify-center options">
            <p className="bg-[#21CE71]"><Link to="/cadastro">Cadastrar</Link></p>
            <p className="bg-[#62C3AD]"><Link to="/vender">Vender</Link></p>
            <p className="bg-[#50AE24]"><Link to="/estoque">Estoque</Link></p>
            <p className="bg-[#1D788C]"><Link to="/faturamento">Faturamento</Link></p>
        </div>
    </>
    )
}

export default Options