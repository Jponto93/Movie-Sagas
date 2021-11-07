import { Link } from "react-router-dom";
import './Header.css';


function Header() {
    return (
        <div className="mainHeader">
            <h1>The Movies Saga!</h1>
            <div className="navContainer">
                <nav className="navMain">
                    <Link
                        className="linkMain"
                        to="/">MOVIE LIST</Link>
                </nav>
                <nav className="navMain">
                    <Link
                        className="linkMain"
                        to="/add">ADD MOVIE</Link>
                </nav>
            </div>
        </div>
    )
} // end Header

export default Header;