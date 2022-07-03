import { useState } from "react";

export default function useCounter(initialState=10) {

    const [counter,setState] = useState(initialState);

    const increment = () => {
        setState(counter+1);
    }

    
    const reset = () => {
        setState(initialState);
    }

    const decrement = () => {
        setState(counter-1);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}