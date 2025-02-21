import { NavLink } from "react-router"
import Dropdown from "./dropdown"
import { PiShoppingCartDuotone } from "react-icons/pi";
import { useSelector } from "react-redux";
//import {Logo} from "./Logo.svg"
function Navbar() {
    const{totalQuantity}=useSelector(state=>state.shoppingCart)
    return(
    <nav>
    <div className="navcontainer">
        logo
    <ul>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/">Product</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li>
            {
                totalQuantity>0 &&(
                    <div className="tracker">{totalQuantity}</div>
                )
            }
        <Dropdown>
            <PiShoppingCartDuotone/>
        </Dropdown>
        </li>
    </ul>
    </div>
    </nav>
    )
}
export default Navbar