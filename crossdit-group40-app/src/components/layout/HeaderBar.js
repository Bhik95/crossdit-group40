import React, { Component } from 'react'
import {Link} from 'react-router-dom';

function HeaderBar(){
    return (
        <header>
            <ul className="HeaderBar shadow">
                <li><a href="#"><img src="/imgs/HeaderBar/theSeed.png" alt="" className="BigHeaderBarIcon"/><span><b>THE SEED</b></span></a></li>
                <li><a href="#"><img src="/imgs/HeaderBar/MyProfile.svg" alt="" className="BigHeaderBarIcon"/><span><b>MY PROFILE</b></span></a></li>
                <li><a href="#"><img src="/imgs/HeaderBar/JobMatches.svg" alt="" className="BigHeaderBarIcon"/><span><b>JOB MATCHES</b></span></a></li>
                <li><a href="#"><img src="/imgs/HeaderBar/Courses.svg" alt="" className="BigHeaderBarIcon"/><span><b>COURSES</b></span></a></li>
                <li style={{"float":"right"}}><a class="active" href="#"><img src="/imgs/HeaderBar/logout.svg" alt="" className="SmallHeaderBarIcon"/></a></li>
                <li style={{"float":"right"}}><a class="active" href="#"><img src="/imgs/HeaderBar/settings.svg" alt="" className="SmallHeaderBarIcon"/></a></li>
            </ul>
        </header>
    )
}
export default HeaderBar
