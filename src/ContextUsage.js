import React, {createContext, useContext, useCallback, useState} from 'react';
const MyContext = createContext();

export const ContextUsage = () => {
    const [text, setText] = useState('initial value');
    return (
        <MyContext.Provider value={{text, setText}}>
            <DisplayComponent1/>
            <DisplayComponent2/>
            <InputComponent/>
        </MyContext.Provider>
    );
}

export const DisplayComponent1 = () => {
    const {text} = useContext(MyContext);
    return (
        <div>{text + " 1"}</div>
    );
}
export const DisplayComponent2 = () => {
    const {text} = useContext(MyContext);
    return (
        <div>{text + " 2"}</div>
    );
}
export const InputComponent = () => {
    const {text, setText} = useContext(MyContext);
    const onChange = useCallback(event => setText(event.target.value), [setText]);
    return (
        <input value={text} onChange={onChange}/>
    );
}




