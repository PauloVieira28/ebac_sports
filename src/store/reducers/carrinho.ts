import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      const productItens = action.payload

      state.itens.find((produto) => produto.id === productItens.id)
        ? alert('O produto ja está no carrinho')
        : state.itens.push(productItens)
    }
  }
})

export const { adicionarProduto } = carrinhoSlice.actions
export default carrinhoSlice.reducer
