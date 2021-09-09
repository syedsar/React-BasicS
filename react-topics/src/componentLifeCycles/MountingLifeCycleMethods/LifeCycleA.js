import React, { Component } from 'react'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'syed'
        }
        console.log('Life Cycle A Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('Life cycle A getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('Life Cycle A ComponentDidMount')
    }
    
    render() {
        console.log('Life Cycle A render')
        return (
            <div>
                Life Cycle A 
                <LifeCycleB />
            </div>
        )
    }
}

class LifeCycleB extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'syed'
        }
        console.log('Life Cycle B Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('Life cycle B getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('Life Cycle B ComponentDidMount')
    }
    
    render() {
        console.log('Life Cycle B render')
        return (
            <div>
                Life Cycle B
            </div>
        )
    }
}

export default LifeCycleA
