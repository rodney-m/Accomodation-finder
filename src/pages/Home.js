import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react"
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Footer from '../components/Footer';
import CommentIcon from '@material-ui/icons/Comment';



function Home() {
    const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

    return (
        <div className="Home">
            <div className="showcase">
                <h1>Find your next home</h1>
                <p>Your student housing search ends here</p>
                <div  className="ctas">
                    <Link to="/apply">
                      <span onClick={loginWithRedirect}>LogIn / SignUp</span>

                    </Link>
                </div>  
                <h3> User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>      
                {isAuthenticated && (
                <pre style= {{textAlign : 'start'}}>{JSON.stringify(user, null, 3)}</pre>
            )}        
            </div>

            <div className="center">
                <h2>Book your accommodation fast</h2>
                <p>Take the hassle out of securing your student housing for the best years of your life.</p>
            </div>

            <div className="bottom">
                
            
                <div className="services">
                      <div className="service">
                        <div className="text">
                            <HomeIcon color="primary" style={{ fontSize: 40 }}/>
                            <h3>Right Place. Right Price</h3>
                            <p>We help you find the exact accommodation to fit your needs. Choose from lots of quality accommodations.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="text">
                            <ContactSupportIcon color="primary" style={{ fontSize: 40 }}/>
                            <h3>End-to-End Support</h3>
                            <p>
                            We will help you in sourcing, booking and the paperwork required in the process. No need to worry about a thing!
                            </p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="text">
                            <RateReviewIcon color="primary" style={{ fontSize: 40 }}/>
                            <h3> Our properties have reviews and ratings</h3>
                            <p>
                                There are reviews and ratings from students who have lived in the properties.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="center">
                <h2>Reviews</h2>
                <p>Take a peek at the reviews.</p>
            </div>

            <div className="div3">
                    <div className="reviews">
                         <div className="review">
                                 <div className="logo">

                                 </div>
                        <div className="text">
                            <CommentIcon color="primary" style={{ fontSize: 40 }}/>
                            <p>We help you find the exact accommodation to fit your needs. Choose from lots of quality accommodations.</p>
                            <h3>T Mukwazhe - 2nd year CS student</h3>
                        </div>
                    </div>
                    <div className="review">
                        <div className="logo">

                        </div>
                        <div className="text">
                            <CommentIcon color="primary" style={{ fontSize: 40 }}/>
                            <p>
                            We will help you in sourcing, booking and the paperwork required in the process. No need to worry about a thing!
                            </p>
                            <h3> Keith C - 2nd year CS student</h3>
                        </div>
                    </div>
                    <div className="review">
                        <div className="logo">

                        </div>
                        <div className="text">
                            <CommentIcon color="primary" style={{ fontSize: 40 }}/>
                            
                            <p>
                                There are reviews and ratings from students who have lived in the properties.
                            </p>
                            <h3> Lionnel T - 2nd year CS student</h3>
                        </div>
                    </div>
                </div>


            </div>


            <Footer/>
        </div>
    )
}

export default Home
