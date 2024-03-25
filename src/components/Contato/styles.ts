import styled from "styled-components";
import { Botao } from "../../styles";
import variables from "../../styles/variables";

export const CardContato = styled.div`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #ecdfee;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 3px;
  border-radius: 20px;
`;

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;

  ul {
    textarea:first-child {
      font-weight: bold;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`;

export const BotaoDeletarECancelar = styled(Botao)`
  background-color: ${variables.rosa};
`;

export const BotaoEditar = styled(Botao)`
  background-color: ${variables.lilas};
`;

export const BotaoSalvar = styled(Botao)`
  background-color: ${variables.roxo};
`;

export const Descricao = styled.textarea`
  display: inline-block;
  font-size: 14px;
  resize: none;
  border: none;
  background-color: transparent;
  margin-left: 12px;
`;
