import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      name: "Maria",
      email: "madia@gmail.com",
      tell: '8198028922',
    },
    {
      id: 2,
      name: "Larissa",
      email: "larissa@gmail.com",
      tell: '4298280501',
    },
    {
      id: 3,
      name: "Yasmin",
      email: "whoiro@gmail.com",
      tell: '6195768797',
    },
    {
      id: 4,
      name: "Babysca",
      email: "babyscamz@gmail.com",
      tell: '8196596712',
    }
  ]
}

const contatosSlice = createSlice({
  name: "Contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
        state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
        const indexContato = state.itens.findIndex((contato) => contato.id === action.payload.id) 

        if(indexContato >= 0) {
            state.itens[indexContato] = action.payload
        }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExistente = state.itens.find(contato => contato.name.toLowerCase() === action.payload.name.toLowerCase()) 

      if(contatoExistente) {
        alert('Já existe um contato com este nome na agenda :D')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        
        const novaTarefa = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(novaTarefa)
      }
    }
  },
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
