/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
// import "./../scss/main.scss";
import { useParams } from "react-router-dom";
import { Navbar, Container, Nav, Modal } from "react-bootstrap";
import TimeAgo from "timeago-react";
// image import
import logo from "../assets/images/logo.png";

//footer Social Icons
import wallet from "../assets/images/wallet.png";
import external_link from "../assets/images/external-link-alt.svg";
import metaMask from "../assets/images/MetaMask_Fox 1.png";
import metaMask2 from "../assets/images/bsc-icon-logo-1-1 1.png";
import file_copy from "../assets/images/file_copy.png";

import detail_Image from "../assets/images/detail_Image.png";
import Group_43 from "../assets/images/Group_43.png";
import { Link } from "react-router-dom";
import axios from "axios";
import InformationModal from "../components/informationModal";
import ConfirmationLoadingPopup from "../components/confirmationLoadingPopup";
// import * as ReactBootstrap from 'react-bootstrap';
import Sample from "../assets/images/sampleNft.jpeg";

import Web3 from "web3";
function MarketPlaceGallery({
  chainId,
  contractAddress,
  account,
  market_contract,
  contract,
  contractAddress_marketplace,
  loadWeb3,
}) {
  let baseUrl = process.env.PUBLIC_URL;
  // const [show2, setShow2] = useState(false);
  // const handleShowCW = () => setShow2(true);
  const [nftData, setNftData] = useState({});
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [sell, setSell] = useState(false);
  const [sell2, setSell2] = useState(false);
  const [listPrice, setListPrice] = useState(0);
  const [nftList, setNftList] = useState([]);
  const [approve, setApprove] = useState(false);
  const [lessMintAmountAlert, setLessMintAmountAlert] = useState(false);
  const [accessAccountDenied, setAccessAccountDenied] = useState(false);
  const [installEthereum, setInstallEthereum] = useState(false);
  const [listNftApproved, setListNftApproved] = useState(false);
  const [nftListed, setNftListed] = useState(false);
  const [nftMinting, setNftMinting] = useState(false);
  const [transactionRejected, setTransactionRejected] = useState(false);
  const [transactionFailed, setTransactionFailed] = useState(false);
  const [switchToMainnet, setswitchToMainnet] = useState(false);
  const [ethereumCompatibleBrowser, setEthereumCompatibleBrowser] =
    useState(false);
  const [listApprove, setListApprove] = useState(false);
  const [listingInProgress, setListingInProgress] = useState(false);
  const [buyInProgress, setBuyInProgress] = useState(false);
  const [confirmTransaction, setConfirmTransaction] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const handleCloseCW = () => setShow2(false);
  const handleClose = () => setShow(false);

  // const handleShow = () => {
  //   if (nftData.currentOwner) {
  //     if (
  //       account.toUpperCase() === nftData.currentOwner.toUpperCase() &&
  //       nftData.status !== "listed"
  //     ) {
  //       setSell(true);
  //       return;
  //     }
  //   }

  //   if (
  //     account.toUpperCase() === nftData.currentOwner.toUpperCase() &&
  //     nftData.status === "listed"
  //   ) {
  //     setSell2(true);
  //   } else {
  //     setShow(true);
  //   }
  // };

  const handleShow = () => {
    setError(true);
  };
  const listPriceHandler = (e) => {
    setListPrice(e.target.value);
  };

  const listHandler = () => list(listPrice);

  const handleSell = () => setSell(false);
  const handleSell2 = () => setSell2(false);
  //__NFTLISTING_ON_BLOCKCHAIN👇
  const postTNX = async (txnHash, tokenId, txnType, txnAmount) => {
    try {
      const postTransaction = await axios.post(
        "https://defi.mobiwebsolutionz.com/api/nftmarketplace/add-transaction.php",
        {
          walletAddress: account,
          txnHash: txnHash,
          contractAddress: contractAddress,
          tokenId: tokenId,
          txnType: txnType,
          txnAmount: txnAmount,
          network: "testnet",
        }
      );
      return postTransaction;
    } catch (error) {}
  };
  const list = async (listPrice) => {
    if (market_contract) {
      if (chainId === 97) {
        if (listPrice <= 0) {
          alert("Value can't be empty or less then 1");
        } else {
          try {
            const convertedPrice = window.web3.utils.toWei(listPrice, "ether");
            console.log(convertedPrice);
            const postListedItems = await axios.post(
              `https://defi.mobiwebsolutionz.com/api/nftmarketplace/list-for-sell-nft.php`,
              {
                currentOwner: nftData.currentOwner,
                salePrice: convertedPrice,
                contractAddress: contractAddress,
                tokenId: nftData.tokenId,
                network: "testnet",
              }
            );
            console.log("DATA POSTED", postListedItems);
            const {
              data: { data: nftDetails },
            } = await axios.get(
              `https://defi.mobiwebsolutionz.com/api/nftmarketplace/get-nft-details.php?contractAddress=${contractAddress}&tokenId=${nftData.tokenId}`
            );
            setConfirmTransaction(true);
            market_contract.methods
              .listNFT(
                contractAddress,
                nftDetails.tokenId,
                nftDetails.salePrice,
                nftDetails.listId
              )
              .send({ from: account })
              .on("transactionHash", async function (response) {
                setConfirmTransaction(false);
                setListingInProgress(true);
                const data = await postTNX(
                  response,
                  nftDetails.tokenId,
                  "Listing",
                  nftDetails.salePrice
                );
                console.log(data);
              })
              .on("confirmation", function () {
                const el = document.createElement("div");
                el.innerHTML =
                  "View minted NFT on OpenSea : <a href='https://testnets.opensea.io/account '>View Now</a>";

                setNftListed(true);
                setConfirmTransaction(false);
                setListingInProgress(false);

                setNftListed(false);

                window.location.reload();
              })
              .on("error", function (error, receipt) {
                if (error.code === 4001) {
                  setTransactionRejected(true);
                  setConfirmTransaction(false);
                  setListingInProgress(false);
                } else {
                  setTransactionFailed(true);
                  setConfirmTransaction(false);
                  setListingInProgress(false);
                }
              });

            // console.log(response);
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
  };
  //__NFTLISTING_ON_BLOCKCHAIN👆

  //__NFTLISTING_ON_APPROVE👇
  // const list = () => {
  //   setError(true);
  // };

  const approveListing = async () => {
    if (contract) {
      setConfirmTransaction(true);
      contract.methods
        .approve(contractAddress_marketplace, nftData.tokenId)
        .send({ from: account })
        .on("transactionHash", async function (response) {
          setConfirmTransaction(false);
          setListApprove(true);
          const data = await postTNX(response, nftData.tokenId, "Approve", 0);
          console.log(data);
        })
        .on("confirmation", function () {
          const el = document.createElement("div");
          el.innerHTML =
            "View minted NFT on OpenSea : <a href='https://testnets.opensea.io/account '>View Now</a>";

          setListNftApproved(true);
          setConfirmTransaction(false);
          setListApprove(false);
          setApprove(true);
          setListNftApproved(false);
        })
        .on("error", function (error, receipt) {
          if (error.code === 4001) {
            setTransactionRejected(true);
            setConfirmTransaction(false);
            setListApprove(false);
          } else {
            setTransactionFailed(true);
            setConfirmTransaction(false);
            setListApprove(false);
          }
        });
    }
  };
  //__NFTLISTING_ON_APPROVE👆

  //__NFTBUY_ON_APPROVE👇
  const buyNft = async (price) => {
    if (market_contract) {
      if (chainId === 97) {
        if (Number(price) <= 0) {
          alert("Please Input value");
        } else {
          console.log(nftData.listId, price);
          setConfirmTransaction(true);
          market_contract.methods
            .buyNFT(nftData.listId)
            .send({ from: account, value: Number(price) })
            .on("transactionHash", async function ({ response }) {
              setConfirmTransaction(false);
              setBuyInProgress(true);
              const data = await postTNX(
                response,
                nftData.tokenId,
                "Buy",
                price
              );
              console.log(data);
            })
            .on("confirmation", function () {
              const el = document.createElement("div");
              el.innerHTML =
                "View minted NFT on OpenSea : <a href='https://testnets.opensea.io/account '>View Now</a>";

              setNftListed(true);
              setConfirmTransaction(false);
              setBuyInProgress(false);
              setApprove(true);
              setNftListed(false);
              window.location.reload();
            })
            .on("error", function (error, receipt) {
              if (error.code === 4001) {
                setTransactionRejected(true);
                setConfirmTransaction(false);
                setBuyInProgress(false);
              } else {
                setTransactionFailed(true);
                setConfirmTransaction(false);
                setBuyInProgress(false);
              }
            });
        }
      }
    }
  };

  useEffect(() => {
    const getChainData = async () => {
      const {
        data: { data: getData },
      } = await axios.get(
        `https://defi.mobiwebsolutionz.com/api/nftmarketplace/get-nft-details.php?contractAddress=${contractAddress}&tokenId=${id}`
      );
      // console.log(getData);
      setNftData(getData);
    };
    getChainData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getTransactionHistory = async () => {
      try {
        const {
          data: { data: history },
        } = await axios.get(
          `https://defi.mobiwebsolutionz.com/api/nftmarketplace/get-transactions.php?contractAddress=${contractAddress}&tokenId=${id}`
        );
        console.log();
        setTransactionHistory(history);
      } catch (error) {
        console.log(error);
      }
    };
    getTransactionHistory();
  }, [id]);

  console.log(id);
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
                <Link className="nav-link" to="/collection">
                  My Collection
                </Link>
                <Nav.Link href="#action1">Cozy That</Nav.Link>
                <Nav.Link href="#action2">Whitepaper</Nav.Link>
                <Nav.Link href="#action3">Chart</Nav.Link>
                <Nav.Link href="#action4">FAQ</Nav.Link>
              </Nav>

              <div className="d-flex ">
                <a href="#" class="theme_btn" onClick={loadWeb3}>
                  {account ? (
                    account.slice(0, 6) +
                    "..." +
                    account.slice(account.length - 4)
                  ) : (
                    <>
                      <img src={wallet} />
                      Connect wallet
                    </>
                  )}
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
                      {nftData.image ? (
                        id < 7 ? (
                          <video
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsInline={true}
                            className=""
                            style={{ width: "100%" }}
                            // poster={Doge}
                          >
                            {" "}
                            <source
                              src={nftData.image}
                              type="video/mp4"
                            ></source>
                          </video>
                        ) : (
                          <img src={nftData.image} />
                        )
                      ) : (
                        <img className="blur" src={detail_Image} />
                      )}
                    </div>
                    <div class="detailOfferSec">
                      <div class="detailOfferTop">
                        <div class="detailNumSec">
                          <h4 class="head4">
                            {nftData.salePrice
                              ? Web3.utils.fromWei(nftData.salePrice, "ether")
                              : "00"}{" "}
                            BNB
                          </h4>
                          {/* <h6 class="head6">0.27 USD</h6> */}
                        </div>
                      </div>
                      {nftData ? (
                        nftData.status === "listed" ||
                        (nftData.status !== "listed" &&
                          nftData?.currentOwner?.toUpperCase() ===
                            account?.toUpperCase()) ? (
                          <button
                            class="buyB detP_btn"
                            onClick={() => handleShow(nftData)}
                          >
                            {nftData
                              ? nftData.status === "listed" &&
                                nftData?.currentOwner?.toUpperCase() ===
                                  account?.toUpperCase()
                                ? "Sell Nft"
                                : nftData.status === "listed"
                                ? "Buy Nft"
                                : "Sell Nft"
                              : "Buy Nft"}
                          </button>
                        ) : (
                          <button className="buyB detP_btn disable">
                            {" "}
                            Not Listed
                          </button>
                        )
                      ) : (
                        <button className="buyB detP_btn disable">
                          {" "}
                          Not Listed
                        </button>
                      )}
                      {/* <button class="buyB detP_btn">Buy this NFT </button> */}
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
                    <h4>{nftData ? nftData.name : ""}</h4>
                    <div class="boxDetail">
                      <p>Rarity: Not Available till Main sale is over</p>
                      {/* <p><img src={heartIcon}/> 1192</p> */}
                    </div>

                    <div class="creatorDetails">
                      <p>Creator/owned by :</p>
                      <div class="copySec">
                        <div class="copyImgSec">
                          <img src={Group_43} />
                        </div>
                        <a href="#" class="copyLink">
                          {nftData.currentOwner &&
                            nftData.currentOwner.slice(0, 10) +
                              "..." +
                              nftData.currentOwner.slice(
                                nftData.currentOwner.length - 4
                              )}
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
                              My name is Smokey, the little Dragon! I was once a
                              perfectly normal Charmeleon, a Pokemon of a
                              wonderful trainer. That was before I fell through
                              a rift and was trapped into the BSC Blockchain,
                              where 10,000 unique combinations of me formed in
                              all sorts of outfits and scenarios. Join the Camp!
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
                                {transactionHistory.map((v, i) => (
                                  <tr key={i}>
                                    <td>
                                      <p>Type</p>
                                      <button className="buy">
                                        {v.txnType}
                                      </button>
                                    </td>
                                    <td>
                                      <p>
                                        {v.walletAddress
                                          ? v.walletAddress.slice(0 - 4) +
                                            "..." +
                                            v.walletAddress.slice(
                                              v.walletAddress.length - 4
                                            )
                                          : ""}
                                      </p>
                                      <span>Owner</span>
                                    </td>
                                    <td>
                                      <p>
                                        {" "}
                                        {v.txnHash
                                          ? v.txnHash.slice(0 - 4) +
                                            "..." +
                                            v.txnHash.slice(
                                              v.txnHash.length - 4
                                            )
                                          : ""}
                                      </p>
                                      <span>TXHash</span>
                                    </td>
                                    <td>
                                      <p>
                                        {Web3.utils.fromWei(
                                          v.txnAmount,
                                          "ether"
                                        )}{" "}
                                        BNB
                                      </p>
                                      <span>
                                        <TimeAgo
                                          datetime={v.created_time}
                                          // locale="zh_C"
                                        />
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* <div class="tabby-tab">
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
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div class="makeOverMain">
            <div class="makeModalSec">
              <div class="makeModalInner wahe">
                <h2 class="head2">Buy - {!nftData.name ? "" : nftData.name}</h2>
                <div class="make_offer">
                  {/* <div class="discSec">
                    <h5 class="head6">Your balance</h5>
                    <h6 class="head6">0 BNB</h6>
                  </div> */}
                  <div
                    class="discSec"
                    style={{
                      color: "white",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "10px 0 20px",
                      padding: "0 80px",
                    }}
                  >
                    <h4 class="modal-title " style={{ fontSize: "30px" }}>
                      Price: &nbsp;
                    </h4>
                    <h6
                      class="modal-price "
                      style={{ fontSize: "30px", lineHeight: "1.2" }}
                    >
                      {nftData.salePrice
                        ? Web3.utils.fromWei(nftData.salePrice, "ether")
                        : "00"}
                    </h6>
                  </div>
                  {/* <div class="discSec">
                    <h5 class="head6">Your current offer</h5>
                    <h6 class="head6">0 BNB</h6>
                  </div> */}
                  {/* <div class="discSec">
                    <h5 class="head6">Offer</h5>
                    <h6 class="head6">Min offer: 0.5 BNB</h6>
                  </div> */}
                </div>
                {/* <form>
                  <input type="text" class="modalInput"></input>
                  <p class="para">You must offer at least 0.5 BNB</p>
                </form> */}
                <div className="btnWrap">
                  <button
                    className="buyB"
                    onClick={() => buyNft(nftData.salePrice)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={sell} onHide={handleSell}>
        <Modal.Body>
          <div class="makeOverMain">
            <div class="makeModalSec">
              <div class="makeModalInner wahe">
                <h2 class="head2">
                  List for Sale - {!nftData.name ? "" : nftData.name}
                </h2>

                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    class="modalInput"
                    value={listPrice}
                    onChange={listPriceHandler}
                  ></input>
                  <p class="para">Set Your Nft Price</p>
                </form>
                <div class="btnWrap">
                  <button
                    class={`buyB list ${approve ? "disable" : ""}`}
                    onClick={() => approveListing(nftData)}
                  >
                    Approve
                  </button>
                  <button
                    class={`buyB list ${approve ? "" : "disable"}`}
                    onClick={listHandler}
                  >
                    List For Sale
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={sell2} onHide={handleSell2}>
        <Modal.Body>
          <div class="makeOverMain">
            <div class="makeModalSec">
              <div class="makeModalInner wahe">
                <h2 class="head2">
                  List for Sale - {!nftData.name ? "" : nftData.name}
                </h2>

                <h2 class="head2">
                  Current Price -{" "}
                  {!nftData.salePrice
                    ? "00"
                    : Web3.utils.fromWei(nftData.salePrice, "ether")}
                </h2>

                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    class="modalInput"
                    value={listPrice}
                    onChange={listPriceHandler}
                  ></input>
                  <p class="para">Set Your Nft Price</p>
                </form>
                <div class="btnWrap">
                  <button
                    class={`buyB list ${approve ? "disable" : ""}`}
                    onClick={() => approveListing()}
                  >
                    Approve
                  </button>
                  <button
                    class={`buyB list ${approve ? "" : "disable"}`}
                    onClick={listHandler}
                  >
                    List For Sale
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <InformationModal
        open={lessMintAmountAlert}
        onClose={setLessMintAmountAlert}
        title="Oops"
        text="Value Cant be less then 1"
      />

      <InformationModal
        open={accessAccountDenied}
        onClose={setAccessAccountDenied}
        title="Oops"
        text="Request to access account denied!"
      />
      <InformationModal
        open={installEthereum}
        onClose={setInstallEthereum}
        title="Oops"
        text="Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"
      />
      <InformationModal
        open={listNftApproved}
        onClose={setListNftApproved}
        title="Approve Successful"
        text="Approved Successfully, Now you can list your Nft"
      />
      <InformationModal
        open={nftListed}
        onClose={setNftListed}
        title="Nft Listed Successful"
        text="Nft Listed Successfully"
      />
      <InformationModal
        open={nftMinting}
        onClose={setNftMinting}
        title="Information"
        text="Minting NFT!"
      />
      <InformationModal
        open={transactionRejected}
        onClose={setTransactionRejected}
        title="Error"
        text="Transaction Rejected!"
      />
      <InformationModal
        open={transactionFailed}
        onClose={setTransactionFailed}
        title="Error"
        text="Transaction Failed!"
      />
      <InformationModal
        open={switchToMainnet}
        onClose={setswitchToMainnet}
        title="Error"
        text="Please switch to mainnet "
      />
      <InformationModal
        open={ethereumCompatibleBrowser}
        onClose={setEthereumCompatibleBrowser}
        title="Error"
        text="Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"
      />
      <ConfirmationLoadingPopup
        open={confirmTransaction}
        title="Confirm Transaction"
        message="Please confirm transaction"
      />
      <ConfirmationLoadingPopup
        open={listApprove}
        title="Approving In Progress"
        message="Please wait to get confirmation of the transaction from blockchain"
      />
      <ConfirmationLoadingPopup
        open={listingInProgress}
        title="Listing In Progress"
        message="Please wait to get confirmation of the transaction from blockchain"
      />
      <ConfirmationLoadingPopup
        open={buyInProgress}
        title="Buy In Progress"
        message="Please wait to get confirmation of the transaction from blockchain"
      />
      <InformationModal
        open={error}
        onClose={setError}
        title="Oops"
        text="Trading will be open after 3rd Feb
        "
      />
    </>
  );
}

export default MarketPlaceGallery;
