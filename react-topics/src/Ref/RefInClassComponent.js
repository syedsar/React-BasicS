import React, { Component } from 'react'

export class RefInClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.compRef = React.createRef()
    }
    
    clickHandler =()=>{
        this.compRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input ref={this.compRef}/>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

class Input extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.inputRef = React.createRef()
    }

    focusInput = ()=>{
        this.inputRef.current.focus();
    }
    
    render(){
        return(
            <div>
                <input type='text' ref={this.inputRef} />
            </div>
        )
    }
}

export default RefInClassComponent
