export const MY_CONTRACT_ADDRESS = "0x3b9784fBfF2bc38Be2F7c34CC7a3E810b2264123";
export const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "initialSentence",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getSentence",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newSentence",
          "type": "string"
        }
      ],
      "name": "setSentence",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];