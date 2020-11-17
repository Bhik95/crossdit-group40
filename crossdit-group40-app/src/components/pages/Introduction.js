import React, { Component } from 'react';
import HeaderBar from '../layout/HeaderBar';
import FooterBar from '../layout/FooterBar';
import HowToBox from '../HowToBox';

export class Introduction extends Component {

    constructor(props) {
        super(props);
    
        // Necessario per accedere al corretto valore di `this` all'interno della callback
        this.addExpectationButton = this.addExpectationButton.bind(this);
      }

    state = {
        expectations: [
            [
                "How to handle difficult situations in the workplace",
                "How to behave if you get sick",
                "How unions work in Denmark"
            ],
            [
                "What to do if your rights are violated",
                "How to deal with and prevent errors in the workplace",
                "How you can practice your religion in Denmark"
            ],
            [
                "What is expected of me as an employee",
                "What a healthy work environment entails",
                "How to best prepare for a job interview"
            ],
            [
                "How gender equality works in the workplace",
                "What it means to be a good colleague",
                "How the different industries work"
            ]
        ],
        states: {}
      };
    
        addExpectationButton(){
            this.addExpectation(document.getElementById("customExpectation").value);
        };

      // Add Todo
      addExpectation = text => {
          if(this.state.expectations.length == 0){
            this.setState({expectations: [[text]]});
          }
          else{
            var newExpectations = this.state.expectations;
            if(this.state.expectations[this.state.expectations.length - 1].length == 3){
                newExpectations[this.state.expectations.length] = [text];
            }
            else{
                newExpectations[this.state.expectations.length - 1][newExpectations[this.state.expectations.length - 1].length] = text;
            }
            this.setState({expectations: newExpectations});
          }
      };

      toggleExpectationButton(text){
          var newStates = this.state.states;
            if(this.state.states[text] === undefined || this.state.states[text] === false){
                newStates[text] = true;
            }
            else{
                newStates[text] = false;
            }
            this.setState({states: newStates});
      }

