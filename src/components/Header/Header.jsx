import { Link } from "react-router-dom"

export const Header = () => {

    return (
        <header className="header">
            <div className="headerContainer">
                <h1 className="headerTitle">MELOSHOP</h1>

                <nav className="navbar">
                    <Link className="navbarLink" to="/">INICIO</Link>
                    {/* <Link className="navbarLink" to="/carrito">CARRITO</Link>
                    <Link className="navbarLink" to="/cuenta">CUENTA</Link> */}
                    <Link className="navbarLink" to="/productos/nike">NIKE</Link>
                    <Link className="navbarLink" to="/productos/adidas">ADIDAS</Link>
                    <Link className="navbarLink" to="/productos/vans">VANS</Link>
                </nav>
            </div>
        </header>
    )

}