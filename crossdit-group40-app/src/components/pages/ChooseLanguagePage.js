import React, { Component } from 'react'

export class ChooseLanguagePage extends Component {
    render() {
        return (
            <div className="ChooseLanguagePageBackground">
                <div className="ChooseLanguagePageBox">
                    <div className="margin8px">
                        <h2>Choose Language</h2>
                        <p className="greyText">We recommend that you choose your mother tongue. The language chosen here will be used throughout the platform.</p>
                        <div id="floatContainer" class="float-container">
                            <label for="language" className="myLabel">Choose language</label>
                            <select in="language" className="myLabel" name="language">
                                <option value="english">English</option>
                                <option value="arabic">Arabic</option>
                                <option value="kurdish">Kurdish</option>
                                <option value="urdu">Urdu</option>
                                <option value="persian">Persian</option>
                                <option value="vietnamese">Vietnamese</option>
                                <option value="hindi">Hindi</option>
                            </select>
                        </div>
                        <a href="/intro"><button className="TextButtonGreen toTheRight">SAVE</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChooseLanguagePage
