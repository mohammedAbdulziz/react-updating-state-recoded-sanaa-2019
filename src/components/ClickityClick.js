// Code ClickityClick Component Here
import React, { Component } from 'react'

export class ClickityClick extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            click:false,
            adress:{
                phone:null,
                city:null,
                email:null
            },
            i:0
        }
    }
    stateMargebefore(){
        console.log(this.state);
        /* this.setState({adress:{
            phone:734553006,
            city:"NY",
            email:"mm@g.com"
        }}) */
        
    }
    btnState=(event)=>{
        if(event){
            this.setState({
            adress:{...this.state.adress,city:"NY"}})
            this.setState((previousState)=>{console.log(previousState.i); return {i:previousState.i+1}})
            this.setState((previousState)=>{return {click:!previousState.click}})
        }
        if(this.state.click){
            return 'is clicked'
        }
        if(!this.state.click){
            return 'is not clicked'
        }
        
    }
    render() {
        return (
            <div>
            <p>The Button {this.btnState()}</p>
            <button onClick={this.btnState}>Click</button>
            {this.stateMargebefore()}
            </div>
            )
        }
    }
    
    export default ClickityClick
    