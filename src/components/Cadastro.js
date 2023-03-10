import axios from "axios"
import React from "react";
import styled from "styled-components";
import logo from "../img/Logo.png"
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro() {
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [nome, setNome] = React.useState('')
    const [foto, setFoto] = React.useState('')
    const nav = useNavigate()

    function EnviarCadastro(e){
        e.preventDefault()
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
        const body = {
            email: email,
            name: nome,
            image: foto,
            password: senha
        }
        console.log(body)
        axios.post(url, body)
            .then(()=>{
                nav('/')
            })
            .catch((resp)=>{
                alert(resp.response.data.message)
            }

            )
    }
    return (
        <TelaLogin>
            <Logo src={logo} />
            <form onSubmit={EnviarCadastro}>
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
                <input
                    type="text"
                    id="Nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="nome"
                    required>

                </input>
                <input
                    type="text"
                    id="foto"
                    value={foto}
                    alt="fot de perfil"
                    onChange={e => setFoto(e.target.value)}
                    placeholder="foto"
                    required>

                </input>
                <button type="submit">Cadastrar</button>

            </form>

            <Link to='/'>
                <p>J?? tem uma conta? Fa??a login!</p>
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