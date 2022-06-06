import React from 'react';

export class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'initial value'};
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({
                value: 'new value'
            });
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        return (
            <h1>{this.state.value}</h1>
        );
    }
}


