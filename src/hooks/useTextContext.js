import { useContext } from "react";
import { TextContext } from "../contexts/textContext";


export const useTextContext = () => {
    const context = useContext(TextContext);
    console.log('useContext:', context);
    if(!context) {
        throw Error ("useTextContext must be used inside an TextContextProvider");
    }
    return context;
}
