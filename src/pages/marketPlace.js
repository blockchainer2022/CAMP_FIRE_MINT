/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
// import "./../scss/main.scss";
import ReactBootstrap, {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Alert,
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

import list from "../assets/images/list.png";
import grid from "../assets/images/grid.png";

import gridimg1 from "../assets/images/gridimg1.png";
import gridimg2 from "../assets/images/gridimg2.png";
import gridimg3 from "../assets/images/gridimg3.png";
import gridimg4 from "../assets/images/gridimg4.png";

import heartIcon from "../assets/images/Vector.png";

import left_Icon from "../assets/images/left_Icon.png";
import right_Icon from "../assets/images/right_Icon.png";

import metaMask from "../assets/images/metaMask.png";
import metaMask2 from "../assets/images/bsc-icon-logo-1-1 1.png";

import detail_Image from "../assets/images/detail_Image.png";
import Group_43 from "../assets/images/Group_43.png";
import { Link } from "react-router-dom";

// import * as ReactBootstrap from 'react-bootstrap';
function MarketPlaceGallary() {
  let baseUrl = process.env.PUBLIC_URL;

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

      <section class="marketplace_section_starts mt-5">
        <div class="container">
          <div className="Incontainer">
            <div class="row ">
              <div class="col-lg-8">
                <div class="heading_forSale">
                  <h2>
                    Marketplace<span>.</span>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="btn_listG">
                  <div className="value">
                    <h2>
                      <span>VOLUME</span>1476.73
                    </h2>
                  </div>
                  <div className="value">
                    <h2>
                      <span>FLOOR PRICE</span>0.229
                    </h2>
                  </div>
                </div>
              </div>

              <div class="col-lg-12">
                <div className="border-bottomD"> </div>

                <div className="headingSelect">
                  <select id="For sale" name="For sale">
                    <option value="For sale">Sort By</option>
                    <option value="Low to high">Low to high</option>
                    <option value="High to low">High to low</option>
                  </select>

                  <div class="alert" id="panel">
                    <span
                      class="closebtn"
                      onClick={function myfun(e) {
                        e.target.parentElement.remove();
                      }}
                    >
                      {" "}
                      &times;
                    </span>
                    Low to high
                  </div>
                  <div class="alert" id="panel2">
                    <span
                      class="closebtn"
                      id="panel2"
                      onClick={function myfun(e) {
                        e.target.parentElement.remove();
                      }}
                    >
                      &times;
                    </span>
                    Low to high
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <Link to="/market-place-gallery">
                    <img src={gridimg1} />
                  </Link>
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg2} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg3} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg4} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row ">
              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <Link to="/market-place-gallery">
                    <img src={gridimg1} />
                  </Link>
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg2} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg3} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg4} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row ">
              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <Link to="/market-place-gallery">
                    <img src={gridimg1} />
                  </Link>
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg2} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg3} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg4} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row ">
              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <Link to="/market-place-gallery">
                    <img src={gridimg1} />
                  </Link>
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg2} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg3} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg4} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row ">
              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <Link to="/market-place-gallery">
                    <img src={gridimg1} />
                  </Link>
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg2} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg3} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>
                    {/* onClick={handleShow} */}
                    <button class="buyB">Buy</button>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="gridBox">
                  <img src={gridimg4} />
                  <div class="contentP">
                    <div class="boxDetail">
                      <h6>Bloomin Crypto</h6>
                      <p>
                        1.25 <span>B CAMPFIRE</span>
                      </p>
                    </div>

                    <button class="buyB" onClick={handleShow}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="pagination">
                <ul>
                  <li>
                    <a href="#">
                      <img src={left_Icon} />
                    </a>
                  </li>

                  <li class="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>

                  <li>
                    <a href="#">
                      <img src={right_Icon} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div class="makeOverMain">
            <div class="makeModalSec">
              <div class="makeModalInner wahe">
                <h2 class="head2">Make offer - Genesis Hero: 8017</h2>
                <div class="make_offer">
                  <div class="discSec">
                    <h5 class="head6">Your balance</h5>
                    <h6 class="head6">0 BNB</h6>
                  </div>
                  <div class="discSec">
                    <h5 class="head6">Your current offer</h5>
                    <h6 class="head6">0 BNB</h6>
                  </div>
                  <div class="discSec">
                    <h5 class="head6">Offer</h5>
                    <h6 class="head6">Min offer: 0.5 BNB</h6>
                  </div>
                </div>
                <form>
                  <input type="text" class="modalInput"></input>
                  <p class="para">You must offer at least 0.5 BNB</p>
                </form>
                <div class="btnWrap">
                  <button class="buyB">Buy</button>
                  <button class="MOffer">Make offer</button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

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

export default MarketPlaceGallary;
