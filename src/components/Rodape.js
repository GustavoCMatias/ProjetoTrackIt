import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

const percentage = 60;
export default function Cabecalho() {
    return (
        <TelaRodape>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            <div>
                <Link  to="/hoje">
                    <CircularProgressbar
                        value={percentage}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </Link>
            </div>
            <Link to="/historico">
                <p>Histórico</p>
            </Link>

        </TelaRodape>
    )
}

const TelaRodape = styled.div`
    height: 70px;
    width: 375px;
    background-color: #ffffff;

    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    padding-left:36px;
    padding-right: 31px;
    align-items: center;

    div{
        height: 91px;
        width: 91px;

        position: fixed;
        bottom: 10px;
        left: 142px;
        
    }

    p{
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;

        text-decoration: none;
        color: #52B6FF;

    }
`