/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
// import "./../scss/main.scss";
import ReactBootstrap, {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Modal,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import $ from "jquery";

// image import
import logo from "../assets/images/logo.png";

//footer Social Icons
import twitter from "../assets/images/twitter.svg";
import telegram from "../assets/images/telegram.svg";
import instagram from "../assets/images/instagram.svg";
import discord from "../assets/images/discord.svg";

import wallet from "../assets/images/wallet.png";
import camp_logo from "../assets/images/camp_logo.png";

import external_link from "../assets/images/external-link-alt.svg";

import metaMask from "../assets/images/MetaMask_Fox 1.png";
import metaMask2 from "../assets/images/bsc-icon-logo-1-1 1.png";
import file_copy from "../assets/images/file_copy.png";

import list from "../assets/images/list.png";
import grid from "../assets/images/grid.png";

import gridimg1 from "../assets/images/gridimg1.png";
import gridimg2 from "../assets/images/gridimg2.png";
import gridimg3 from "../assets/images/gridimg3.png";
import gridimg4 from "../assets/images/gridimg4.png";

import heartIcon from "../assets/images/Vector.png";

import left_Icon from "../assets/images/left_Icon.png";
import right_Icon from "../assets/images/right_Icon.png";

import detail_Image from "../assets/images/detail_Image.png";
import Group_43 from "../assets/images/Group_43.png";
import { Link } from "react-router-dom";

// import * as ReactBootstrap from 'react-bootstrap';
function MarketPlaceGallery() {
  let baseUrl = process.env.PUBLIC_URL;

  const [show2, setShow2] = useState(false);
  const handleCloseCW = () => setShow2(false);
  const handleShowCW = () => setShow2(true);

  return (
    <>
      {/* header */}

      <header>
        <svg
          class="hero-section-squares bonfire-squares"
          width="374"
          height="377"
          viewBox="0 0 374 377"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.44"
            x="299.408"
            y="166"
            width="49"
            height="49"
            rx="8"
            transform="rotate(28.5362 299.408 166)"
            fill="#F7A419"
          />
          <rect
            opacity="0.11"
            x="332"
            y="15.9443"
            width="31.1068"
            height="31.1068"
            rx="8"
            transform="rotate(-26.6327 332 15.9443)"
            fill="#F7A419"
          />
          <rect
            opacity="0.44"
            x="264"
            y="332.103"
            width="49"
            height="49"
            rx="8"
            transform="rotate(-24.2215 264 332.103)"
            fill="#45271A"
          />
          <rect
            opacity="0.2"
            x="128.2"
            y="148"
            width="39.3014"
            height="39.3014"
            rx="8"
            transform="rotate(7.60333 128.2 148)"
            fill="#F06822"
          />
          <rect
            opacity="0.11"
            x="35"
            y="33.8452"
            width="29.9617"
            height="29.9617"
            rx="8"
            transform="rotate(-21.2212 35 33.8452)"
            fill="#F06822"
          />
          <rect
            opacity="0.55"
            x="120.836"
            y="285.086"
            width="39.7377"
            height="39.7377"
            rx="6.5"
            transform="rotate(-14.9477 120.836 285.086)"
            stroke="#872713"
            stroke-width="3"
          />
          <rect
            opacity="0.66"
            x="237.445"
            y="2.41672"
            width="27.6609"
            height="27.6609"
            rx="6.5"
            transform="rotate(16.1552 237.445 2.41672)"
            stroke="#D54217"
            stroke-width="3"
          />
          <rect
            opacity="0.11"
            x="1.7529"
            y="168.325"
            width="19.1973"
            height="19.1973"
            rx="6.5"
            transform="rotate(-10.7229 1.7529 168.325)"
            stroke="#D54217"
            stroke-width="3"
          />
          <rect
            opacity="0.11"
            x="223.837"
            y="131.38"
            width="19.1973"
            height="19.1973"
            rx="6.5"
            transform="rotate(-75 223.837 131.38)"
            stroke="#D54217"
            stroke-width="3"
          />
        </svg>
        <Navbar bg="" expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <Link to="/">
                {" "}
                <img src={logo} />{" "}
              </Link>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav className="my-2  my-lg-0" navbarScroll>
                <Nav.Link href="#action1">Cozy That</Nav.Link>
                <Nav.Link href="#action2">Whitepaper</Nav.Link>
                <Nav.Link href="#action3">Chart</Nav.Link>
                <Nav.Link href="#action4">FAQ</Nav.Link>
                {/* <Nav.Link href="#action5">Contacts</Nav.Link>
                                <Nav.Link href="#action6">Docs</Nav.Link> */}
                {/* <NavDropdown title="Roadmap" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown> */}
              </Nav>

              <div className="d-flex ">
                <a href="#" className="numCamp">
                  {" "}
                  <img src={camp_logo} /> 00.00.00.00
                </a>{" "}
                <a href="#" class="theme_btn" onClick={handleShowCW}>
                  <img src={wallet} /> Connect wallet
                </a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <section class="detail_page mt-5">
        <div class="container">
          <div className="Incontainer">
            <div class="divFlex">
              <div className="row">
                <div className="col-md-6">
                  <div class="img_border">
                    <div className="imgCon">
                      {" "}
                      <img src={detail_Image} />
                    </div>
                    <div class="detailOfferSec">
                      <div class="detailOfferTop">
                        <div class="detailNumSec">
                          <h4 class="head4">300.09 BNB</h4>
                          <h6 class="head6">0.27 USD</h6>
                        </div>

                        <button class="MOffer">Offer</button>
                      </div>
                      <button class="buyB detP_btn">Buy this NFT </button>
                      <p class="buthisNFT">
                        Buy CAMPFIRE on FireSwap{" "}
                        <a href="">
                          <img src={external_link} />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="flex_contentBox">
                    <h4>NFT name</h4>
                    <div class="boxDetail">
                      <p>Rarity: ULTRA RARE</p>
                      {/* <p><img src={heartIcon}/> 1192</p> */}
                    </div>

                    <div class="creatorDetails">
                      <p>Creator/owned by :</p>
                      <div class="copySec">
                        <div class="copyImgSec">
                          <img src={Group_43} />
                        </div>
                        <a href="#" class="copyLink">
                          93872jgcjgcjg89809809{" "}
                          <img src={file_copy} class="copyImg" />{" "}
                        </a>
                      </div>
                    </div>

                    <div class="tab_cont">
                      <div class="tabs">
                        <div class="tabby-tab">
                          <input
                            type="radio"
                            id="tab-1"
                            name="tabby-tabs"
                            checked
                          ></input>
                          <label for="tab-1">Description</label>
                          <div class="tabby-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever Lorem Ipsum is
                              simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry's
                              standard dummy text ever Lorem Ipsum is simply
                              dummy text of the printing.
                            </p>
                          </div>
                        </div>

                        <div class="tabby-tab">
                          <input
                            type="radio"
                            id="tab-2"
                            name="tabby-tabs"
                          ></input>
                          <label for="tab-2">Transaction History</label>
                          <div class="tabby-content scrollable">
                            <table width="100%" className="tabTable">
                              <tbody>
                                <tr>
                                  <th>
                                    <p>93872jgc</p>
                                    <button className="transfer">Sell</button>
                                  </th>
                                  <th>
                                    <p>93872jgc</p>
                                    <span>owner</span>
                                  </th>
                                  <th>
                                    <p>93872jgc</p>
                                    <span>TX</span>
                                  </th>
                                  <th>
                                    <p>0,022 BNB</p>
                                    <span>1 minute ago</span>
                                  </th>
                                </tr>

                                <tr>
                                  <td>
                                    <p>93872jgc</p>
                                    <button className="buy">Buy</button>
                                  </td>
                                  <td>
                                    <p>93872jgc</p>
                                    <span>owner</span>
                                  </td>
                                  <td>
                                    <p>93872jgc</p>
                                    <span>TX</span>
                                  </td>
                                  <td>
                                    <p>0,022 BNB</p>
                                    <span>1 minute ago</span>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <p>93872jgc</p>
                                    <button className="buy">Buy</button>
                                  </td>
                                  <td>
                                    <p>93872jgc</p>
                                    <span>owner</span>
                                  </td>
                                  <td>
                                    <p>93872jgc</p>
                                    <span>TX</span>
                                  </td>
                                  <td>
                                    <p>0,022 BNB</p>
                                    <span>1 minute ago</span>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <p>93872jgc</p>
                                    <button className="transfer">Sell</button>
                                  </td>
                                  <td>
                                    <p>93872jgc</p>
                                    <span>owner</span>
                                  </td>
                                  <td>
                                    <p>93872jgc</p>
                                    <span>TX</span>
                                  </td>
                                  <td>
                                    <p>0,022 BNB</p>
                                    <span>1 minute ago</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div class="tabby-tab">
                          <input
                            type="radio"
                            id="tab-3"
                            name="tabby-tabs"
                          ></input>
                          <label for="tab-3">Offers</label>
                          <div class="tabby-content scrollable">
                            <table width="100%" className="tabTable tb2">
                              <tbody>
                                <tr>
                                  <th>
                                    <p>93872jgc</p>
                                  </th>
                                  <th>
                                    <span>0.05 BNB</span>
                                  </th>
                                  <th>
                                    <span>05.09.2021</span>
                                  </th>
                                  <th>
                                    <button className="transfer">
                                      In progress
                                    </button>
                                  </th>
                                </tr>

                                <tr>
                                  <th>
                                    <p>93872jgc</p>
                                  </th>
                                  <th>
                                    <span>0.05 BNB</span>
                                  </th>
                                  <th>
                                    <span>05.09.2021</span>
                                  </th>
                                  <th>
                                    <button className="transfer">
                                      In progress
                                    </button>
                                  </th>
                                </tr>

                                <tr>
                                  <th>
                                    <p>93872jgc</p>
                                  </th>
                                  <th>
                                    <span>0.05 BNB</span>
                                  </th>
                                  <th>
                                    <span>05.09.2021</span>
                                  </th>
                                  <th>
                                    <button className="transfer">
                                      In progress
                                    </button>
                                  </th>
                                </tr>

                                <tr>
                                  <th>
                                    <p>93872jgc</p>
                                  </th>
                                  <th>
                                    <span>0.05 BNB</span>
                                  </th>
                                  <th>
                                    <span>05.09.2021</span>
                                  </th>
                                  <th>
                                    <button className="transfer">
                                      In progress
                                    </button>
                                  </th>
                                </tr>

                                <tr>
                                  <th>
                                    <p>93872jgc</p>
                                  </th>
                                  <th>
                                    <span>0.05 BNB</span>
                                  </th>
                                  <th>
                                    <span>05.09.2021</span>
                                  </th>
                                  <th>
                                    <button className="transfer">
                                      In progress
                                    </button>
                                  </th>
                                </tr>

                                <tr>
                                  <th>
                                    <p>93872jgc</p>
                                  </th>
                                  <th>
                                    <span>0.05 BNB</span>
                                  </th>
                                  <th>
                                    <span>05.09.2021</span>
                                  </th>
                                  <th>
                                    <button className="transfer">
                                      In progress
                                    </button>
                                  </th>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>
      </section>

      <Modal show={show2} onHide={handleCloseCW}>
        <Modal.Body>
          <Modal.Header closeButton>
            {/* <Modal.Title>Modal title</Modal.Title> */}
          </Modal.Header>
          <div class="makeOverMain">
            <div class="makeModalSec">
              <div class="makeModalInner">
                <div class="modalOfferSec">
                  <div class="discSec bgCol">
                    <img src={metaMask} className="imgS" />
                    <h5 class="head6">Meta Mask</h5>
                    <p>Connect to your MetaMask wallet</p>
                  </div>

                  <div class="discSec bgCol">
                    <img src={metaMask2} className="imgS" />
                    <h5 class="head6">Meta Mask</h5>
                    <p>Connect to your MetaMask wallet</p>
                  </div>

                  <div class="discSec bgCol">
                    <img src={metaMask} className="imgS" />
                    <h5 class="head6">Meta Mask</h5>
                    <p>Connect to your MetaMask wallet</p>
                  </div>

                  <div class="discSec bgCol">
                    <img src={metaMask2} className="imgS" />
                    <h5 class="head6">Meta Mask</h5>
                    <p>Connect to your MetaMask wallet</p>
                  </div>

                  <div class="discSec bgCol">
                    <img src={metaMask} className="imgS" />
                    <h5 class="head6">Meta Mask</h5>
                    <p>Connect to your MetaMask wallet</p>
                  </div>

                  <div class="discSec bgCol">
                    <img src={metaMask2} className="imgS" />
                    <h5 class="head6">Meta Mask</h5>
                    <p>Connect to your MetaMask wallet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MarketPlaceGallery;
