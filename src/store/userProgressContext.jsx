import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
    showAdminPanel: () => {}
});

export function UserProgressContextProvider({children}) {

    const [userProgress, setUserProgress] = useState('');

    const showCart = ()=> {
        setUserProgress('cart');
    };
    const hideCart = ()=> {
        setUserProgress('');
    };

    const showCheckout = () => {
        setUserProgress('checkout');
    };

    const hideCheckout = () => {
        setUserProgress('');
    };

    const showAdminPanel = () => {
        setUserProgress('Admin');
    }

    const value = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
        showAdminPanel
    }

    console.log(value);

    return <UserProgressContext.Provider value={{...value}}>
        {children}
    </UserProgressContext.Provider>
}

export default UserProgressContext;