import { Link } from "react-router-dom";
type Props = {
    text: string;
}

function Option(props: Props){
    return(
        <>
            {props.text}
        </>
    )
}

function Options(){
    return(
    <>           
        <Link to="/cadastro"><Option text="Cadastrar"/></Link>
        <Link to="/vender"><Option text="Vender"/></Link>
        <Link to="/estoque"><Option text="Estoque"/></Link>
        <Link to="/faturamento"><Option text="Faturamento"/></Link>
    </>
    )
}

export default Options