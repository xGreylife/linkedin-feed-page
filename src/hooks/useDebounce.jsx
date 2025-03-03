import { useEffect, useState } from "react"
import { DEBOUNCE_DELAY } from "../constants/timeConstants";

export const useDebounce = (value, delay=DEBOUNCE_DELAY) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDebouncedValue(value)
        }, delay);

        return ()=>clearTimeout(timeout);
    }, [value, delay]);

    return debouncedValue;
}