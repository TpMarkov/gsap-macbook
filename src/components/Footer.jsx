import React from "react";
import {footerLinks} from "../../constants/index.js";

const Footer = () => {
  return <footer>
    <div className={"info"}>
      <p>
        More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966
      </p>
      <img src="/logo.svg" alt="logo"/>

      <hr/>

      <div className={"link"}>
        <p>Copyright © 2025 Apple Inc. All rights reserved</p>
        <ul>
          {footerLinks.map(({label, link}) => (
              <li key={label}>
                <a href={link}>
                  {label}
                </a>
              </li>
          ))}
        </ul>
      </div>
    </div>


  </footer>;
};
export default Footer;
