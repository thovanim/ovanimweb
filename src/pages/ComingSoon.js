import React from 'react';
import SEO from '../common/SEO';
import { Link } from 'react-router-dom';
import { FaEnvelopeOpen } from "react-icons/fa";
import Countdown from 'react-countdown';
import { useState } from 'react';
import db from './Firebase';
import firebase from 'firebase/compat/app';
import { Alert } from 'bootstrap';
import styled from 'styled-components';

const ComingSoon = () => {
const [input, setInput] = useState("");
const [message, setMessage] = useState("");
const Alert = styled.p`
    position: relative;
    padding: 0.4rem;
    margin: 0.5rem;
    color:#292930;
    text-align: center;
    font-size: 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0,2);
    border-radius: 100px;
    background: rgba(0, 255, 0, 0.1);
    backdrop-filter: blur(10px);
    z-indez: 3;
    `;
const inputHandler = (e) => {
    setInput(e.target.value);
};
const submitHandler = (e) => {
    e.preventDefault();
    if(input){
        console.log(input);
        // add to firebase
        db.collection("emails").add({
            email: input,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
        setMessage("Thank you, we will keep you posted!")
        setTimeout(()=> {
             setMessage("");
        }, 3000)
    }
};

    const Completionist = () => <span>Our Site is Ready to Go!</span>;

    const SetCountdownTime = "2023-01-10T17:00:00";

    const CountDownRender = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <Completionist />; 
        } else {
          return (
              <div className="countdown">
                  <div className="countdown-section">
                    <span className="countdown-number">{days}</span>
                    <span className="countdown-unit">Days</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-number">{hours}</span>
                    <span className="countdown-unit">Hours</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-number">{minutes}</span>
                    <span className="countdown-unit">Minutes</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-number">{seconds}</span>
                    <span className="countdown-unit">Seconds</span>
                  </div>
              </div>
          )
        }
      }


    return (
        <>
        <SEO title="an eye for security" />
            <main className="main-wrapper">
                <div className="coming-soon-area onepage-screen-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="site-logo">
                                <Link to={process.env.PUBLIC_URL + "/"} className="logo-light"><img src={process.env.PUBLIC_URL + "/images/logo-light.svg"} alt="Logo" /></Link>
                                <Link to={process.env.PUBLIC_URL + "/"} className="logo-dark"><img src={process.env.PUBLIC_URL + "/images/logo-dark.svg"} alt="Logo" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8">
                            <div className="content">
                            <h2 className="title">Our new website is on its way</h2>
                            <p><b>Ovanim</b> is a computer vision intelligence company transforming enterprise security operations to prevent security incidents before they happen.</p>
                            <Countdown date={SetCountdownTime} zeroPadTime={3} renderer={CountDownRender}></Countdown>
                            <form onSubmit={submitHandler}>
                                <div className="input-group">
                                    <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                    <input type="email" className="form-control" placeholder="Email address" onChange={inputHandler} value={input} />
                                    <button className="subscribe-btn" type="submit">Notify Me</button>
                                </div>
                            </form>
                            {message && <Alert>{message}</Alert>}
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="thumbnail">
                                <img src={process.env.PUBLIC_URL + "/images/others/coming-soon.gif"} alt="Coming Soon" style={{borderRadius: "100px", float: "right"}} />
                            </div>
                        </div>
                        </div>
                    </div>
                    <ul className="shape-group-8 list-unstyled">
                        <li className="shape shape-2">
                            <img src={process.env.PUBLIC_URL + "/images/others/bubble-28.png"} alt="Bubble" />
                        </li>
                        <li className="shape shape-3">
                            <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" style={{paddingRight: "20em" , filter: "brightness(0.3)"}} />
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default ComingSoon;