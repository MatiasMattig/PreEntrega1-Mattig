import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

export const Header = () => {

    return (
        <header className="header">
            <div className="headerContainer">
                <h1 className="headerTitle">MELOCAP</h1>

                <CartWidget />

                <nav className="navbar">
                    <Link className="navbarLink" to="/">INICIO</Link>
                </nav>
            </div>
        </header>
    )

}