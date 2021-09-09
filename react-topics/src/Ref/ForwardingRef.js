import React, { Component } from 'react'

export class ForwardingRef extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.inputRef = React.createRef();
    }

    clickHandler = ()=>{
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <Child ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

const Child = React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})

export default ForwardingRef
