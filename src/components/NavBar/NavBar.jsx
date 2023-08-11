import CarWidget from "../CartWidget/CartWidget";
import './NavBar.css'

export default function Navbar(){
    return(
        <>
        <div className="navbar">
            <ul className="ul_nav">
                <li><h2 className="store_title">-Aethernum-</h2></li>
                <li className="li_nav " ><a href="" className="li_nav">Acerca de</a></li>
                <li className="li_nav " ><a href="" className="li_nav">Tienda</a></li>
                <li className="li_nav " ><a href="" className="li_nav">Lo Nuevo</a></li>
                <div className="carticon">
                <CarWidget></CarWidget> 
                
                </div>                
                
            </ul>
        </div>
        </>

    )
}