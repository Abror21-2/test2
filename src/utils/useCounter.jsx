import { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState(0);

    return {
        qiymat: count,
        qiymatOzgartirish: setCount
    }
}