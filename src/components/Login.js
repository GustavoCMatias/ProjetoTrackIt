import axios from "axios"
import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../img/Logo.png"
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import FotoContext from "../contexts/FotoContext";


export default function Login() {
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const nav = useNavigate();
    const {setToken} = useContext(AuthContext)
    const {setFoto} = useContext(FotoContext)

    function entrar(e){
        e.preventDefault()
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        const body = {
            email: email,
            password: senha
        }
        axios.post(url,body)
            .then((resp)=>{
                setFoto(resp.data.image)
                setToken(resp.data.token)
                nav('/hoje')
            })
            .catch((resp)=>{
                console.log(resp)
                alert(resp.response.data.message)
            }
            )
        

    }

    return (
        <TelaLogin>
            <Logo src={logo} />
            <form onSubmit={entrar}>
                <input
                    type="email"
                    id="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email"
                    required>

                </input>
                <input
                    type="password"
                    id="senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    placeholder="senha"
                    required>

                </input>
                <button type="submit">Entrar</button>

            </form>
            <Link to='/cadastro'>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
            
        </TelaLogin>
    )

}

const TelaLogin = styled.div`
    padding-top: 60px;
    display: block;
    

    input{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        display: block;
        margin: auto;
        margin-bottom: 6px;
        
        
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;


        border: 1px solid #D4D4D4;
        padding-left: 11px;

        ::placeholder{
                color: #D4D4D4;
            }

    }
    button{
        width: 303px;
        height: 45px;
        display: block;
        margin: auto;
        background-color: #52B6FF;
        color: #ffffff;
        border: none;
        border-radius: 5px;

        font-family: Lexend Deca;
        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: center;


        margin-bottom: 25px;
    }
    p{
        font-family: Lexend Deca;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;

        text-decoration-line: underline;

        color: #52B6FF;

    }

    
    
`

const Logo = styled.img`
    display: block;
    margin: auto;
    margin-bottom: 33px;
`