import React, { Component } from 'react'
import withCounter from './withCounter'

export class ClickCounter extends Component {

    render() {
        const {count, countHandler, name} = this.props;
        return (
            <div>
                <button onClick={countHandler}>{name} you cllicked {count} time</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,2)
