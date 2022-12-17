import styled from "styled-components";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape"
import plus from "../img/+.png"

export default function Habitos() {
    return (
        <>
            <Cabecalho />
            <TelaHabitos>
                <div>
                    <h1>Hábitos</h1>
                    <button>
                        <img src={plus} alt="plus"/>
                    </button>
                </div>

                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </TelaHabitos>
            <Rodape />
        </>
    )
}

const TelaHabitos = styled.div`
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
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 17px;
    }
    button{
        height: 35px;
        width: 40px;
        border-radius: 5px;
        background-color: #52B6FF;
        border: none;

    }

    p{
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #666666;
        padding-left: 18px;
        margin-top: 28px;

    }
`