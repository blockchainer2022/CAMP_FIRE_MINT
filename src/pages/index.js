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
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

import $ from "jquery";

// image import
import logo from "../assets/images/logo.png";
// import headerImg1 from '../assets/images/1.gif';
// import headerImg2 from '../assets/images/2.gif';

import headerImg1 from "../assets/images/banner_img1.gif";
import headerImg2 from "../assets/images/banner_img2.gif";

import statBannerI from "../assets/images/star_banner.png";
import groupLogo from "../assets/images/Group_logo.png";

import group_photo1 from "../assets/images/group_photo1.png";
import mintEgg from "../assets/images/mintEgg.png";
import logoc1 from "../assets/images/logoc1.png";
import logoc2 from "../assets/images/logoc2.png";
import logoc3 from "../assets/images/logoc3.png";

//campfireBoxImages
import campfireBoxImg1 from "../assets/images/campFireBoxImg1.png";
import campfireBoxImg2 from "../assets/images/campFireBoxImg2.png";
import campfireBoxImg3 from "../assets/images/campFireBoxImg3.png";
import campfireBoxImg4 from "../assets/images/campFireBoxImg4.png";

//collectible section img
import collectibleImg from "../assets/images/collectible.png";

//cardSlider section img
import CardSlider1 from "../assets/images/image1.png";
import CardSlider2 from "../assets/images/image2.png";
import CardSlider3 from "../assets/images/image3.png";
import CardSlider4 from "../assets/images/image4.png";
import CardSlider5 from "../assets/images/image5.png";

import heartIcon from "../assets/images/Vector.png";

//trendingCat section img
import shape1 from "../assets/images/shape1.png";
import shape2 from "../assets/images/shape2.png";
import shape3 from "../assets/images/shape3.png";
import shape4 from "../assets/images/shape4.png";

import checkBoxImg from "../assets/images/checkBoxImg.png";

//nft section images
import nftIcon1 from "../assets/images/Mail.png";
import nftIcon2 from "../assets/images/Check.png";
import nftIcon3 from "../assets/images/plus.png";
import nftIcon4 from "../assets/images/Discount.png";

//footer Social Icons
import twitter from "../assets/images/twitter.svg";
import telegram from "../assets/images/telegram.svg";
import instagram from "../assets/images/instagram.svg";
import discord from "../assets/images/discord.svg";

import egg_hatch from "../assets/images/egg-hatch.gif";

import { Link } from "react-router-dom";
import Slider from "react-slick";

import ScrollAnimation from "react-animate-on-scroll";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import * as ReactBootstrap from 'react-bootstrap';
import { withStyles } from "@material-ui/core";
// import logo from "../../assets/Logo.png";
import { Slider as MaterialSilder } from "@material-ui/core";
import "./style.css";
toast.configure();

