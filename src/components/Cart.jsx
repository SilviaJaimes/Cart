import { useId } from "react";
import './Cart.css';
import { useCart } from "../hooks/useCart";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
    return (
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong> -${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export default function Cart() {
    const cartCheckboxId = useId();

    const { cart, clearCart, addToCart } = useCart();

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                añadir
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem 
                            key={product.id} 
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>limpiar</button>
            </aside>
        </>
    );
}