import logoImg from '../assets/logo.jpg'
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header({}){
    const cartCTX = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const totalCartItems = cartCTX.items.reduce((total, item)=>{
        return total + item.quantity
    },0)
    function handleShowCart(){
        userProgressCtx.showCart()
    }
    return(
      <>
          <header id='main-header'>
              <div id='title'>
                  <img src={logoImg} alt='sds'/>
                  <h1>ReactFood</h1>
              </div>
              <nav>
                  <Button textOnly onClick={handleShowCart}> Cart ({totalCartItems})</Button>
              </nav>
          </header>
      </>
    );
}