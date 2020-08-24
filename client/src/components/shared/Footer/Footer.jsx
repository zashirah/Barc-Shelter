import React from "react";
import "./Footer.css";

import ReactDOM from "react-dom";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;
