import React, { PureComponent } from 'react'

export class ReactPureComponent extends PureComponent {
    render() {
        console.log('pure component')
        return (
            <div>
                PureComponent {this.props.name}
            </div>
        )
    }
}

export default ReactPureComponent
