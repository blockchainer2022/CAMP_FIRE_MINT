/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./scss/main.scss";
import Home from "./pages";
import MarketPlace from "./pages/marketPlace";
import MarketPlaceGallary from "./pages/marketPlaceGallery";
import MyCollection from "./pages/MyCollection";
import { Route, Switch } from "react-router-dom";
import Footer from "./pages/components/footer";
import Web3 from "web3";
import {
  contractAbi_marketplace,
  contractAddress_marketplace,
} from "./marketplace_config";
import { contractAbi, contractAddress } from "./config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InformationModal from "./components/informationModal";
import ConfirmationLoadingPopup from "./components/confirmationLoadingPopup";
import SuccesPopup from "./components/succesModal";
import axios from "axios";
// import axios from "axios";
function App() {
  const [chainId, setChainId] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const [price, setPrice] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);
  const [lessMintAmountAlert, setLessMintAmountAlert] = useState(false);
  const [accessAccountDenied, setAccessAccountDenied] = useState(false);
  const [installEthereum, setInstallEthereum] = useState(false);
  const [nftMinted, setNftMinted] = useState(false);
  const [nftMinting, setNftMinting] = useState(false);
  const [transactionRejected, setTransactionRejected] = useState(false);
  const [transactionFailed, setTransactionFailed] = useState(false);
  const [switchToMainnet, setswitchToMainnet] = useState(false);
  const [ethereumCompatibleBrowser, setEthereumCompatibleBrowser] =
    useState(false);
  const [mintingInProgress, setMintingInProgress] = useState(false);
  const [confirmTransaction, setConfirmTransaction] = useState(false);
  const [saleLive, setSaleLive] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [market_contract, setMarket_contract] = useState(null);
  const [whitelist, setWhiteList] = useState(false);
  const [maxMint, setMaxMint] = useState(false);
  useEffect(() => {
    loadWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);
  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        loadBlockchainData();
        getCurrentAddressConnected();
        addAccountsAndChainListener();
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        if (error.code === 4001) {
          setAccessAccountDenied(true);
        } else console.error(error);
      }
    } else {
      setInstallEthereum(true);
    }
  }

  const loadBlockchainData = async () => {
    const contract = new window.web3.eth.Contract(contractAbi, contractAddress);
    const contract_marketPlace = new window.web3.eth.Contract(
      contractAbi_marketplace,
      contractAddress_marketplace
    );
    setContract(contract);
    setMarket_contract(contract_marketPlace);
    console.log(
      "MAIN CONTRACT",
      contract,
      "MARKETPLACE:",
      contract_marketPlace
    );
    const chainId = await window.web3.eth.getChainId();
    setChainId(chainId);
    // console.log(chainId);
    //success when chainId = 4 else failure
    // you are connected to main net
    // Please connect to main net

    if (chainId === 97) {
      toast(`You are connected to main net`, {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      const totalSupply = await contract.methods.totalSupply().call();
      setTotalSupply(totalSupply);
      const price = await contract.methods.getPrice().call();
      //console.log('price:',price);
      setPrice(price);
      console.log("totalsupply", totalSupply);
      // const token = await contract.methods.tokenURI(2).call();
      // const { data: tokenData } = await axios.get(token);

      // console.log("tokenData:", tokenData);
      // const token = await market_contract.methods
      //   .getNFTUri(contractAddress, 1)
      //   .call();
      // console.log(token);
      const displayPrice = window.web3.utils.fromWei(price, "ether");

      setDisplayPrice(displayPrice);
      const MAX_SUPPlY = await contract.methods.MAX_SUPPLY().call();
      // console.log("MAX_SUPPLY:", MAX_SUPPlY);
      setMaxSupply(MAX_SUPPlY);
      const nftArrays = [];
      for (let i = 0; i < totalSupply; i++) {
        const token = await market_contract.methods
          .getNFTUri(contractAddress, i + 1)
          .call();
        console.log("token:", token);
        nftArrays.push(token);
      }
      setNfts(nftArrays);

      //event will be fired by the smart contract when a new NFT is minted
      contract.events
        .NFTMinted()
        .on("data", async function (result) {
          setTotalSupply(result.returnValues[0]);
        })
        .on("error", console.error);
    } else {
      toast("Please connect to main net", {
        type: "error",
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const getCurrentAddressConnected = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addAccountsAndChainListener = async () => {
    //this event will be emitted when the currently connected chain changes.
    window.ethereum.on("chainChanged", (_chainId) => {
      window.location.reload();
    });

    // this event will be emitted whenever the user's exposed account address changes.
    window.ethereum.on("accountsChanged", (accounts) => {
      window.location.reload();
    });
  };

  async function mint(mintCount) {
    if (contract) {
      if (chainId === 97) {
        const saleOpen = await contract.methods.saleOpen().call();
        //const saleOpen = await contract.methods.saleOpen().call();
        //console.log(saleOpen);

        if (saleOpen) {
          const { data } = await axios.get(
            `https://defi.mobiwebsolutionz.com/nft/whitelisted/verify_whitelist.php?wallet_address=${account}`
          );
          const isVerified = data.verified;

          //console.log(isVerified);
          if (true) {
            const userBalance = await contract.methods
              .balanceOf(account)
              .call();
            const MAX_MINT_PRESALE = await contract.methods
              .MAX_ALLOWED()
              .call();

            console.log(
              "userBalance:",
              userBalance,
              "MAXVALUE:",
              MAX_MINT_PRESALE
            );
            if (Number(userBalance) + mintCount > Number(MAX_MINT_PRESALE)) {
              setMaxMint(true);
            } else {
              if (mintCount === 0) {
                setLessMintAmountAlert(true);
              } else {
                setConfirmTransaction(true);
                const finalPrice = Number(price) * mintCount;
                contract.methods
                  .mintNFT(mintCount)
                  .send({ from: account, value: finalPrice })
                  .on("transactionHash", function (response) {
                    setConfirmTransaction(false);
                    setMintingInProgress(true);
                    //console.log("Hash", response);
                    const postTNX = async () => {
                      const postTransaction = await axios.post(
                        "https://defi.mobiwebsolutionz.com/api/nftmarketplace/add-transaction.php",
                        {
                          walletAddress: account,
                          txnHash: response,
                          contractAddress: contractAddress,
                          tokenId: "",
                          txnType: "Mint",
                          txnAmount: finalPrice,
                          network: "testnet",
                        }
                      );
                      //console.log(postTransaction);
                    };
                    postTNX();
                  })
                  .on("confirmation", function (reponse) {
                    const el = document.createElement("div");
                    el.innerHTML =
                      "View minted NFT on OpenSea : <a href='https://testnets.opensea.io/account '>View Now</a>";
                    console.log(reponse);
                    setNftMinted(true);
                    setConfirmTransaction(false);
                    setMintingInProgress(false);
                    // setTimeout(() => {
                    //   window.location.reload(false);
                    // }, 5000);
                  })
                  .on("error", function (error, receipt) {
                    if (error.code === 4001) {
                      setTransactionRejected(true);
                      setConfirmTransaction(false);
                      setMintingInProgress(false);
                    } else {
                      setTransactionFailed(true);
                      setConfirmTransaction(false);
                      setMintingInProgress(false);
                    }
                  });
              }
            }
          } else {
            // alert("you are not white listed");
            setWhiteList(true);
          }
        } else {
          setSaleLive(true);
        }
      } else {
        setswitchToMainnet(true);
      }
    } else {
      setEthereumCompatibleBrowser(true);
    }
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home
            account={account}
            mint={mint}
            totalSupply={totalSupply}
            displayPrice={displayPrice}
            loadWeb3={loadWeb3}
            maxSupply={maxSupply}
            nfts={nfts}
          />
        </Route>
        <Route path="/market-place">
          <MarketPlace
            nfts={nfts}
            chainId={chainId}
            contract={contract}
            contractAddress={contractAddress}
            contractAddress_marketplace={contractAddress_marketplace}
            account={account}
            market_contract={market_contract}
            loadWeb3={loadWeb3}
          />
        </Route>
        <Route path="/collection">
          <MyCollection
            nfts={nfts}
            chainId={chainId}
            contract={contract}
            contractAddress={contractAddress}
            contractAddress_marketplace={contractAddress_marketplace}
            account={account}
            market_contract={market_contract}
            loadWeb3={loadWeb3}
          />
        </Route>
        <Route path="/market-place-gallery/:id">
          <MarketPlaceGallary
            chainId={chainId}
            contract={contract}
            contractAddress={contractAddress}
            contractAddress_marketplace={contractAddress_marketplace}
            account={account}
            market_contract={market_contract}
            loadWeb3={loadWeb3}
          />
        </Route>
      </Switch>
      <Footer />
      <InformationModal
        open={whitelist}
        onClose={setWhiteList}
        title="Oops"
        text="You are not whitelisted"
      />
      <InformationModal
        open={maxMint}
        onClose={setMaxMint}
        title="Oops"
        text="You have reached maximum NFT minting limit per account!"
      />
      <InformationModal
        open={saleLive}
        onClose={setSaleLive}
        title=" Sale is not live"
        text="Sale is not live yet. Please follow our discord / telegram for the updates"
      />
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
      {/* <InformationModal
        open={nftMinted}
        onClose={setNftMinted}
        title="Mint Successful"
        text="Thank you for the purchase. Your NFT will be available on OpenSea shortly"
      /> */}
      <SuccesPopup
        open={nftMinted}
        onClose={setNftMinted}
        title="Mint Successful"
        text="NFT minted successfully. Trading will be opened on marketplace after public launch on 3rd Feb"
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
        text="Please switch to mainnet to mint Campfire"
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
        message="Confirm transaction to mint the NFT"
      />
      <ConfirmationLoadingPopup
        open={mintingInProgress}
        title="Minting In Progress"
        message="Please wait to get confirmation of the transaction from blockchain"
      />
    </div>
  );
}

export default App;
