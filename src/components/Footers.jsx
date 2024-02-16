import { useCart } from "../hooks/useCart";
import useFilters from "../hooks/useFilters";

export default function Footers() {
    const { filters } = useFilters();

    const { cart } = useCart()

    return(
        <footer>
            <h4>Prueba técnica de React
                <span>@@@@</span>
            </h4>
            <h5>Sopping cart con useContext y useReducer</h5>
        </footer>
    );
}