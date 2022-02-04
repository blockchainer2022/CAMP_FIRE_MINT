/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
// import "./../scss/main.scss";
import { Navbar, Container, Nav, Modal } from "react-bootstrap";

// image import
import logo from "../assets/images/logo.png";

//footer Social Icons

import wallet from "../assets/images/wallet.png";

import left_Icon from "../assets/images/left_Icon.png";
import right_Icon from "../assets/images/right_Icon.png";

import detail_Image from "../assets/images/detail_Image.png";
import { Link } from "react-router-dom";
import InformationModal from "../components/informationModal";
import ConfirmationLoadingPopup from "../components/confirmationLoadingPopup";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Web3 from "web3";
import Sample from "../assets/images/sampleNft.jpeg";

// import * as ReactBootstrap from 'react-bootstrap';
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    "& .MuiPaginationItem-outlined": {
      border: "1px solid #FD5919",
      color: "white",
      fontWeight: "bold",
    },
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "#FD5919",
    },
    "& .MuiPaginationItem-ellipsis": {
      color: "white",
      fontSize: "20px",
    },
    "& .MuiPagination-ul": {
      justifyContent: "center",
    },
    "& .MuiPaginationItem-root": {
      height: "50px",
      width: "50px",
    },
  },
}));
function MyCollection({
  nfts,
  chainId,
  contractAddress,
  account,
  market_contract,
  contract,
  contractAddress_marketplace,
  loadWeb3,
}) {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  const [currentData, setCurrentData] = useState({});
  let baseUrl = process.env.PUBLIC_URL;

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
  const [select, setSelect] = useState("");
  const [select2, setSelect2] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const handlePage = (event, value) => {
    setPage(value);
  };

  const perPage = 20;
  const pageVisited = (page - 1) * perPage;
  const displayNfts = nftList.slice(pageVisited, perPage + pageVisited);
  const pageCount = Math.ceil(nftList.length / perPage);

  const handleClose = () => setShow(false);

  // const handleShow = (data) => {
  //   setCurrentData(data);

  //   if (data.currentOwner) {
  //     if (
  //       account.toUpperCase() === data.currentOwner.toUpperCase() &&
  //       data.status !== "listed"
  //     ) {
  //       setSell(true);
  //       return;
  //     }
  //   }

  //   if (
  //     account.toUpperCase() === data.currentOwner.toUpperCase() &&
  //     data.status === "listed"
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

  // console.log(nfts);
  //__SEND_NFT_LIST_TO_DATABASE👇
  // console.log(info);
  // console.log(nfts);
  useEffect(() => {
    if (!info.length) {
      nfts.forEach(async (nft) => {
        if (chainId === 97) {
          // console.log("call");/
          const { data } = await axios.get(nft);
          console.log(data);
          // console.log("JSON DATA", data);
          const owner = await market_contract.methods
            .getNFTowner(contractAddress, data.edition - 1)
            .call();
          // console.log("owner", owner);
          try {
            const buydata = await axios.get(
              `https://defi.mobiwebsolutionz.com/api/nftmarketplace/get-nft-details.php?contractAddress=${contractAddress}&tokenId=${data.edition}`
            );
            // console.log("BUY DATA:", buydata);
            setInfo((prev) => [...prev, { ...data, owner: owner, buydata }]);
            if (buydata.data.data === null) {
              try {
                const sendData = await axios.post(
                  "https://defi.mobiwebsolutionz.com/api/nftmarketplace/add-nft.php",
                  {
                    currentOwner: owner,
                    contractAddress: contractAddress,
                    tokenId: data.edition,
                    name: data.name,
                    image: data.image,
                    network: "testnet",
                    description: data.discription,
                    attributes: JSON.stringify(data.attributes),
                  }
                );
                // console.log("POST_DATA", sendData);
              } catch (error) {
                console.log(error);
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    }
  }, [chainId, info, nfts]);
  //__SEND_NFT_LIST_TO_DATABASE👆

  //___GET_NFTS_LIST_FROM_DATABASE👇
  const url = `https://defi.mobiwebsolutionz.com/api/nftmarketplace/get-nfts-list.php?contractAddress=${contractAddress}&filter=owned&owner=${account}&sort_by_price=high-to-low${
    select === "listed"
      ? "&listed=true"
      : select === "not_listed"
      ? "&listed=false"
      : ""
  }`;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(url);
      const { data: nftData } = data;
      console.log(nftData);
      setNftList(nftData);
    };
    getData();
  }, [select, select2, nftList]);
  //___GET_NFTS_LIST_FROM_DATABASE👆

  // console.log(nftList);
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
  //__NFTLISTING_ON_BLOCKCHAIN👇
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
                currentOwner: currentData.currentOwner,
                salePrice: convertedPrice,
                contractAddress: contractAddress,
                tokenId: currentData.tokenId,
                network: "testnet",
              }
            );
            console.log("DATA POSTED", postListedItems);
            const {
              data: { data: nftDetails },
            } = await axios.get(
              `https://defi.mobiwebsolutionz.com/api/nftmarketplace/get-nft-details.php?contractAddress=${contractAddress}&tokenId=${currentData.tokenId}`
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
  const approveListing = async (currentData) => {
    if (contract) {
      setConfirmTransaction(true);
      contract.methods
        .approve(contractAddress_marketplace, currentData.tokenId)
        .send({ from: account })
        .on("transactionHash", async function (response) {
          setConfirmTransaction(false);
          setListApprove(true);

          const data = await postTNX(
            response,
            currentData.tokenId,
            "Approve",
            0
          );
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
          console.log(currentData.listId, price);
          setConfirmTransaction(true);
          market_contract.methods
            .buyNFT(currentData.listId)
            .send({ from: account, value: Number(price) })
            .on("transactionHash", async function (response) {
              setConfirmTransaction(false);
              setBuyInProgress(true);
              const data = await postTNX(
                response,
                currentData.tokenId,
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

  return (
    <>
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
                      <img src={wallet} /> Connect wallet
                    </>
                  )}
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
                    My Collection<span>.</span>
                  </h2>
                  <p className="mb-4">
                    View all your NFTs in your wallet and onces listed on the
                    marketplace.
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
                {/* <p className="text-white">{url}</p> */}
                <div className="headingSelect justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <select
                      id="For sale"
                      name="For sale"
                      value={select}
                      onChange={(e) => {
                        setSelect(e.target.value);
                      }}
                    >
                      <option value="">View</option>
                      <option value="not_listed">In Wallet</option>
                      <option value="listed">Listed</option>
                    </select>
                    {/* <select
                      id="For sale"
                      name="For sale"
                      value={select2}
                      onChange={(e) => {
                        setSelect2(e.target.value);
                      }}
                    >
                      <option value="">Sort By Owner</option>
                      <option value="all">All</option>
                      <option value="my_own">My Own</option>
                    </select> */}
                  </div>
                  <div
                    className="reload text-white"
                    onClick={() => window.location.reload()}
                  >
                    <i className="fas fa-sync"></i>
                  </div>
                  {/* <div class="alert" id="panel">
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
                  </div> */}
                  {/* <div class="alert" id="panel2">
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
                  </div> */}
                </div>
              </div>
            </div>
            {/* <div style={{ color: "white" }}>{url}</div> */}
            <div class="row mt-5">
              {nftList?.length
                ? displayNfts.map((val, i) => {
                    return (
                      <div class="col-lg-3 col-md-6" key={i}>
                        <div class="gridBox">
                          <Link to={`/market-place-gallery/${val.tokenId}`}>
                            {val.tokenId > 7 ? (
                              <img src={val.image ? val.image : detail_Image} />
                            ) : (
                              <video
                                autoPlay={true}
                                loop={true}
                                muted={true}
                                playsInline={true}
                                className=""
                                style={{ width: "100%", height: 190 }}
                                // poster={Doge}
                              >
                                <source
                                  src={val.image}
                                  type="video/mp4"
                                ></source>
                              </video>
                            )}
                          </Link>
                          <div class="contentP">
                            <div class="boxDetail">
                              <h6>{val.name}</h6>
                              <p>
                                {val.salePrice
                                  ? Web3.utils.fromWei(val.salePrice, "ether")
                                  : "00"}
                                BNB
                                <span></span>
                              </p>
                              <p>
                                {val.currentOwner
                                  ? val.currentOwner.slice(0, 4) +
                                    "..." +
                                    val.currentOwner.slice(
                                      val.currentOwner.length - 4
                                    )
                                  : "0X0"}
                                {/* {val.currentOwner} */}
                              </p>
                            </div>
                            {val ? (
                              val.status === "listed" ||
                              (val.status !== "listed" &&
                                val?.currentOwner.toUpperCase() ===
                                  account?.toUpperCase()) ? (
                                <button
                                  class="buyB"
                                  onClick={() => handleShow(val)}
                                >
                                  {val
                                    ? val.status === "listed" &&
                                      val?.currentOwner.toUpperCase() ===
                                        account?.toUpperCase()
                                      ? "Sell"
                                      : val.status === "listed"
                                      ? "Buy"
                                      : "Sell"
                                    : "Buy"}
                                </button>
                              ) : (
                                ""
                              )
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                : "Loading"}
            </div>
            <div className={classes.root}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={handlePage}
                shape="rounded"
                variant="outlined"
              />
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div class="makeOverMain">
            <div class="makeModalSec">
              <div class="makeModalInner wahe">
                <h2 class="head2">
                  Buy - {!currentData.name ? "" : currentData.name}
                </h2>
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
                      {currentData.salePrice
                        ? Web3.utils.fromWei(currentData.salePrice, "ether")
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
                    onClick={() => buyNft(currentData.salePrice)}
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
                  List for Sale - {!currentData.name ? "" : currentData.name}
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
                    onClick={() => approveListing(currentData)}
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
                  List for Sale - {!currentData.name ? "" : currentData.name}
                </h2>

                <h2 class="head2">
                  Current Price -{" "}
                  {!currentData.salePrice
                    ? "00"
                    : Web3.utils.fromWei(currentData.salePrice, "ether")}
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
                    onClick={() => approveListing(currentData)}
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

export default MyCollection;
