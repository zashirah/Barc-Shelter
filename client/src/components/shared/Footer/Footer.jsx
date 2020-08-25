import React from "react";
import "./Footer.css";

import ReactDOM from "react-dom";
import { SocialMediaIconsReact } from "social-media-icons-react";
import MapFunction from "../Map/MapFunction";

const Footer = () => {
  return (
    <footer>
      <div className="col">
        <ul>
          <h4>LOCATION</h4>
          <li>
            <MapFunction />
          </li>
          <li>
            {/* <p>
              Brooklyn Animal Resource Coalition (BARC) is a 501(c)(3)
              nonprofit, no-kill, privately run animal shelter located in
              Williamsburg, Brooklyn. Since opening our doors in 1987, we have
              been able to provide care to animals through dedicated volunteers,
              our pet supply business, and private donations. EIN #: 11-3179166
              Registered Pet Rescue #: RR103
            </p> */}
          </li>
        </ul>
      </div>
      <div className="col">
        <ul>
          <h5>MAILING ADRESS</h5>
          <li>697 Grand St #921</li>
          <li>Brooklyn, NY 11211</li>
          <h5>GIVE US A CALL</h5>
          <li>718-486-7489</li>
        </ul>
      </div>
      <div className="col">
        <ul>
          <h5>HOURS</h5>
          <h6>Adoption Hours:</h6>
          <li>Tues - Sat: </li>
          <li>12 PM - 4PM </li>

          <li>BARC Shelter is closed</li>
          <li>Sunday & Monday </li>
        </ul>
      </div>

      <div className="col">
        <ul>
          <h2>ADOPT</h2>
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
          <h6>"Life is great, animals make it better."</h6>
        </ul>
      </div>
      <div className="col">
        <ul>
          <h3>CONTACT US</h3>
          {/* Donate button */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
