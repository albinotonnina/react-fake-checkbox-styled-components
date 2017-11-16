import React, { Component } from 'react';

class Checkbox extends Component {

    render() {

        const checked = false;

        return (
            <div className="checkbox">
                {checked?'checked':'not checked'}
            </div>
        );
    }
}

export default Checkbox;
