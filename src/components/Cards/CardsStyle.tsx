import styled from 'styled-components'
// import color from '../Cards/Cards'
import color from '../../style/Styles'

export const SectionStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    max-height: 500px;
`

export const DivStyle = styled.div`
    display: flex;
    height: 55vh;
    width: 35vh;
    margin-top: 10%;
    margin-left: 6%;
    margin-right: 2%;
    margin: 10% 6% 0 2%;
    background: ${color.cards.invoincing};
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: white
`