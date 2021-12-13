import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    return (
        < nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div class="container-fluid m-2">
                <Link to="/" className="links p-2">Home</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/powers" className="links p-2">Powers</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/hero" className="links p-2">Hero</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Nav


