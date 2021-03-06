import React, { Component } from 'react';
import phoneicon from "../../assets/phone-icon-img.png";
import emailicon from "../../assets/email-icon-img.png";
import footerbtmimg from "../../assets/footer-btm-img.png";
import './index.css';
class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailValue: 'example@example.com',
      submitValue: 'Absenden',
    }
  }

  render() {
    const { submitValue } = this.state;
    return (
      <div className="footer-SectionFive">
         <div className="SectionFive">
           <div className="container">
             <div className="row">
               <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 SectionFive-left-content">
                 <p className="SectionFive-title">
                   Uns Kontaktieren
                 </p>
                 <p className="SectionFive-des">
                   Wir werden uns mit Ihnen in kürze In Kontakt setzen.
                   Oder Rufen Sie uns an, für eine schnellere verbindung.
                 </p>
                 <p className="sectionfive-contact sectionfive-phone">
                     <img src={phoneicon}  alt="phoneicon" />040 / 18 05 17 55</p>
                 <p className="sectionfive-contact sectionfive-email"><img src={emailicon}  alt="emailicon" />contact@peats.de</p>
               </div>
               <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 footer-form">
                 <input type="text" name="Email" placeholder="E-mail" className="footer-email" />
                 <input type="submit" value={submitValue} className="footer-email-btn" />
               </div>
             </div>
           </div>
         </div>
         <div className="footer-btm">
            <img src={footerbtmimg}  alt="footerbtmimg" />
         </div>
      </div>

    );
  }
}

export default ContactUs;