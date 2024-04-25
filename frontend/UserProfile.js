var UserProfileABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "age",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "documentNumber",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "residence",
          "type": "string"
        }
      ],
      "name": "ProfileRegistered",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "profiles",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "documentNumber",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "residence",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_documentNumber",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_residence",
          "type": "string"
        }
      ],
      "name": "registerUserProfile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];