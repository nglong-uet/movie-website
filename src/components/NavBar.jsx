import { Link } from "react-router-dom";
import "../css/NavBar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="">Web Phim</Link>
        </div>
        <div>
            <Link to="/" className="nav-link">Trang chủ</Link>
            <Link to="/favorites" className="nav-link">Yêu thích</Link>
        </div>
    </nav>
}

export default NavBar;