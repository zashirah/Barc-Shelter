import React from "react";
import "./Footer.css";

import ReactDOM from "react-dom";
import { SocialMediaIconsReact } from "social-media-icons-react";
import MapFunction from "../Map/MapFunction";
import SmallButton from "../SmallButton/SmallButton";

const Footer = () => {
  return (
    <footer clasName="footer-layout">
      <div className="col">
        <ul className="ul-layout">
          <h4 className="h4-layout">LOCATION</h4>
          <li className="li-layout10">
            <MapFunction />
          </li>
          <li className="p-layout">
            <p className="p-layout">
              Brooklyn Animal Resource Coalition (BARC) is a 501(c)(3)
              nonprofit, no-kill, privately<br></br> run animal shelter located
              in Williamsburg, Brooklyn. Since opening our <br></br>doors in
              1987,have been able to provide care to animals through dedicated{" "}
              <br></br> volunteers, our pet supply business,and private
              donations. EIN #: 11-3179166
              <br></br>
              Registered Pet Rescue #: RR103
            </p>
          </li>
        </ul>
      </div>
      <div className="col1">
        <ul className="ul-layout">
          <h5 className="h5-layout">MAILING ADRESS</h5>
          <li className="li-layout">697 Grand St #921</li>
          <li className="li-layout">Brooklyn, NY 11211</li>
          <h5 className="h5-layout2">GIVE US A CALL</h5>
          <li className="li-layout">718-486-7489</li>
        </ul>
      </div>
      <div className="col">
        <ul className="ul-layout">
          <h5 className="h5-layout">HOURS</h5>
          <h6 className="h6-layout">Adoption Hours:</h6>
          <li className="li-layout">Tues - Sat: </li>
          <li className="li-layout">12 PM - 4PM </li>

          <li className="li-layout2">BARC Shelter is closed</li>
          <li className="li-layout3">Sunday & Monday </li>
        </ul>
      </div>

      <div className="col">
        <ul className="ul-layout">
          <h2 className="h2-layout">ADOPT</h2>
          <div className="row">
            <SocialMediaIconsReact
              icon="facebook"
              borderWidth="0"
              iconSize="5"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(214,95,6,1)"
              roundness="50%"
              url="https://facebook.com/your-facebook-handle"
            />

            <SocialMediaIconsReact
              icon="mail"
              borderWidth="0"
              iconSize="5"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(214,95,6,1)"
              roundness="50%"
              url="https://mail.com/your-mail-handle"
            />

            <SocialMediaIconsReact
              icon="twitter"
              borderWidth="0"
              iconSize="5"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(214,95,6,1)"
              roundness="50%"
              url="https://twitter.com/your-twitter-handle"
            />

            <SocialMediaIconsReact
              icon="instagram"
              borderWidth="0"
              iconSize="5"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(214,95,6,1)"
              roundness="50%"
              url="https://instagram.com/your-twitter-handle"
            />
          </div>
          <h6 className="h6-layout1">
            "Life is great, animals make it better."
          </h6>
        </ul>
      </div>
      <div className="col">
        <ul className="ul-layout">
          <h3 className="h3-layout">CONTACT US</h3>
          <SmallButton buttonText={"Donate"} buttonColor={"gold"} />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
