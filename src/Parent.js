import React from "react";
import Child from './Child.js'


class Parent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {userName: null, passNameToChild: null, showChild: false}
        this.handleChange = this.handleChange.bind(this);
        this.passValue = this.passValue.bind(this);
    }
    handleChange(event) {
        console.log("Event values =>"+ event.target.value)
        this.setState({userName: event.target.value});
    }
    passValue(){
        this.setState({showChild:true, passNameToChild: this.state.userName});
    }

    render() {
        
        return (
            <div>
                <div>
                    <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                </div>
                <button type="button" onClick={this.passValue}>Submit</button>
                {
                this.state.showChild && 
                    ( <Child name={this.state.passNameToChild} value="sathya" /> )
                }
                
            </div>
        )
        
    }
}

export default Parent;