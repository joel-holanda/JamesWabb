import { SectionStyle, DivStyle } from "./OptionsStyle"

type Props = {
    text: string;
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
            <Option text="Cadastrar"/>
            <Option text="Vender"/>
            <Option text="Estoque"/>
            <Option text="Faturamento"/>
        </SectionStyle>    
    </>
    )
}

export default Options