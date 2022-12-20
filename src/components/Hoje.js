import styled from "styled-components";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape"
import check from "../img/Vector.png"
import React, { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import CompletosContext from "../contexts/CompletosContext";
import axios from "axios";

const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
export default function Hoje() {
    const { token } = useContext(AuthContext)
    const {completos, setCompletos} = useContext(CompletosContext)
    const agora = new Date();
    const [habitos, setHabitos] = React.useState([])
    const [effect, setEffect] = React.useState(0)
    

    useEffect(() => {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get(url, config)
            .then((resp) => {
                setHabitos(resp.data)
                setCompletos({...completos, total: resp.data.length})
            })
        
    }, [effect])

    function cliqueCheck(status, id){
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const body={}
        if(status===true){
            const url =`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
            axios.post(url, body, config)
                .then(() => {
                    setCompletos({...completos, completos: completos.completos-1})
                    setEffect(effect+1)
                })
                .catch((resp) => alert(resp.response.data.message))
        
        }else{
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
            axios.post(url, body, config)
                .then(() => {
                    setCompletos({...completos, completos: completos.completos+1})
                    setEffect(effect+1)
                })
                .catch((resp) => alert(resp.response.data.message))
        }
    }

    return (
        <>
            <Cabecalho />
            <TelaHoje>
                <h1>{`${dias[agora.getDay()]}, ${agora.getDate()}/${agora.getMonth() + 1}`}</h1>
                <h2>Nenhum hábito concluído ainda</h2>
                {habitos.map((each) =>
                    <Tarefa>
                        <div>
                            <h3>{each.name}</h3>
                            <p>Sequência atual: <span className={each.done?"verdeletra":""}>{each.currentSequence} dias</span><br/></p>
                            <p>Seu recorde: <span className={each.done&&each.currentSequence===each.highestSequence?"verdeletra":""}>{each.highestSequence} dias</span></p>
                        </div>
                        <div className={each.done?"verde":"cinza"}> 
                            <img src={check} alt="check" onClick={() => cliqueCheck(each.done, each.id)}/>

                        </div>

                    </Tarefa>
                )}

            </TelaHoje>
            <Rodape />
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
    .cinza{
        background-color: #EBEBEB;
    }
    .verde{
        background-color: #8FC549;
    }
    .verdeletra{
        color: #8FC549;
    }
`