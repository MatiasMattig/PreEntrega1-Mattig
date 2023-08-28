import './App.css'
import './styles/styles.scss'
import { Header } from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Filtros } from './components/Filtros/Filtros';
import { CartProvider } from './components/Context/CartContext';
import CartView from './components/CartView/CartView';

function App() {

  return (

    <CartProvider>

      <BrowserRouter>
        <Header />

        <Filtros />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> } />
          {/* <Route path="/carrito" element={ <Carrito /> } />
          <Route path="/cuenta" element={ <Cuenta /> } /> */}
          <Route path="/cart" element={ <CartView /> }/>
          <Route path="*" element={ <Navigate to="/"/> }/>
        </Routes>

      </BrowserRouter>

    </CartProvider>

  )

}

export default App
