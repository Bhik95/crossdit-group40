import React, { Component } from 'react'

export class LoginPage extends Component {
    render() {
        return (
            <div className="LoginBox">
                <h1 className="TheSeedText">The Seed</h1>
                <div id="floatContainer" class="float-container">
                    <label for="emailField" className="myLabel">Email *</label>
                    <input id="emailField" className="myLabel" type="text"/>
                </div>
                <div id="floatContainer" class="float-container">
                    <label for="passwordField" className="myLabel">Password *</label>
                    <input id="passwordField" className="myLabel" type="password"/>
                </div>
                <a href="/language"><button className="BigSeedButton toTheRight">Login</button></a>
            </div>
        )
    }
}

export default LoginPage
