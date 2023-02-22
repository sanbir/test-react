import React from 'react';

export const List = () => {
    const values = ['a', 'b', 'c', 'd', 'e'];
    const listItems = values.map((value) =>
        <li key={value}>
            {value}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}




