import './App.css'
import { Header } from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div>
      <Header />
      <ItemListContainer saludo={"Bienvenido a MELOSHOP"}/>
    </div>
  )

}

export default App
