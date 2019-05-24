import React, { Component } from "react";

export class Form extends Component {

    constructor (props) {
        super(props)

        this.state = {
            newCityName2: ''
        }
    }

    handlenewCityName2Change = (event) => {
        this.setState ({
         newCityName2 : event.target.value   
        })

    }

    


render () {
    return (
        <form>
            <div>

            <label> newCityName2</label>
            <input type = 'text' value= {this.state.newCityName2}  onChange = {this.handlenewCityName2Change }/>
                </div>
        </form>
 

    )
  }

}

export default Form