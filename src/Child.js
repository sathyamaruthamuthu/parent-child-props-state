import React from "react";

class Child extends React.Component {
    constructor(props){
        super()
        //const { firstName , lastName } = props.data

        //console.log("User =>"+firstName+"-"+lastName)
    }

    render() {
        const {name = "", value = ""} = this.props
        return (
            <div>
                <h1>Displaying value from Child Component <p>{name} - {value}</p></h1>
                {name +"vikki"}
            </div>
        )
    }
    
}

export default Child;

