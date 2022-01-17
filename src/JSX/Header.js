import { useContext } from "react"
import { items } from "../App"

function Header() {
    const item = useContext(items)

    return (
        <div className="container">
            <div className="navbar">
                <div className="row">
                    <div className="column header">
                        <h1 className="__menu">TSHOP</h1>
                        <div>
                            <ul>
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">SHOP</a></li>
                                <li><a href="#">BLOG</a></li>
                                <li><a href="#">SERVIES</a></li>
                                <li><a href="#">
                                    <i class="fas fa-shopping-cart"></i>
                                    <p>{item.count === 0 ? '' : item.count}</p>
                                    </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header