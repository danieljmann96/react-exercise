import React, { Component } from 'react';
import Form from "react-bootstrap/es/Form";
import FormGroup from "react-bootstrap/es/FormGroup";
import FormControl from "react-bootstrap/es/FormControl";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import Button from "react-bootstrap/es/Button";
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {resp: "", un: "", pw: ""};
        this.doLogin = this.doLogin.bind(this);
        this.doLoginChangeUn = this.doLoginChangeUn.bind(this);
        this.doLoginChangePw = this.doLoginChangePw.bind(this);

    }
    doLoginChangeUn(e){
        this.setState({un: e.target.value});
    }
    doLoginChangePw(e){
        this.setState({pw: e.target.value});
    }
    doLogin(e){
        e.preventDefault();
        if(this.state.un === "abc" && this.state.pw === "xyz"){
            this.setState({resp: "Login successful"});
        }
        else{
            this.setState({resp: "Login unsuccessful"})
        }
    }
    render(){
        return(
            <div>
                <Form inline onSubmit={e => this.doLogin(e)}>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" placeholder="Username" onChange={e => this.doLoginChangeUn(e)}/>
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlinePassword">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password" placeholder="Password" onChange={e => this.doLoginChangePw(e)}/>
                    </FormGroup>{' '}
                    <Button type="submit">Login</Button>
                </Form>
                <h2>{this.state.resp}</h2>
            </div>
        )
    }
}