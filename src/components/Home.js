import React from 'react';
import Form from './Form';
import './Home.css'

function Home() {
    return (
        <React.Fragment>

            <div className="section beige text-center default-text">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h1 className="title bold">Make event management a breeze</h1>
                        <p className="subtitle light">ACME Events Inc. makes making beautiful event landing pages a DIY adventure</p>
                        <a href="#form"><button className="button button-large secondary pill">BOOK A DEMO</button></a>
                    </div>
                </div>
            </div>

            <div className="section  default-text">
                <div className="row">
                    <div className="col-4">
                        <img src="img1.png" alt="image_1" width="100%" />
                    </div>
                    <div className="col">
                        <h1 className="title bold">Make your ticket holders happy</h1>
                        <p>A beautiful little sunset. Talent is a pursued interest. That is to say, anything you practice you can do. This is probably the greatest thing that's ever happened in my life. These things happen automatically. All you have to do is just let them happen.</p>
                        <p>Just let go - and fall like a waterfall. Nothing's gonna make your husband or wife madder than coming home and having a snow covered dinner. Just pretend you are a whisper floating accross a mountain. Zip. That easy.</p>
                        <b className="custom-underline">View full feature list</b>
                    </div>
                </div>
            </div>

            <div className="section gray text-center  default-text">
                <iframe title="sampleVideo" width="560" height="315" src="https://www.youtube.com/embed/a3ICNMQW7Ok" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="section">
                <h1 id="form" className="subtitle bold default-text">Book a demo</h1>
                <div className="row default-text">
                    <div className="col-7">
                        <Form></Form>
                    </div>
                    <div className="col offset-1">
                        <img className="vertical-center" src="img2.png" alt="image_2" width="100%" />
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Home;
