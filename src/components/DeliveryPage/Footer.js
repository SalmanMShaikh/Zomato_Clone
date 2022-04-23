import React from "react";
import "../../css/footer.css";

function Footer() {
  return (
    <section className="footer ">
      <div className="footerInnerContainer max-width">
        <div className="zomatoLogoContainer">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="zomatoLogo"
            className="zomatoLogo"
          />
        </div>

        <div className="footerFlexRow">
          <div className="footerFlexColumn">
            <h3 className="footerHeadings">About Zomato</h3>
            <p>Who We Are</p>
            <p>Blog</p>
            <p>Work With Us</p>
            <p>Investor Relations</p>
            <p>Report Fraud</p>
          </div>
          <div className="footerFlexColumn">
            <h3 className="footerHeadings"> Zomaverse</h3>
            <p>Zomato</p>
            <p>Feeding India</p>
            <p>Hyperpure</p>
            <p>Zomaland</p>
          </div>

          <div className="footerFlexColumn">
            <h3 className="footerHeadings"> For Restaurants </h3>
            <p>Partner With Us</p>
            <p>Apps For You</p>
            <h3 className="footerHeadings">For Enterprises</h3>
            <p>Zomato For Work</p>
          </div>
          <div className="footerFlexColumn">
            <h3 className="footerHeadings"> Learn More </h3>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
