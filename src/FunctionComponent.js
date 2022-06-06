import React, {useEffect, useRef, useState} from 'react';

export const FunctionComponent = () => {
    const [value, setValue] = useState('initial value');
    const timeout = useRef(undefined);

    useEffect(() => {
        timeout.current = setTimeout(() => {
            setValue('new value');
        }, 3000);

        return () => {
            clearTimeout(timeout.current);
        };
    }, []);

    return (
        <h1>{value}</h1>
    );
}




