import './App.css'
import './styles/styles.scss'
import { Header } from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        
      </Routes>

      <ItemListContainer />
    </BrowserRouter>
  )

}

export default App
