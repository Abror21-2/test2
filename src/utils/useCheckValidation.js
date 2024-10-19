import { useState } from "react";

export const useCheckValidation = (validationFunc) => {

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);


    if(!error && value.length > 0 && validationFunc(value)){
        setError(true);
    }else if(error && !validationFunc(value)) {
        setError(false);
    }

    return{
        value,
        error,
        setValue,
    }
}