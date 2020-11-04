import React, { Component } from 'react';
import HeaderBar from '../layout/HeaderBar';
import HowToBox from '../HowToBox';

export class Introduction extends Component {
    render() {
        return (
            <div className="MainDiv">
                <HeaderBar/>
                <div className="TheSeedBoxParent">
                    <div className="TheSeedBox">
                        <h1 className="TheSeedText">The Seed</h1>
                    </div>
                    <img src="/imgs/Introduction/waving3_cut.png" className="shadow" width="100%"/>
                </div>
                {/*Intro Video Section */}
                <div className="Section">
                    <h1>Welcome to the Seed</h1>
                    <img src="/imgs/line.svg" alt=""/>
                    <p>The Seed is a new way of getting hired.</p>
                    <p>Click on the introduction video to learn about how the seed is working.</p>
                    <div className="VideoFrame shadow">
                        <iframe src="https://explee.com/embed/video/0p845jd?" width="640" height="360" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
                    </div>
                </div>
            
                {/*Jorney Section */}
                <div className="Section">
                    <h1>Your job journey at The Seed</h1>
                    <img src="/imgs/line.svg" alt=""/>
                    <p>The steps visualised below are the elements that The Seed are helping you go through.</p>
                    <br/>
                    <div className="VideoFrame shadow">
                        <img src="/imgs/Introduction/UserJourney.svg"/>
                    </div>
                </div>
                
                {/*How to section*/}
                <div className="Section">
                    <h1>How To...</h1>
                    <img src="/imgs/line.svg" alt="" width="256px" height="64px"/>
                    <p>The Seed strives to assist you in finding employment in Denmark.<br/>You have to create a profile and complete some courses, so we can match you with a job.<br/>Read the following boxes to learn more about how to do the different steps.</p>
                    <HowToBox top=
                        {
                            <h2>Create a profile</h2>
                        }
                        bottom=
                        {
                            <div>
                                <p><b>You have to complete 13 courses</b></p>
                                <p>The courses are about work customs in Denmark and how to deal with different situations that might arise throughtout your future employment in Denmark.</p>
                                <p>Your different answers to the courses will be be used to match you to a specific job, together with your profile.</p>
                                <p>You have to go through individual courses concerning topics like social norms and culture.</p>
                                <p>Furthermore you have to go through indutry courses concerning topics like Work Tempo and Productivity and Workplace Safety.</p>
                            </div> 
                        }
                    />
                    <HowToBox top=
                        {
                            <h2>Doing the courses</h2>
                        }
                        bottom=
                        {
                            <div>
                                <p><b>You have to complete 13 courses</b></p>
                                <p>The courses are about work customs in Denmark and how to deal with different situations that might arise throughtout your future employment in Denmark.</p>
                                <p>Your different answers to the courses will be be used to match you to a specific job, together with your profile.</p>
                                <p>You have to go through individual courses concerning topics like social norms and culture.</p>
                                <p>Furthermore you have to go through indutry courses concerning topics like Work Tempo and Productivity and Workplace Safety.</p>
                            </div> 
                        }
                    />
                    <HowToBox top=
                        {
                            <h2>Get a job match</h2>
                        }
                        bottom=
                        {
                            <div>
                                <p><b>When you get a job match</b></p>
                                <p>Based on your profile and you answers in the different courses, we will then find you industry matches that we believe will suit you the best.</p>
                                <p>You will get a message when we have found a job match for you, and you will the be able to apply for the job.</p>
                            </div>
                        }
                    />
                    <HowToBox top=
                        {
                            <h2>Prepare for an interview</h2>
                        }
                        bottom=
                        {
                            <div>
                                <p><b>Prepare for a job interview </b></p>
                                <p>When you have gotten a job match we will assist you in applying to the open positions within the industry.</p>
                                <p>We have tools to help you prepare for a job interview and learn about showing motivation.</p>
                                <p>We will help you prepare for a specific interview and go over questions the employeer might ask you based on your profile.</p>
                                <p>Learn how to argue why you are a good match.</p>
                            </div> 
                        }
                    />
                </div>
                
                {/*Summary Section*/}
                <div className="Section">
                    <h1>Now you are ready!</h1>
                    <img src="/imgs/line.svg" alt=""/>
                    <div className="YouAreReady">
                        <img src="/imgs/Introduction/lady pointing.svg" alt=""/>
                        <button>Create a profile</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Introduction