const PrettoSlider = withStyles({
  // eslint-disable-next-line no-unused-vars
  root: {
    color: "#f06823",
    width: "100%",
    height: 8,
    marginTop: "50px",
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid #f06823",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#f06823",
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
})(MaterialSilder);

const Home = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  loadWeb3,
  maxSupply,
}) => {
  let [slider, setSlider] = useState(false);
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" }}
        onClick={onClick}
      />
    );
  }

  //button Plus Minus

  //button plus end minus

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  /*let style = { transform: 'translateX(0px)' };

    window.addEventListener('scroll', (event) => {
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);
            style.transform = 'translateY(' + itemTranslate + 'px)';

        const style = {
            transform: {
                translateY: itemTranslate+ 'px',
            }
        }
        });*/

  return (
    <>
      {/* header */}

      <header class="hero-section">
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
                <Nav.Link href="#action5">Contacts</Nav.Link>
                <Nav.Link href="#action6">Docs</Nav.Link>
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
                <a href="#" class="theme_btn">
                  Buy Now 🔥
                </a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* Start Saas Home Area */}
      <div class="saas-home-area">
        <div>
          {/* class="d-table" */}
          <div>
            {/*class="d-table-cell"*/}
            <Container>
              <div className="Incontainer">
                <div class="conshadow">
                  <div class="row">
                    <div class="col-lg-6 col-md-12">
                      <div class="hero-content ">
                        <h1>Discover, find, & sell extraordinary NFTs 🔥 </h1>
                        <p>
                          The world's first and largest digital marketplace for
                          crypto collectibles and non- fungible tokens (NFTs).{" "}
                        </p>
                        <div className="bonfire-separator"></div>
                        <div class="saas-btn">
                          <Link to="/market-place" className="banner_btn">
                            Explore{" "}
                          </Link>

                          <a href="#" className="banner_btnW">
                            Create
                          </a>
                        </div>
                        <div className="exlusive">
                          <p>Exclusively On</p>
                          <img src={groupLogo} />
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-12 p-relative">
                      <div class="saas-image">
                        <img src={headerImg1} />
                        <img class="banner-tab" src={headerImg2} />
                      </div>

                      <div class="star-img">
                        <img src={statBannerI} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
      {/*End Saas Home Area */}

      {/* Content Area Starts from here*/}

      <section className="campfireAbout">
        <Container>
          <div className="Incontainer">
            <div className="centerHeading">
              <h2>We are Campfire</h2>
              <p>
                The world's first and largest digital marketplace for crypto
                collectibles and non- fungible tokens (NFTs).{" "}
              </p>
              <div className="bonfire-separator"></div>
            </div>

            <div class="row pt-5">
              <div className="col-lg-3 col-md-6">
                <div className="campfireBox">
                  <img src={campfireBoxImg1} />
                  <h4>Heading name</h4>
                  <p>
                    The world's first and largest digital marketplace for crypto
                    collect
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="campfireBox">
                  <img src={campfireBoxImg2} />
                  <h4>Heading name</h4>
                  <p>
                    The world's first and largest digital marketplace for crypto
                    collect
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="campfireBox">
                  <img src={campfireBoxImg3} />
                  <h4>Heading name</h4>
                  <p>
                    The world's first and largest digital marketplace for crypto
                    collect
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="campfireBox">
                  <img src={campfireBoxImg4} />
                  <h4>Heading name</h4>
                  <p>
                    The world's first and largest digital marketplace for crypto
                    collect
                  </p>
                </div>
              </div>

              <a href="#" class="center_btn">
                View all
              </a>
            </div>
          </div>
        </Container>

        <svg
          class="three-steps-squares-two bottomRight bonfire-squares"
          width="60"
          height="97"
          viewBox="0 0 60 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.11"
            x="38.7754"
            y="86.0538"
            width="29.9617"
            height="29.9617"
            rx="8"
            transform="rotate(158.779 38.7754 86.0538)"
            fill="#F06822"
          ></rect>
          <rect
            opacity="0.11"
            x="58.1866"
            y="20.739"
            width="19.1973"
            height="19.1973"
            rx="6.5"
            transform="rotate(169.277 58.1866 20.739)"
            stroke="#D54217"
            stroke-width="3"
          ></rect>
        </svg>
      </section>

      <section class="collectible">
        <Container>
          <div className="Incontainer">
            <div class="collectibleBox">
              <div class="row">
                <div class="col-lg-7">
                  <div className="collectBox padLeft">
                    <h3> Pyromaniac Camp's SMOKEYS </h3>
                    <h2>
                      {" "}
                      10,000 algorithmically generated from over 80 attributes{" "}
                    </h2>
                    <div className="bonfire-separator"></div>
                    <p>
                      {" "}
                      Every Smokey is Different, every one has a certain rarity
                      and skillset.{" "}
                    </p>
                  </div>
                </div>

                <div class="col-lg-5">
                  <img src={collectibleImg} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/*section card slider*/}
      <section className="cardSlider">
        <div className="centerHeading">
          <h2>We are Campfire</h2>
          <p>
            The world's first and largest digital marketplace for crypto
            collectibles and non- fungible tokens (NFTs).{" "}
          </p>
          <div className="bonfire-separator"></div>
        </div>

        <div
          data-w-id="dafc2333-a24e-13ca-a7ec-f7f524655ec7"
          class="scroll-section"
        >
          <div class="super-text one">
            Course Modules - Course Modules - Course Modules -
          </div>
          <div class="super-text two">
            10+hrs of Video Content - 10+hrs of Video Content - 10+hrs of Video
            Content -{" "}
          </div>

          <svg
            class="three-steps-squares-two bottomRightT bonfire-squares"
            width="60"
            height="97"
            viewBox="0 0 60 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.11"
              x="41.7505"
              y="130.93"
              width="31.1068"
              height="31.1068"
              rx="8"
              transform="rotate(153.367 41.7505 130.93)"
              fill="#F7A419"
            ></rect>
            <rect
              opacity="0.11"
              x="109.775"
              y="58.054"
              width="29.9617"
              height="29.9617"
              rx="8"
              transform="rotate(158.779 109.775 58.054)"
              fill="#F06822"
            ></rect>
            <rect
              opacity="0.66"
              x="123.427"
              y="152.247"
              width="27.6609"
              height="27.6609"
              rx="6.5"
              transform="rotate(-163.845 123.427 152.247)"
              stroke="#D54217"
              stroke-width="3"
            ></rect>
            <rect
              opacity="0.11"
              x="46.3489"
              y="6.9298"
              width="19.1973"
              height="19.1973"
              rx="6.5"
              transform="rotate(105 46.3489 6.9298)"
              stroke="#D54217"
              stroke-width="3"
            ></rect>
          </svg>
        </div>
      </section>

      {/* <section className="cardSlider">

                <div  className="menu_container_left">
                    <ScrollAnimation animateIn="animate__bounceInLeft">

                        <div class="d-flex">
                            <div class="box_design">
                                <img src={CardSlider1}/>
                                <h6>Humane dog</h6>
                                <div class="boxDetail">
                                    <p>0.25 <span>BNB</span></p>
                                    <p><img src={heartIcon}/> 1192</p>
                                </div>

                            </div>

                            <div class="box_design">
                                <img src={CardSlider2}/>
                                <h6>Humane dog</h6>
                                <div class="boxDetail">
                                    <p>0.25 <span>BNB</span></p>
                                    <p><img src={heartIcon}/> 1192</p>
                                </div>

                            </div>

                            <div class="box_design">
                                <img src={CardSlider3}/>
                                <h6>Humane dog</h6>
                                <div class="boxDetail">
                                    <p>0.25 <span>BNB</span></p>
                                    <p><img src={heartIcon}/> 1192</p>
                                </div>

                            </div>

                            <div class="box_design">
                                <img src={CardSlider4}/>
                                <h6>Humane dog</h6>
                                <div class="boxDetail">
                                    <p>0.25 <span>BNB</span></p>
                                    <p><img src={heartIcon}/> 1192</p>
                                </div>

                            </div>

                            <div class="box_design">
                                <img src={CardSlider5}/>
                                <h6>Humane dog</h6>
                                <div class="boxDetail">
                                    <p>0.25 <span>BNB</span></p>
                                    <p><img src={heartIcon}/> 1192</p>
                                </div>

                            </div>
                        </div>
                    </ScrollAnimation>


                </div>

                <div className="menu_container_right">
                    <ScrollAnimation animateIn="animate__bounceInRight">
                        <div class="d-flex">
                            <div class="box_design">
                                <img src={CardSlider1}/>
                                <h6>Humane dog</h6>
                                <div class="boxDetail">
                                    <p>0.25 <span>BNB</span></p>
                                    <p><img src={heartIcon}/> 1192</p>
                                </div>

                            </div>

                            <div class="box_design">
                                <img src={CardSlider2}/>
                                <h6>Humane dog</h6>
                                <div class="boxDetail">
                                    <p>0.25 <span>BNB</span></p>
                                    <p><img src={heartIcon}/> 1192</p>
                                </div>

                            </div>

                            <div class="box_design">
                                <img src={CardSlider3}/>
                                <h6>Humane dog</h6>
                                <div class="boxDetail">
                                    <p>0.25 <span>BNB</span></p>
                                    <p><img src={heartIcon}/> 1192</p>
                                </div>

                            </div>

                            <div class="box_design">
                                <img src={CardSlider4}/>
                                <h6>Humane dog</h6>
                                <div class="boxDetail">
                                    <p>0.25 <span>BNB</span></p>
                                    <p><img src={heartIcon}/> 1192</p>
                                </div>

                            </div>

                            <div class="box_design">
                                <img src={CardSlider5}/>
                                <h6>Humane dog</h6>
                                <div class="boxDetail">
                                    <p>0.25 <span>BNB</span></p>
                                    <p><img src={heartIcon}/> 1192</p>
                                </div>

                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

            </section> */}

      {/* mintModalWrap */}
      <section class="mintModalWrap">
        <div class="container">
          <div class="mintModalInner">
            <div className="mintImg">
              <img src={mintEgg} />
            </div>
            <h2>
              <span>Mint Price</span> is 0.05 B CAMPFIRE
            </h2>
            <p>
              Turning digital files into non-fungible tokens is simple. Here's
              how to get started with minting your first B CAMPFIRE NFT
            </p>

            <div class="mint-slider">
              <PrettoSlider
                value={value}
                min={1}
                step={1}
                max={5}
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={5}
                onChange={handleChange}
                className="slidercustome"
              />
              <p> 0.5 B CAMPFIRE</p>
            </div>

            <button class="center_btn backshadow" onClick={() => mint(value)}>
              Mint NFT
            </button>
          </div>
        </div>
      </section>

      {/*Trending in all category start from here*/}

      <section className="trendingCat">
        <div className="container">
          <div className="Incontainer">
            <div className="centerHeading">
              <h2>Trending in all categories</h2>
              <p>Top list of the week </p>
              <div className="bonfire-separator"></div>
            </div>

            <div className="row mt-5">
              <Slider {...settings}>
                <div className="">
                  <div className="shape">
                    <img src={shape1} />
                    <div className="textBox">
                      <h6>
                        SuperRare <img src={checkBoxImg} />
                      </h6>
                      <p>
                        SuperRare makes it easy to create, sell, and collect
                        rare digital art. SuperRare's smart contract{" "}
                        <a href="">Read more......</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="shape">
                    <img src={shape2} />
                    <div className="textBox">
                      <h6>
                        RKFTK Creators <img src={checkBoxImg} />
                      </h6>
                      <p>
                        SuperRare makes it easy to create, sell, and collect
                        rare digital art. SuperRare's smart contract{" "}
                        <a href="">Read more......</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="shape">
                    <img src={shape3} />
                    <div className="textBox">
                      <h6>
                        Name.. <img src={checkBoxImg} />
                      </h6>
                      <p>
                        SuperRare makes it easy to create, sell, and collect
                        rare digital art. SuperRare's smart contract{" "}
                        <a href="">Read more......</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="shape">
                    <img src={shape4} />
                    <div className="textBox">
                      <h6>
                        SuperRare <img src={checkBoxImg} />
                      </h6>
                      <p>
                        SuperRare makes it easy to create, sell, and collect
                        rare digital art. SuperRare's smart contract{" "}
                        <a href="">Read more......</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="shape">
                    <img src={shape4} />
                    <div className="textBox">
                      <h6>
                        SuperRare <img src={checkBoxImg} />
                      </h6>
                      <p>
                        SuperRare makes it easy to create, sell, and collect
                        rare digital art. SuperRare's smart contract{" "}
                        <a href="">Read more......</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="shape">
                    <img src={shape4} />
                    <div className="textBox">
                      <h6>
                        SuperRare <img src={checkBoxImg} />
                      </h6>
                      <p>
                        SuperRare makes it easy to create, sell, and collect
                        rare digital art. SuperRare's smart contract{" "}
                        <a href="">Read more......</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="shape">
                    <img src={shape4} />
                    <div className="textBox">
                      <h6>
                        SuperRare <img src={checkBoxImg} />
                      </h6>
                      <p>
                        SuperRare makes it easy to create, sell, and collect
                        rare digital art. SuperRare's smart contract{" "}
                        <a href="">Read more......</a>
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <svg
          class="three-steps-squares-one bottomToTop bonfire-squares"
          width="133"
          height="155"
          viewBox="0 0 133 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.11"
            x="41.7505"
            y="130.93"
            width="31.1068"
            height="31.1068"
            rx="8"
            transform="rotate(153.367 41.7505 130.93)"
            fill="#F7A419"
          ></rect>
          <rect
            opacity="0.66"
            x="123.427"
            y="152.247"
            width="27.6609"
            height="27.6609"
            rx="6.5"
            transform="rotate(-163.845 123.427 152.247)"
            stroke="#D54217"
            stroke-width="3"
          ></rect>
          <rect
            opacity="0.11"
            x="46.3489"
            y="6.9298"
            width="19.1973"
            height="19.1973"
            rx="6.5"
            transform="rotate(105 46.3489 6.9298)"
            stroke="#D54217"
            stroke-width="3"
          ></rect>

          <rect
            opacity="0.11"
            x="35"
            y="133.8452"
            width="40.9617"
            height="40.9617"
            rx="8"
            transform="rotate(-21.2212 35 33.8452)"
            fill="#F06822"
          />
          <rect
            opacity="0.11"
            x="41.837"
            y="56.38"
            width="50.1973"
            height="50.1973"
            rx="6.5"
            transform="rotate(-75 223.837 131.38)"
            stroke="#D54217"
            stroke-width="3"
          />
        </svg>
      </section>

      <section class="collectible">
        <div class="collectibleBox Utility">
          <Container>
            <div className="Incontainer">
              <div class="row">
                <div class="col-lg-7">
                  <div className="collectBox ">
                    <h2>
                      <b>Explore Utility of NFTs </b>
                    </h2>

                    <div className="bonfire-separator"></div>
                    <p>
                      Utility NFTs are NFTs that carry some underlying utility
                      or application. A very creative description indeed.
                      Whether it's redeemable rewards or membership NFTs, a
                      rising number of creators and developers are leveraging
                      blockchain-backed tokens to build and support their
                      communities.
                    </p>
                    <p>
                      Buy and sell scarce digital goods from the likes of POAP,
                      Urbit ID, and Polyient Games.
                    </p>
                  </div>
                </div>

                <div class="col-lg-5">
                  <img src={group_photo1} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="FeaturedOn">
        <div className="container">
          <div className="Incontainer">
            <div className="row">
              <div className="col-md-4">
                <h2>Featured on</h2>
              </div>
              <div className="col-md-8">
                <p>
                  At campfire we are excited about a brand new type of digital
                  good called a non-fungible token, or NFT.{" "}
                </p>
                <div className="imgCont">
                  <img src={logoc1} />
                  <img src={logoc2} />
                  <img src={logoc3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Create and sell your NFTs Section*/}
      {/* <section class="nft_Section">
                <div class="container">

                    <div class="centerHeading mb-4">
                        <h2>Create and sell your NFTs</h2>
                        <div className="bonfire-separator"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="box_nft">
                                <img src={nftIcon1}/>
                                <h6>Set up your wallet</h6>
                                <p>Once you've set up your wallet of choice, connect it to OpenSea by clicking the
                                    wallet icon in the top right corner. Learn about the wallets we support.</p>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <div class="box_nft">
                                <img src={nftIcon2}/>
                                <h6>Create your collection</h6>
                                <p>Click My Collections and set up your collection. Add social links, a description,
                                    profile & banner images, and set a secondary sales fee.</p>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <div class="box_nft">
                                <img src={nftIcon3}/>
                                <h6>Add your NFTs</h6>
                                <p>Upload your work (image, video, audio, or 3D art), add a title and description, and
                                    customize your NFTs with properties, stats, and unlockable content.</p>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <div class="box_nft">
                                <img src={nftIcon4}/>
                                <h6>List them for sale</h6>
                                <p>Choose between auctions, fixed-price listings, and declining-price listings. You
                                    choose how you want to sell your NFTs, and we help you sell them!</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section> */}

      {/* crypto communities section starts from here */}
      <section className="crypto_communities">
        <div className="container">
          <div class="Incontainer">
            <div className="crypto_communities_border">
              <div className="row">
                <div className="col-lg-6">
                  <div class="become-part-left">
                    <h2 class="become-part-title bonfire-block-title">
                      Become part of one the fastest growing crypto communities
                      ever created<span class="bonfire-orange-color">.</span>
                    </h2>
                    <div class="become-part-description">
                      With tens of thousands of active users across multiple
                      social platforms, Campfire aims to be a true community
                      token.
                    </div>
                    <div class="bonfire-separator"></div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div class="become-part-right">
                    <div class="become-part-list">
                      <div class="become-part-list-item ">
                        <div class="become-part-list-item-icon">
                          <img src={twitter} />
                        </div>
                        <div class="bonfire-features-grid-item-subtitle">
                          <a href="#" target="_blank">
                            87,105
                          </a>
                        </div>
                        <div class="become-part-list-item-caption">
                          <a href="#" target="_blank">
                            Twitter followers
                          </a>
                        </div>
                      </div>
                      <div class="become-part-list-item ">
                        <div class="become-part-list-item-icon">
                          <img src={telegram} />{" "}
                        </div>
                        <div class="bonfire-features-grid-item-subtitle">
                          <a href="#" target="_blank">
                            44,405
                          </a>
                        </div>
                        <div class="become-part-list-item-caption">
                          <a href="#" target="_blank">
                            Telegram members
                          </a>
                        </div>
                      </div>
                      <div class="become-part-list-item mobile:col-span-2">
                        <div class="become-part-list-item-icon">
                          <img src={discord} />
                        </div>
                        <div class="bonfire-features-grid-item-subtitle">
                          19,060
                        </div>
                        <div class="become-part-list-item-caption">
                          Discord members
                        </div>
                      </div>
                    </div>
                    <a
                      class="become-part-list-link bonfire-btn bonfire-orange-btn"
                      href="#"
                      target="_blank"
                    >
                      Become a member
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* crypto communities section ends here */}

      <div class="footer_border"></div>
      {/* Stay up to date Section starts from here */}
      <section className="boneifireUptoDate">
        <div className="container">
          <div className="gform-subscription">
            <div className="gform_heading">
              <h2 className="gform_title">Stay up to date</h2>
              <p>Never miss out on an update from the Bonfire team!</p>
            </div>

            <div className="row">
              <div className="col-12 col-lg-9">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <legend class="field_label_before_complex">
                      Full name
                    </legend>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g John Doe"
                    ></input>
                  </div>

                  <div className="col-12 col-lg-6">
                    <legend class="field_label_before_complex">
                      Full name
                    </legend>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g johndoe@gmail.com"
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3">
                <button class="become-part-list-link bonfire-btn bonfire-orange-btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stay up to date Section ends here */}

      {/* keep_thirsty section*/}

      {/* <section class="keep_thirsty">

                <div class="container">
                    <div class="thristy_box">
                        <h2>Keep thirsty on us</h2>
                        <p>Join our mailing list, 50% for next NFTs Collection if you subscribe before 31/12/2021</p>
                        <div class="mailCont">
                            <form action="">
                                <input type="text" placeholder="Enter your email here"/>
                                <button>Get it Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
    </>
  );
};

export default Home;
