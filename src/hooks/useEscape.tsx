import { useEffect } from "react"

export const useEscape = ( key, action ) => {

    useEffect(() => {

        const onKeyup = (e: KeyboardEvent) => {

            if (e.key === key) action();
        };

        window.addEventListener("keyup", onKeyup);        
        return () => window.removeEventListener("keyup", onKeyup);
    }, [key, action]);
};