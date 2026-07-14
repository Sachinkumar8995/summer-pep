import { createContext } from "react";
export const userContext = createContext();

function ContextProvider( { children } ) {
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}