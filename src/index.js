import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from './App';


class A extends  Component {

    render() {
        return (
            <App/>
        );
    }
}

ReactDOM.render(<A />, document.getElementById('root'));
 