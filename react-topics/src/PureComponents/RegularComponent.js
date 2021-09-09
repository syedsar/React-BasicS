import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {
        console.log('regular component')
        return (
            <div>
                RegularComponent {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
