import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useState } from "react";
import { RootReducer } from "../../store";

import { Botao, Campo } from "../../styles";
import * as S from "./styles";
import { cadastrar } from "../../store/reducers/contatos";

const Formulario = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos);

  const [name, setName] = useState('')
  const [tell, setTell] = useState('')
  const [email, setEmail] = useState('')


  const cadastrarContato = (event: FormEvent) => {
    event.preventDefault();

    dispatch(cadastrar({
      name,
      email,
      tell
    }))
  }

  const limparCampos = () => {
    setTimeout(() => {
      setName('')
      setTell('')
      setEmail('')
    }, 50)
  }

  return (
    <>
      <S.Header>
        <h1>Agenda de Contatos</h1>
        <h2>Total de {itens.length} contatos na agenda</h2>
      </S.Header>
      <S.Form onSubmit={cadastrarContato}>
        <Campo 
        value={name} 
        onChange={(event) => setName(event.target.value)} 
        type="text" placeholder="Nome" required 
        />
        <Campo 
        value={tell} 
        onChange={(event) => 
        setTell(event.target.value)} 
        type="text" placeholder="Telefone" required 
        />
        <Campo
        value={email} 
        onChange={(event) => 
        setEmail(event.target.value)} 
        type="email" placeholder="E-mail" required 
        />
          <Botao onClick={limparCampos} type="submit">
            ADICIONAR
            </Botao>
      </S.Form>
    </>
  );
};

export default Formulario;
