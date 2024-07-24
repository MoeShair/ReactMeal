import Modal from "./UI/Modal.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import {currencyFormatter} from "../util/formatting.js";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Checkout(){
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const cost = cartCtx.items.reduce((total, item) => {
        return item.price * item.quantity + total
    }, 0)

    function handleClose(){
        userProgressCtx.hideCheckout()
    }
    function handleCheckout(event){
        event.preventDefault()
        const fd = new FormData(event.target)
        const customerData = Object.fromEntries(fd.entries())

        fetch('http://localhost:3000/orders',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData
                }
            })
        })
    }
    return(
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleCheckout}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cost)}</p>
                <Input label='Full Name' type='text' id='name'/>
                <Input label='E-Mail Address' type='email' id='email'/>
                <Input label='Street' type='text' id='street'/>
                <div className='control-row'>
                    <Input label='Postal Code' type='text' id='postal-code'/>
                    <Input label='City' type='text' id='city'/>
                </div>
                <p className='modal-actions'>
                    <Button textOnly onClick={handleClose}>Close</Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}