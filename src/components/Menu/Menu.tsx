import '../../style/global.css'


type PropsMenu = {
    icons?: string;
    alt?: string;
    title: string;
}

function Menu(props: PropsMenu){
    return(
        <div className='bg-[#019472] flex h-[100px] items-center justify-center text-5xl'>
           {props.title}
           <img src={props.icons} alt={props.alt} />
        </div>
    )
}

export default Menu