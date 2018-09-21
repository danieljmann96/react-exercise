import React, {Component} from 'react';
import Button from "react-bootstrap/es/Button";
export default class Timestable extends Component{
    constructor(props){
        super(props);
        this.state = {
            which: null, range: null
        }
    }
     render(){
        if(this.state.which === null && this.state.range === null) {
            let buttons = [];
            for(let i=1;i<101;i++){
                buttons[i-1] = <Button bsStyle="primary" onClick={() => this.setState({which: i})}>{i}</Button>
            }
            return(<div><h1>Which: </h1>{buttons}</div>)
        }
        else if(this.state.range === null) {
            let buttons = [];
            for(let i=1;i<101;i++){
                buttons[i-1] = <Button bsStyle="success" onClick={() => this.setState({range: i})}>{i}</Button>
            }
            return(<div><h1>Range: </h1>{buttons}</div>)
        }
        else{
            let i = this.state.which;
            let ress = [];
            for(let j = 1;j<=this.state.range;j++){
                ress[j-1] = <h3>{i + " x " + j + " = " + i*j}</h3>
            }
            return(<div>{ress}</div>)
        }
     }
 }