    render() {

        var expectationRows = (
            
            this.state.expectations.map(function(row, i) {
                return (
                    <tr>
                    {row.map(function(item, ii){
                        return <td><button className={this.state.states[item] === undefined || this.state.states[item] === false ? "MultipleOptionButton" : "MultipleOptionButton2"} onClick={() => this.toggleExpectationButton(item)}><b>{item}</b></button></td>;
                    }.bind(this))}
                    </tr>
                )
            }.bind(this))
            
        );

        return (
            <div>
                <div className="MainDiv">
                    <HeaderBar/>
                    <div className="TheSeedBoxParent">
                        <div className="TheSeedBox">
                            <h1 className="TheSeedText">The Seed</h1>
                            <span className="TheSeedText">Cultivates the good match</span>
                        </div>
                        <img src="/imgs/Introduction/waving3_cut.png" width="100%"/>
                    </div>
                    {/*Intro Video Section */}
                    <div className="Section">
                        <h1 className="Merriweather">Welcome to<br/>The Seed</h1>
                        <img src="/imgs/line.svg" alt="" width="196px" height="16px"/>
                        <div className="float-container-2">
                            <div className="float-child-left-2">
                                <p>The Seed is a digital tool designed to match you to your new job. You have to go through different courses about the danish labour market, and create a profile about yourself. With that information, we can match you with your new job.</p>
                                <p>Click on the introduction video to learn more about how The Seed is working.</p>
                            </div>
                            <div className="float-child-right-2">
                                <iframe src="https://explee.com/embed/video/0p845jd?" width="640" height="360" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
                            </div>
                        </div>
                    </div>
                
                    {/*Jorney Section */}
                    <div className="Section">
                        <h1 className="Merriweather">Your journey at<br/>The Seed</h1>
                        <img src="/imgs/line.svg" alt="" width="196px" height="16px"/>
                        <div className="Div33Percent">
                            <p>The steps visualised below are the different steps you are going to go through on the Seed platform. To learn more about each step, go to the “How to” sections.</p>
                        </div>
                        <div className="VideoFrame">
                            <img src="/imgs/Introduction/UserJourney.svg"/>
                        </div>
                    </div>
                    
                    {/*How to section*/}
                    <div className="Section">
                        <h1 className="Merriweather">How To...</h1>
                        <img src="/imgs/line.svg" alt="" width="256px" height="64px"/>
                        <div className="Div40Percent">
                        <p>The Seed strives to assist you in finding employment in Denmark. You have to create a profile and complete some courses, so we can match you with a job. Read the following boxes to learn more about how to do the different steps.</p>
                        </div>
                        <table className="HowToTable">
                            <tr>
                                <td>
                                    <HowToBox
                                        version = "v1"
                                        imgLink="/imgs/HeaderBar/MyProfile.svg"
                                        title="Create a profile"
                                        subtitle="You have to create a personal profile."
                                        body={
                                            (
                                                <div>
                                                    <p>In order to assist you to the best of our abilities, we will ask you questions about who you are and what sort of experience you have within the jobmarket.</p>
                                                    <p>Your profile will act as your CV where your different skills and work experience are presented. Based on your different skills and experience, we can use this information to match you with a job looking for the competencies you possess.</p>
                                                    <p>Having gotten to know you better, you can begin the courses on the platform.</p>
                                                </div>
                                            )
                                        }
                                    />
                                </td>
                                <td>
                                    <HowToBox
                                        version = "v2"
                                        imgLink="/imgs/Introduction/CoursesDark.svg"
                                        title="Do the course"
                                        subtitle="You have to complete 13 courses"
                                        body={
                                            (
                                                <div>
                                                    <p>The courses are about work customs in Denmark and how to deal with different situations that might arise throughtout your future employment in Denmark.</p>
                                                    <p>Your different answers to the courses will be be used to match you to a specific job, together with your profile. You have to go through individual courses concerning topics like social norms and culture.</p>
                                                    <p>Furthermore you have to go through indutry courses concerning topics like Work Tempo and Productivity and Workplace Safety</p>
                                                </div>
                                            )
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <HowToBox
                                        version = "v2"
                                        imgLink="/imgs/Introduction/JobMatchesDark.svg"
                                        title="Get a job match"
                                        subtitle="When you get a job match"
                                        body={
                                            (
                                                <div>
                                                    <p>Based on your profile and you answers in the different courses, we will then find you industry matches that we believe will suit you the best.</p>
                                                    <p>You will get a message when we have found a job match for you, and you will the be able to apply for the job.</p>
                                                </div>
                                            )
                                        }
                                    />
                                </td>
                                <td>
                                    <HowToBox
                                        version = "v1"
                                        imgLink="/imgs/Introduction/interview.svg"
                                        title="Prepare for an interview"
                                        subtitle="Prepare for a job interview"
                                        body={
                                            (
                                                <div>
                                                    <p>When you have gotten a job match we will assist you in applying to the open job positions within the industry.</p>
                                                    <p>We have tools to help you prepare for a job interview and learn about showing motivation</p>
                                                    <p>We will help you prepare for a specific interview and go over questions the employeer might ask you based on your profile Learn how to argue why you are a good match</p>
                                                </div>
                                            )
                                        }
                                    />
                                </td>
                            </tr>
                        </table>
                    </div>
                    
                    <div className="Section">
                        <h1 className="Merriweather">What do you expect to take away<br/>from your Seed journey?</h1>
                        <img src="/imgs/line.svg" alt="" width="256px" height="16px"/>
                        <div className="Div33Percent marginVertical64px">
                            <p>What are your learning goals by doing this course? By identifying your goals and takeaways for the courses, it helps you to stay motivated and focused. Furthermore, we are using your expectacions to create new content to help you achieve succes.</p>
                            <p>You can choose multiple options.</p>
                        </div>

                        <table className="HowToTable">
                            {expectationRows}
                            <tr>
                                <td></td>
                                <td>
                                    <div id="floatContainer" class="float-container">
                                        <label for="customExpectation" className="myLabel">Add your own</label>
                                        <input id="customExpectation" className="myLabel" type="text"/>
                                    </div>
                                </td>
                                <td style={{"text-align": "left"}}><button onClick={this.addExpectationButton}>Add</button></td>
                            </tr>
                        </table>
                    </div>

                    {/*Summary Section*/}
                    <div className="Section">
                        <h1 className="Merriweather">Now you are ready!</h1>
                        <img src="/imgs/line.svg" alt="" width="256px" height="16px"/>
                        <div className="Div33Percent marginVertical64px">
                            <p>
                                Now you are ready to start your learning journey at The Seed. We encourage you to start by creating your profile, before you take the different courses.<br/><br/>Good luck!
                            </p>
                        </div>
                        <div className="marginVertical64px">
                            <button className="BigSeedButton">Create a profile</button>
                        </div> 
                    </div>
                </div>
                <FooterBar/>
            </div>
        )
    }
}

export default Introduction
