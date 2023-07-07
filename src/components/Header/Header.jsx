import './Header.scss'

export const Header = () => {

    return (
        <header className="header">
            <div className="headerContainer">
                <h1 className="headerTitle">MELOSHOP</h1>

                <nav className="navbar">
                    <a className="navbarLink" href="#">Enlace 1</a>
                    <a className="navbarLink" href="#">Enlace 2</a>
                    <a className="navbarLink" href="#">Enlace 3</a>
                </nav>
            </div>
        </header>
    )

}