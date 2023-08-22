import './App.css'
import './styles/styles.scss'
import { Header } from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
        <Route path="/detail/:itemId" element={ <ItemDetailContainer /> } />
        {/* <Route path="/carrito" element={ <Carrito /> } />
        <Route path="/cuenta" element={ <Cuenta /> } /> */}
        <Route path="*" element={ <Navigate to="/"/> }/>
      </Routes>

    </BrowserRouter>
  )

}

export default App
