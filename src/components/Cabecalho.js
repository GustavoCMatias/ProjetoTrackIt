import styled from "styled-components"
import foto from "../img/patrick.jpg"

export default function Cabecalho(){
    return(
        <TelaCabecalho>
            <p>TrackIt</p>
            <img src={foto} alt="Foto de perfil"/>
        </TelaCabecalho>
    )
}

const TelaCabecalho = styled.div`
    width: 375px;
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    top: 0;
    left: 0;

    padding: 10px 18px;

    display: flex;
    justify-content: space-between;

    img{
        height: 50px;
        width: 50px;
        border-radius: 25px;

    }

    p{
        font-family: Playball;
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        letter-spacing: 0em;
        text-align: left;
        color: white;

    }
` 