import React, { Component, PureComponent } from 'react'
import MemoComponent from './MemoComponent'
import ReactPureComponent from './ReactPureComponent'
import RegularComponent from './RegularComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'syed'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({name:'syed'})
        },2000)
    }
    
    render() {
        console.log('*******parent component******')
        return (
            <div>
                parentComponent {this.state.name}
                <RegularComponent name={this.state.name} />
                <ReactPureComponent name={this.state.name}/>
                <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent




