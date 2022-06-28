import { useState } from "react";

export default function useCounter(initialState=10) {

    const [state,setState] = useState(initialState);

    const increment = () => {
        setState(state+1);
    }

    
    const reset = () => {
        setState(initialState);
    }

    const decrement = () => {
        setState(state-1);
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}