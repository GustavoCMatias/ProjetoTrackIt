import styled from "styled-components";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape"

export default function Historico(){
    return(
        <>
            <Cabecalho/>
            <TelaHistorico>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </TelaHistorico>


            <Rodape/>
        </>
    )
}

const TelaHistorico = styled.div`
    padding-top: 100px;
    padding-bottom: 110px;

    h1{
        font-family: Lexend Deca;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color: #126BA5;
        margin-left: 17px;
        margin-bottom: 17px;
    }
    p{
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        margin-left: 17px;

        color: #666666;

    }
`