import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritoReducer = {
  itens: Produto[]
}

const initialState: favoritoReducer = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const favoritoItens = action.payload

      const itemJaExiste = state.itens.find(
        (favorito) => favorito.id === favoritoItens.id
      )

      if (itemJaExiste) {
        state.itens = state.itens.filter(
          (favorito) => favorito.id !== favoritoItens.id
        )
      } else {
        state.itens.push(favoritoItens)
      }
    }
  }
})

export const { adicionarFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
