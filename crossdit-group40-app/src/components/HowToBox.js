import React, { Component } from 'react'

export default class HowToBox extends Component {
    render() {
        return (
            <div className={"HowToBox "+this.props.version}>
                <img src={this.props.imgLink} width="64px" height="64px"/>
                <h2>{this.props.title}</h2>
                <img src={this.props.version==="v1" ? "/imgs/line.svg" : "/imgs/lineDark.svg"} alt="" width="256px" height="16px"/>
                <p><b>{this.props.subtitle}</b></p>
                {this.props.body}
            </div>
        )
    }
}
