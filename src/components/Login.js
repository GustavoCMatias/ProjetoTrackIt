
import styled from "styled-components";
import logo from "../img/Logo.png"

export default function Login() {
    return (
        <TelaLogin>
            <Logo src={logo} />
        </TelaLogin>
    )

}

const TelaLogin = styled.div`
`

const Logo = styled.img`

`