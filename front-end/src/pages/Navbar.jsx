import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to= '/'> Home </Link>
                </li>
                <li> 
                    <Link to= '/about'> about </Link>
                </li>
                <li> 
                    <Link to= '/articles'> aticles </Link>
                </li>
            </ul>
        </nav>
    )
}