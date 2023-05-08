import { Header, TitleSyle } from "./MenuStyle"
type Props = {
    icons?: string;
    alt?: string;
    title: string;
}

function Menu(props: Props){
    return(
        <>
            <Header>
                    <TitleSyle>{props.title}</TitleSyle >
                    <img src={props.icons} alt={props.alt} />
            </Header>
        </>
    )
}


export default Menu