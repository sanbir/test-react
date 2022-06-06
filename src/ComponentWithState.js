import React, {useCallback, useState} from 'react';

export const ComponentWithState = () => {
    const [value, setValue] = useState('initial value');

    return (
        <>
            <DisplayComponent1 value={value}/>
            <DisplayComponent2 value={value}/>
            <InputComponent value={value} setValue={setValue}/>
        </>
    );
}

export const DisplayComponent1 = (props) => {
    return (
        <div>{props.value + " 1"}</div>
    );
}

export const DisplayComponent2 = (props) => {
    return (
        <div>{props.value + " 2"}</div>
    );
}

export const InputComponent = (props) => {
    const onChange = useCallback(
        event => props.setValue(event.target.value),
        []
    );

    return (
        <input value={props.value} onChange={onChange}/>
    );
}






