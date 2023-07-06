import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin, faPinterest, faInstagram} from '@fortawesome/free-brands-svg-icons';
function Footer() {
  const Icon = {
    display:"flex",
    rowDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
    width: "100%",
    marginRight: "30px",
    fontSize: "23px"
  }
  const footer = {
    display:"flex",
    rowDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
    width: "36%"
  }
  const Other = {
    display:"flex",
    rowDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
    width: "100%"
  }
  return (
    <div className="foot">
      <div className="container">
        <div className="Footer">
    <div className="item">
<div>
  <h6>Categories</h6>
  <h4>Graphics & Design</h4>
  <h4>Digital Marketing</h4>
  <h4>Writing & Translation</h4>
  <h4>Video & Animation</h4>
  <h4>Programming & Tech</h4>
  <h4>Data</h4>
  <h4>Business</h4>
  <h4>Lifestyle</h4>
  <h4>Photography</h4>
  <h4>Sitemap</h4>
</div>
<div>
  <h6>About</h6>
  <h4>Careers</h4>
  <h4>Press & News</h4>
  <h4>Partnerships</h4>
  <h4>Privacy Policy</h4>
  <h4>Terms of Service</h4>
  <h4>Intellectual Property Claims</h4>
  <h4>Investor Relations</h4>
  <h4>Contact Sales</h4>
</div>
<div>
  <h6>Support</h6>
  <h4>Help & Support</h4>
  <h4>Trust & Safety</h4>
  <h4>Selling on Fiverr</h4>
  <h4>Buying on Fiverr</h4>
</div>
<div>
  <h6>Community</h6>
  <h4>Customer Success Stories</h4>
  <h4>Community Hub</h4>
  <h4>Forum</h4>
  <h4>Events</h4>
  <h4>Blog</h4>
  <h4>Influencers</h4>
  <h4>Affiliates</h4>
  <h4>Podcast</h4>
  <h4>Invite a Friend</h4>
  <h4>Become a Seller</h4>
  <h4>Community Standards</h4>
</div>
<div>
  <h6>More From Fiverr</h6>
  <h4>Fiverr Business</h4>
  <h4>Fiverr Pro</h4>
  <h4>Fiverr Logo Maker</h4>
  <h4>Fiverr Guides</h4>
  <h4>Get Inspired</h4>
  <h4>Fiverr Select</h4>
  <h4>ClearVoice
Content Marketing</h4>
  <h4>Fiverr Workspace
Invoice Software</h4>
  <h4>Learn
Online Courses</h4>
  <h4>Working Not Working</h4>
</div>
  </div>
    </div>
    <div className="footer">
      <div className="title">
      <h5 style={{fontSize: "28px"}}><b>fiverr<span style={{color: "rgb(189, 189, 189)"}}>.</span></b></h5>
      <h6>© Fiverr International Ltd. 2023</h6>
      </div>
    <div style={footer}>
      <div style={Icon}>
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faPinterest} />
      <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div style={Other}>
      <FontAwesomeIcon icon={faGlobe} /><h5>English</h5>
      <h5 style={{marginLeft: "30px"}}>HK$ HKD</h5>
      </div>
    </div>
  </div>
  </div>
    </div>
  );
}

export default Footer;