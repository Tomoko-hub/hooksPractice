import React, { useState } from 'react'
import { useEffect } from 'react';

const useLocalStorage = (key, intialValue) => {
    const [ value, setValue ] = useState(() =>{
        const jsonValue = window.localStorage.getItem(key);
        if (jsonValue !== null) return JSON.parse(jsonValue);

        return intialValue;
    });

    useEffect(()=> {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, setValue]);

    return [ value, setValue ];
};

export default useLocalStorage