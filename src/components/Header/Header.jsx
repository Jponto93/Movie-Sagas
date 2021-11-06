import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="mainHeader">
            <h1>The Movies Saga!</h1>
            <nav>
                <Link to="/">MOVIE LIST</Link>
            </nav>

            <nav>
                <Link to="/add">ADD MOVIE</Link>
            </nav>
        </div>
    )
} // end Header

export default Header;