import React, { Component } from "react";
import AuthenticationService from '../../authentication/AuthenticationService'
import './Login.css';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'Andreivan',
            password: '',
            hasLoginFailed: false,
            showSuccesMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        //console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked() {
        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then( (response) => {
                AuthenticationService.registerSuccessfulLoginJwt(this.state.username, response.data.token)
                this.props.history.push(`/dashboard`)                
            }).catch( () => {
                this.setState({ showSuccesMessage: false })
                this.setState({ hasLoginFailed: true })
            })
    }

    render() {
        return (
            <div>
                <h3>Welcome to the Asset App</h3>

                <div className="form-group">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccesMessage && <div>Login Sucessful</div>}
                    <label>Username</label> 
                    <input type="text" className="form-control" name="username" value={this.state.username} placeholder="Enter username" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"  className="form-control"  name="password" value={this.state.password} placeholder="Enter password" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                        <label className="custom-control-label" htmlFor="customCheck">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.loginClicked}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="https://www.google.com/">password?</a>
                </p>
            </div>
        //     <div className="text-center">
        //     <h1 >Login</h1>
        //     <div >
        //         {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials>
        //         <ShowLoginSuccesMessage showSuccesMessage={this.state.showSuccesMessage}></ShowLoginSuccesMessage> */}
        //         {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
        //         {this.state.showSuccesMessage && <div>Login Sucessful</div>}
        //         User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
        //         Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
        //         <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
        //     </div>
        // </div>
        );
    }
}

export default LoginForm