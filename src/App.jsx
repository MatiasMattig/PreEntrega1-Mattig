import './App.css'
import { Header } from './components/Header'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <div>
      <Header />
      <ItemListContainer saludo={"Bienvenido a MELOSHOP"}/>
    </div>
  )

}

export default App
