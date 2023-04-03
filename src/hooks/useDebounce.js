import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const setValue = setTimeout(() => {
            setDebounce(value);
        }, delay);
        return () => clearTimeout(setValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounce;
};

export default useDebounce;
