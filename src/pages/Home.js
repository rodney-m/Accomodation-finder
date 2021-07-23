import React from "react";
import "./Home.css";
import { Link, useHistory} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import RateReviewIcon from "@material-ui/icons/RateReview";
import Footer from "../components/Footer";
import CommentIcon from "@material-ui/icons/Comment";
import Button from "@material-ui/core/Button";
import houseOwnerImg from "../images/houseOwner.jpg"

function Home() {
  let history = useHistory();

  const onListHouse = (e) => {
    e.preventDefault()
    history.push("/landlords")
  }

  return (
    <div className="Home">
      <div className="showcase">
        <h1>Find your next home</h1>
        <p>Your student housing search ends here</p>
        <Link to="/login">
          <Button variant="contained" color="primary">
            LogIn / SignUp
          </Button>
        </Link>
      </div>

      <div className="center">
        <h2>Book your accommodation fast</h2>
        <p>
          Take the hassle out of securing your student housing for the best
          years of your life.
        </p>
      </div>

      <div className="house-owner">
        <div className="text">
          <h3>Are you a house owner ?</h3>
          <p>List your house with us and increase your reach</p>
          <Button 
            variant="contained" 
            color="primary" onClick={onListHouse}>
            List A House 
          </Button>
        </div>
        <div className="image">
          <img src={houseOwnerImg} alt="" />
        </div>
      </div>

      <div className="center">
        <h2>Modern way of booking for accomodation</h2>
      </div>

      <div className="bottom">
        <div className="services">
          <div className="service">
            <div className="text">
              <HomeIcon color="primary" style={{ fontSize: 40 }} />
              <h3>Right Place. Right Price</h3>
              <p>
                We help you find the exact accommodation to fit your needs.
                Choose from lots of quality accommodations.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="text">
              <ContactSupportIcon color="primary" style={{ fontSize: 40 }} />
              <h3>End-to-End Support</h3>
              <p>
                We will help you in sourcing, booking and the paperwork required
                in the process. No need to worry about a thing!
              </p>
            </div>
          </div>
          <div className="service">
            <div className="text">
              <RateReviewIcon color="primary" style={{ fontSize: 40 }} />
              <h3> Our properties have reviews and ratings</h3>
              <p>
                There are reviews and ratings from students who have lived in
                the properties.
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
            <div className="logo"></div>
            <div className="text">
              <CommentIcon color="primary" style={{ fontSize: 40 }} />
              <p>
                We help you find the exact accommodation to fit your needs.
                Choose from lots of quality accommodations.
              </p>
              <h3>T Mukwazhe - 2nd year CS student</h3>
            </div>
          </div>
          <div className="review">
            <div className="logo"></div>
            <div className="text">
              <CommentIcon color="primary" style={{ fontSize: 40 }} />
              <p>
                We will help you in sourcing, booking and the paperwork required
                in the process. No need to worry about a thing!
              </p>
              <h3> Keith C - 2nd year CS student</h3>
            </div>
          </div>
          <div className="review">
            <div className="logo"></div>
            <div className="text">
              <CommentIcon color="primary" style={{ fontSize: 40 }} />

              <p>
                There are reviews and ratings from students who have lived in
                the properties.
              </p>
              <h3> Lionnel T - 2nd year CS student</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
