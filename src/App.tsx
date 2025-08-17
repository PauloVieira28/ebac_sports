import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { useSelector } from 'react-redux'

import { RootReducer } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos favoritos={favoritos} />
      </div>
    </>
  )
}

export default App
