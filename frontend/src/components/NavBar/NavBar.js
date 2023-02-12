import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import TennisRacketAndBalls from"../../assets/tennisRacketAndBalls.jpg";
import Account from "../../assets/account.png";
import AccountHover from "../../assets/accountHover.png";

function NavBar() {
  return (
      <div className="navbarContainer">
        <div className="leftContainer">
          <Link to="/" className="links">
            <img
              className="tennisClubLogo"
              src={TennisRacketAndBalls}
              alt="TennisRacketAndBalls"
            />
            <p>HOME</p>
          </Link>
          <ul className="container">
            <li>
              <Link to="/rentacourt" className="links">
                RENT A COURT
              </Link>
            </li>
            <li>
              <Link to="/competitions" className="links">
              COMPETITIONS
              </Link>
            </li>
            <li>
              <Link to="/coaches" className="links">
                COACHES
              </Link>
            </li>
            <li>
              <Link to="/equipment" className="links">
                 EQUIPMENT
              </Link>
            </li>
          </ul>
        </div>
        <div className="rightContainer">
        <div className="Login">
        <Link to="/login" className="links">
          <div className="boxAccount">
            <div className="iconNormal">
              <img src={Account} alt="account" />
            </div>
            <div className="iconHover">
              <img src={AccountHover} alt="" />
            </div>
            LOG IN
          </div>
        </Link>
        </div>
        <div className="Register">
        <Link to="/register" className="links">
          <div className="boxAccount">
            <div className="iconNormal">
              <img src={Account} alt="account" />
            </div>
            <div className="iconHover">
              <img src={AccountHover} alt="" />
            </div>
            REGISTER
          </div>
        </Link>
        </div>
        </div>
      </div>
    );
}

export default NavBar;
