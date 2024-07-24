import {currencyFormatter} from "../util/formatting.js";

export default function CartItem ({item}){
    return <li className='cart-item'>
        <p>
            {`${item.name} - ${item.quantity} x ${currencyFormatter.format(item.price)}`}
        </p>
        <p className='cart-item-actions'>
            <button>+</button>
            <span>{item.quantity}</span>
            <button>-</button>
        </p>
    </li>
}