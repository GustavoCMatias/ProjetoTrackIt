import styled from "styled-components";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape"
import plus from "../img/+.png"
import lixo from "../img/lixo.png"
import React, { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";

const diasemana = [{ dia: 0, nome: 'D' }, { dia: 1, nome: 'S' }, { dia: 2, nome: 'T' }, { dia: 3, nome: 'Q' }, { dia: 4, nome: 'Q' }, { dia: 5, nome: 'S' }, { dia: 6, nome: 'S' }]

export default function Habitos() {
    const [clicados, setClicados] = React.useState([])
    const [criacaoHabito, setCriacaoHabito] = React.useState(0)
    const [nomeHabito, setNomeHabito] = React.useState('')
    const [listHabitos, setListHabitos] = React.useState([])
    const [effect, setEffect] = React.useState(0)

    const { token } = useContext(AuthContext)

    useEffect(() => {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get(url, config)
            .then((resp) => {
                setListHabitos(resp.data);
            })
            .catch((resp) => {
                alert(resp.response.data.message)
            })

    }, [effect])

    function cliqueDia(dia) {
        if (clicados.includes(dia)) {
            setClicados(clicados.filter((i) => i !== dia))
        } else {
            setClicados([...clicados, dia])
        }
    }

    function cliqueMais() {
        setCriacaoHabito(1)
    }

    function cliqueCancelar() {
        setCriacaoHabito(0)
    }
    function cliqueSalvar() {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const body = { name: nomeHabito, days: clicados }
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        axios.post(url, body, config)
            .then(() => {
                setClicados([])
                setNomeHabito('')
                setCriacaoHabito(0)
                setEffect(effect+1)
            })
            .catch((resp) => {
                alert(resp.response.data.message)
            })
    }
    function cliqueLixo(id){
        if(!window.confirm('Realmente deseja deletar este hábito?')){
            return('')
        }
        const url=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.delete(url, config)
            .then(()=> setEffect(effect+1))
    }

    return (
        <>
            <Cabecalho />
            <TelaHabitos>
                <PrimeiraDiv>
                    <h1>Meus Hábitos</h1>
                    <button onClick={cliqueMais}>
                        <img src={plus} alt="plus" />
                    </button>
                </PrimeiraDiv>
                <NovoHabito criacaoHabito={criacaoHabito}>
                    <input
                        placeholder="nome do hábito"
                        value={nomeHabito}
                        onChange={e => setNomeHabito(e.target.value)}></input>
                    <div>
                        {diasemana.map(i => <button className={clicados.includes(i.dia) ? 'diaclicado' : ''} onClick={() => cliqueDia(i.dia)} key={i.dia}>{i.nome}</button>)}
                    </div>
                    <div className="salvar">
                        <p onClick={cliqueCancelar}>Cancelar</p>
                        <button onClick={cliqueSalvar}>Salvar</button>
                    </div>


                </NovoHabito>
                
                {listHabitos.map((each) => 
                    <HabitoAtual key={each.id}>
                        <div className="topoAtual">
                            <h1>{each.name}</h1>
                            <img src={lixo} alt="deletar" onClick={() => cliqueLixo(each.id)}/>

                        </div>

                        <div>
                            {diasemana.map(i => <button className={each.days.includes(i.dia) ? 'diaselecionado' : ''} key={i.dia}>{i.nome}</button>)}
                        </div>
                    </HabitoAtual>
                )}


                <p className={listHabitos.length!==0?'escondido':''}>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
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
    
    
    button {
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
    .escondido{
        display: none;
    }
`
const PrimeiraDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 17px;
`
const NovoHabito = styled.div`

    height: 180px;
    width: 340px;
    border-radius: 5px;
    background-color: #ffffff;

    
    margin: auto;
    margin-top: 20px;
    padding: 18px;

    display: ${props => props.criacaoHabito === 1 ? 'flex' : 'none'};

    flex-direction: column;
    justify-content: flex-start;
    input{        
        
        color: #666666;
        border: 1px solid #D4D4D4;

        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;

        height: 45px;
        width: 303px;
        border-radius: 5px;
        padding-left: 11px;
        margin-bottom: 8px;

        ::placeholder{
                color: #D4D4D4;
            }
    }
    
    div{
        margin-left: 0;
        margin-right: auto;
        padding: 0;
    }

    button{
        height: 30px;
        width: 30px;
        border-radius: 5px;

        background-color: #ffffff;
        color: #DBDBDB;
        border: 1px solid #D4D4D4;

        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: center;

        padding: 0;
        margin: auto;
        margin-right: 4px;
    }
    .diaclicado{
        background-color: #CFCFCF;
        color: #ffffff;
    }
    .salvar{
        width: 100%;
        display: flex;
        vertical-align: middle;
        justify-content: flex-end;
        height: 35px;
        margin-top: 30px;


        p{
            margin-top: 0;
            line-height: 35px;
            text-align: center;
            margin-right: 23px ;
        }


        button{
            height: 35px;
            width: 84px;
            border-radius: 5px;

            background-color: #52B6FF;
            color: #ffffff;

            font-family: Lexend Deca;
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: center;

            margin: 0;
            
        }
    }
`

const HabitoAtual = styled.div`
    height: 91px;
    width: 340px;
    border-radius: 5px;
    background-color: #ffffff;

    
    margin: auto;
    margin-top: 20px;
    padding: 13px;

    flex-direction: column;
    justify-content: flex-start;
    

    button{
        height: 30px;
        width: 30px;
        border-radius: 5px;

        background-color: #ffffff;
        color: #DBDBDB;
        border: 1px solid #D4D4D4;

        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: center;

        padding: 0;
        margin: auto;
        margin-right: 4px;
    }
    h1{
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: #666666;
        margin-bottom: 8px;

    }
    .diaselecionado{
        background-color: #CFCFCF;
        color: #ffffff;
    }
    .topoAtual{
        display: flex;
        justify-content: space-between;

        img{
            width: 13px;
            height: 15px;
        }
    }
    
`

