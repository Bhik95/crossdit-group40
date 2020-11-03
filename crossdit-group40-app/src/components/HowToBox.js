import React, { Component } from 'react'

export default class HowToBox extends Component {
    render() {
        return (
            <div className="HowToBox">
                <div className="HowToBoxTop shadow">
                    {this.props.top}
                </div>
                <div className="HowToBoxBottom shadow">
                    {this.props.bottom}
                </div>
            </div>
        )
    }
}
