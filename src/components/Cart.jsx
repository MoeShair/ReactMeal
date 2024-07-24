import Modal from "./UI/Modal.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import {currencyFormatter} from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart({}){
    const cartCTX = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const cost = cartCTX.items.reduce((total, item)=>{
        return item.price * item.quantity + total
    },0)

    function handleCloseModal(){
        userProgressCtx.hideCart()
    }
    return(
        <Modal className='cart' open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCTX.items.map((item)=> <CartItem key={item} item={item}></CartItem>)}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cost)}</p>
            <p className='modal-actions'>
                <Button textOnly onClick={handleCloseModal}>Close</Button>
                <Button>Go to CheckOut</Button>
            </p>
        </Modal>
    )
}