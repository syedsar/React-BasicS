import React, { Component } from 'react'

export class LifeCycleC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'syed'
        }
        console.log('Life Cycle C Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('Life cycle C getDerivedStateFromProps')
        return null;
    }

    shouldComponentUpdate(){
        console.log('Life cycle C shouldComponentUpdate')
        return true
    }

    componentDidMount(){
        console.log('Life Cycle C ComponentDidMount')
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle C getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Lifecycle C componentDidUpdate')
    }

    changeState =()=>{
        this.setState({name : 'Abdul'})
    }
    
    render() {
        console.log('Life Cycle C render')
        return (
            <div>
                Life Cycle C 
                <button onClick={this.changeState}>LifeCycle C</button>
                <LifeCycleD />
            </div>
        )
    }
}

class LifeCycleD extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'syed'
        }
        console.log('Life Cycle D Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('Life cycle D getDerivedStateFromProps')
        return null;
    }

    shouldComponentUpdate(){
        console.log('Life cycle D shouldComponentUpdate')
        return true
    }

    componentDidMount(){
        console.log('Life Cycle D ComponentDidMount')
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle D getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Lifecycle D componentDidUpdate')
    }
    
    render() {
        console.log('Life Cycle D render')
        return (
            <div>
                Life Cycle D
            </div>
        )
    }
}

export default LifeCycleC
