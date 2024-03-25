import styled from "styled-components"
import { Botao } from "../../styles"
import variables from "../../styles/variables"

export const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 48px;
`
export const Header = styled.header`
    margin-bottom: 40px;
    padding: 16px;

    h1 {
        margin-bottom: 35px;
        font-weight: normal;
        text-align: center;
        font-family: "Nova Mono", monospace;
        color: ${variables.rosa};
    }

    h2 {
        font-weight: bold;
        text-align: center;
        color: ${variables.roxo};
    }
`