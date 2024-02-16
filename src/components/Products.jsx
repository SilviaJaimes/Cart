import { useCart } from "../hooks/useCart";

export default function Products({products}) {
    const { addToCart, cart, removeFromCart } = useCart();

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return(
        <main>
            <ul>
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return(
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div className="">
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button onClick={() => isProductInCart 
                                    ? removeFromCart(product) 
                                    : addToCart(product)}
                                >
                                    {
                                        isProductInCart 
                                            ? "quitar" 
                                            : "añadir"
                                    }
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}