import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import {CartContextProvider} from "./store/CartContext.jsx";
import {UserProgressProvider} from "./store/UserProgressContext.jsx";
import Cart from "./components/Cart.jsx";

function App() {
    return (
        <>
            <UserProgressProvider>
                <CartContextProvider>
                    <Header/>
                    <Meals/>
                    <Cart />
                </CartContextProvider>
            </UserProgressProvider>
        </>
    );
}

export default App;
