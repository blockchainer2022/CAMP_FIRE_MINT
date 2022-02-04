export const contractAbi_marketplace = [
  {
    inputs: [{ internalType: "uint256", name: "_listId", type: "uint256" }],
    name: "buyNFT",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_listId", type: "uint256" }],
    name: "getListedNFTDetails",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_contractAddress", type: "address" },
    ],
    name: "getNFTTotalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_contractAddress", type: "address" },
      { internalType: "uint256", name: "_tokenId", type: "uint256" },
    ],
    name: "getNFTUri",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_contractAddress", type: "address" },
      { internalType: "uint256", name: "_tokenId", type: "uint256" },
    ],
    name: "getNFTowner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_contractAddress", type: "address" },
      { internalType: "uint256", name: "_tokenId", type: "uint256" },
      { internalType: "uint256", name: "_salePrice", type: "uint256" },
      { internalType: "uint256", name: "_listId", type: "uint256" },
    ],
    name: "listNFT",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "nfts",
    outputs: [
      { internalType: "uint256", name: "listId", type: "uint256" },
      { internalType: "address", name: "currentOwner", type: "address" },
      { internalType: "uint256", name: "salePrice", type: "uint256" },
      { internalType: "address", name: "contractAddress", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "uint256", name: "status", type: "uint256" },
      { internalType: "uint256", name: "listedTime", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const contractAddress_marketplace ="0x236f4BD7739108CdaE4708D8239681450A981b5b";
//export const contractAddress_marketplace ="0x429f7Eda4a56021736Dd193263e56d43EE92C6dD";