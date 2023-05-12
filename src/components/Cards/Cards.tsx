import { SectionStyle, DivStyle } from "./CardsStyle"

type Props = {
    text: string;
    color: string;
}

function Option(props: Props){
    return(
        <>
            <DivStyle>{props.text}</DivStyle>
        </>
    )
}

function Options(){
    return(
    <>           
        <SectionStyle>
            <Option text="Cadastrar" color="#"/>
            <Option text="Vender" color=""/>
            <Option text="Estoque" color=""/>
            <Option text="Faturamento" color=""/>
        </SectionStyle>    
    </>
    )
}

export default Options