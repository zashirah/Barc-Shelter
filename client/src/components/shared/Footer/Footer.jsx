import React from "react";
import "./Footer.css";
import MapFunction from "../Map/MapFunction";

import ReactDOM from "react-dom";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Footer = () => {
  return (
    <footer>
      <div className="col">
        <h5>LOCATION</h5>
        <ul>
          <li>
            <MapFunction />
          </li>
          <li>
            <h6>
              Brooklyn Animal Resource Coalition (BARC) is a 501(c)(3)
              nonprofit, no-kill, privately run animal shelter located in
              Williamsburg, Brooklyn. Since opening our doors in 1987, we have
              been able to provide care to animals through dedicated volunteers,
              our pet supply business, and private donations. EIN #: 11-3179166
              Registered Pet Rescue #: RR103
            </h6>
          </li>
        </ul>
      </div>
      <div className="col">
        <h5>MAILING ADRESS</h5>
        <ul>
          <li>697 Grand St #921</li>
          <li>Brooklyn, NY 11211</li>
        </ul>
        <h5>GIVE US A CALL</h5>
        <ul>
          <li>718-486-7489</li>
        </ul>
      </div>
      <div className="col">
        <h5>HOURS</h5>
        <h6>Adoption Hours</h6>
        <ul>
          <li>Tues - Sat: </li>
          <li>12 PM - 4PM </li>

          <li>BARC Shelter is closed</li>
          <li>Sunday & Monday </li>
        </ul>
      </div>
      <div className="col">
        <h2>ADOPT</h2>
        <SocialMediaIconsReact
          icon="facebook"
          url="https://facebook.com/your-facebook-handle"
        />
        ,
        <SocialMediaIconsReact
          icon="mail"
          url="https://mail.com/your-mail-handle"
        />
        ,
        <SocialMediaIconsReact
          icon="twitter"
          url="https://twitter.com/your-twitter-handle"
        />
        ,
        <SocialMediaIconsReact
          icon="instagram"
          url="https://instagram.com/your-twitter-handle"
        />
        <p>"Life is great, animals make it better."</p>
      </div>
      <div className="col">
        <h3>CONTACT US</h3>
        {/* Donate button */}
      </div>
      <div className="footer">
        <p className="footer-copyright">
          &copy; BARC Shelter {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
