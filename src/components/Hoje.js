import styled from "styled-components";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape"
import check from "../img/Vector.png"


export default function Hoje() {
    return (
        <>
            <Cabecalho />
            <TelaHoje>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
                <Tarefa>
                    <div>
                        <h3>Ler 1 capítulo de livro</h3>
                        <p>Sequência atual: 3 dias <br />Seu recorde: 5 dias</p>
                    </div>
                    <div>
                        <img src={check} alt="check"/>

                    </div>

                </Tarefa>
            </TelaHoje>
            <Rodape/>
        </>
    )
}

const TelaHoje = styled.div`
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
    }
    h2{
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;

        color: #bababa;
        margin-left: 17px;
        margin-bottom: 28px;

    }
    
`

const Tarefa = styled.div`
    background-color: #ffffff;
    height: 94px;
    width: 340px;
    margin: auto;
    color: #666666;

    padding: 13px;
    margin-bottom: 10px;

    display: flex;
    justify-content: space-between;
    h3{
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;

        margin-bottom: 7px;
    }
    p{
        font-family: Lexend Deca;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;

    }
    div:nth-child(2){
        background-color: #EBEBEB;
        height: 69px;
        width: 69px;
        border-radius: 5px;

    }
    img{
        height: 28px;
        width: 35px;
        display: block;
        margin: auto;
        margin-top: 20px;
    }
`