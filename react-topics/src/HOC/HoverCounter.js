import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounter extends Component {

   
    
    render() {
        const {count,countHandler,name} = this.props
        return (
            <div>
                <h2 onMouseOver={countHandler}>{name} You hovered {count} times</h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter,5)
