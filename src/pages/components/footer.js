/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import logo from "./../../assets/images/logo.png";

//footer Social Icons
import twitter from "./../../assets/images/twitter.svg";
import telegram from "./../../assets/images/telegram.svg";
import instagram from "./../../assets/images/instagram.svg";
import discord from "./../../assets/images/discord.svg";

const Footer = () => {
  return (
    <footer>
      <div class="footer_border2"></div>

      <div class="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div class="footer_cont">
              <div className="row">
                <div className="col-md-2">
                  <div class="left_sec footer_logo">
                    <img src={logo} />
                  </div>
                </div>

                <div className="col-md-7">
                  <div class="dflex">
                    <div class="left_sec">
                      <ul class="footer_ul">
                        <div class="footer-column-title">Campfire</div>
                        <li>
                          <a href="#">Cozy Chat</a>
                        </li>
                        <li>
                          <a href="#">Whitepaper</a>
                        </li>
                        <li>
                          <a href="#">Roadmap</a>
                        </li>
                        <li>
                          <a href="#">Chart</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                        <li>
                          <a href="#">Docs</a>
                        </li>
                      </ul>
                    </div>

                    <div class="left_sec">
                      <ul class="footer_ul">
                        <div class="footer-column-title">Campfire</div>
                        <li>
                          <a href="#">Antispam Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms of Use</a>
                        </li>
                        <li>
                          <a href="#">Cookie Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 ">
                  <ul class="footer_ul">
                    <div class="footer-column-title">Stay up to date</div>
                    <p>Follow us on social media</p>
                    <div class="social">
                      <a href="#">
                        <img src={twitter} />{" "}
                      </a>
                      <a href="#">
                        <img src={telegram} />{" "}
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <div className="footer-bottom">
        <div class="container">
          <p>
            <strong>Campfire Token</strong> © All Rights Reserved.
          </p>
          <p>
            {" "}
            The information provided on Campfire Token website does not
            constitute investment advice, financial advice, trading advice, or
            any other sort of advice and you should not treat any of the
            website's content as such. Campfire Token team does not recommend
            that any cryptocurrency should be bought, sold, or held by you. Do
            conduct your own due diligence and consult your financial advisor
            before making any investment decisions. By purchasing Campfire
            Token, you agree that you are not purchasing a security or
            investment and you agree to hold the team harmless and not liable
            for any losses or taxes you may incur. You also agree that the team
            is presenting the token “as is” and is not required to provide any
            support or services. You should have no expectation of any form from
            Campfire Token and its team. Although Campfire is a community driven
            token for social networking and not a registered digital currency,
            the team strongly recommends that citizens in areas with government
            bans on Crypto do not purchase it because the team cannot ensure
            compliance with your territory's regulations. Always make sure that
            you are in compliance with your local laws and regulations before
            you make any purchase.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
