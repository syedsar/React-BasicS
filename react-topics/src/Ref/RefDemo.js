import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.inputRef = React.createRef();

        //older Method using call back
        this.cbRef = null;
        this.setCbRef = element =>{
            this.cbRef = element
        }

    }

    componentDidMount(){
        this.inputRef.current.focus();
        if(this.cbRef){
            this.cbRef.focus();
        }
    }

    clickHandler = ()=>{
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <button onClick={this.clickHandler}>alert</button>
                <input type='text' ref={this.setCbRef}/>
            </div>
        )
    }
}

export default RefDemo
