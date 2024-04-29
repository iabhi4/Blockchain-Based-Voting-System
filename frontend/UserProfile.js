var userProfileJson = {
  "contractName": "UserProfile",
  "abi": [
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
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "eligibleToVote",
          "type": "bool"
        }
      ],
      "name": "ProfileRegistered",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "profiles",
      "outputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
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
        },
        {
          "internalType": "bool",
          "name": "eligibleToVote",
          "type": "bool"
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
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "isEligibleToVote",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"age\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"documentNumber\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"residence\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"eligibleToVote\",\"type\":\"bool\"}],\"name\":\"ProfileRegistered\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"isEligibleToVote\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"profiles\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"age\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"documentNumber\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"residence\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"eligibleToVote\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_age\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_documentNumber\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_residence\",\"type\":\"string\"}],\"name\":\"registerUserProfile\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/UserProfile.sol\":\"UserProfile\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/UserProfile.sol\":{\"keccak256\":\"0x59e74287b41f949b64827e266df02686bcf6c4b3eb76e6eed227f4ced9eff166\",\"urls\":[\"bzz-raw://4b64f306e32e319a79799c993b675fb356605b45038a225ca5887f2438d00a84\",\"dweb:/ipfs/QmTZ2mFcvtCCSreWcCBcvMZZazYsKu6VJDtkbGWGvqUKw2\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50610c34806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80635db963081461004657806370bd8e9314610062578063c36fe3d614610092575b600080fd5b610060600480360381019061005b91906105fc565b6100c7565b005b61007c60048036038101906100779190610715565b610250565b604051610089919061075d565b60405180910390f35b6100ac60048036038101906100a79190610778565b61025b565b6040516100be96959493929190610842565b60405180910390f35b60006040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001848152602001838152602001600015158152509050600081908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816101999190610ac4565b506040820151816002015560608201518160030190816101b99190610ac4565b5060808201518160040190816101cf9190610ac4565b5060a08201518160050160006101000a81548160ff02191690831515021790555050503373ffffffffffffffffffffffffffffffffffffffff167f1a189abb57c764bcf505e7588ac71e6cfcb7d1395d874f795261628cf577c17c868686866000604051610241959493929190610b96565b60405180910390a25050505050565b600060019050919050565b6000818154811061026b57600080fd5b90600052602060002090600602016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546102b4906108e7565b80601f01602080910402602001604051908101604052809291908181526020018280546102e0906108e7565b801561032d5780601f106103025761010080835404028352916020019161032d565b820191906000526020600020905b81548152906001019060200180831161031057829003601f168201915b505050505090806002015490806003018054610348906108e7565b80601f0160208091040260200160405190810160405280929190818152602001828054610374906108e7565b80156103c15780601f10610396576101008083540402835291602001916103c1565b820191906000526020600020905b8154815290600101906020018083116103a457829003601f168201915b5050505050908060040180546103d6906108e7565b80601f0160208091040260200160405190810160405280929190818152602001828054610402906108e7565b801561044f5780601f106104245761010080835404028352916020019161044f565b820191906000526020600020905b81548152906001019060200180831161043257829003601f168201915b5050505050908060050160009054906101000a900460ff16905086565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104d38261048a565b810181811067ffffffffffffffff821117156104f2576104f161049b565b5b80604052505050565b600061050561046c565b905061051182826104ca565b919050565b600067ffffffffffffffff8211156105315761053061049b565b5b61053a8261048a565b9050602081019050919050565b82818337600083830152505050565b600061056961056484610516565b6104fb565b90508281526020810184848401111561058557610584610485565b5b610590848285610547565b509392505050565b600082601f8301126105ad576105ac610480565b5b81356105bd848260208601610556565b91505092915050565b6000819050919050565b6105d9816105c6565b81146105e457600080fd5b50565b6000813590506105f6816105d0565b92915050565b6000806000806080858703121561061657610615610476565b5b600085013567ffffffffffffffff8111156106345761063361047b565b5b61064087828801610598565b9450506020610651878288016105e7565b935050604085013567ffffffffffffffff8111156106725761067161047b565b5b61067e87828801610598565b925050606085013567ffffffffffffffff81111561069f5761069e61047b565b5b6106ab87828801610598565b91505092959194509250565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106e2826106b7565b9050919050565b6106f2816106d7565b81146106fd57600080fd5b50565b60008135905061070f816106e9565b92915050565b60006020828403121561072b5761072a610476565b5b600061073984828501610700565b91505092915050565b60008115159050919050565b61075781610742565b82525050565b6000602082019050610772600083018461074e565b92915050565b60006020828403121561078e5761078d610476565b5b600061079c848285016105e7565b91505092915050565b6107ae816106d7565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107ee5780820151818401526020810190506107d3565b60008484015250505050565b6000610805826107b4565b61080f81856107bf565b935061081f8185602086016107d0565b6108288161048a565b840191505092915050565b61083c816105c6565b82525050565b600060c08201905061085760008301896107a5565b818103602083015261086981886107fa565b90506108786040830187610833565b818103606083015261088a81866107fa565b9050818103608083015261089e81856107fa565b90506108ad60a083018461074e565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806108ff57607f821691505b602082108103610912576109116108b8565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261097a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261093d565b610984868361093d565b95508019841693508086168417925050509392505050565b6000819050919050565b60006109c16109bc6109b7846105c6565b61099c565b6105c6565b9050919050565b6000819050919050565b6109db836109a6565b6109ef6109e7826109c8565b84845461094a565b825550505050565b600090565b610a046109f7565b610a0f8184846109d2565b505050565b5b81811015610a3357610a286000826109fc565b600181019050610a15565b5050565b601f821115610a7857610a4981610918565b610a528461092d565b81016020851015610a61578190505b610a75610a6d8561092d565b830182610a14565b50505b505050565b600082821c905092915050565b6000610a9b60001984600802610a7d565b1980831691505092915050565b6000610ab48383610a8a565b9150826002028217905092915050565b610acd826107b4565b67ffffffffffffffff811115610ae657610ae561049b565b5b610af082546108e7565b610afb828285610a37565b600060209050601f831160018114610b2e5760008415610b1c578287015190505b610b268582610aa8565b865550610b8e565b601f198416610b3c86610918565b60005b82811015610b6457848901518255600182019150602085019450602081019050610b3f565b86831015610b815784890151610b7d601f891682610a8a565b8355505b6001600288020188555050505b505050505050565b600060a0820190508181036000830152610bb081886107fa565b9050610bbf6020830187610833565b8181036040830152610bd181866107fa565b90508181036060830152610be581856107fa565b9050610bf4608083018461074e565b969550505050505056fea26469706673582212201fbdb0e543cfbdaf6789f188b41c78175c7c1ee8879b37d62c2d5f6350f576e664736f6c63430008130033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80635db963081461004657806370bd8e9314610062578063c36fe3d614610092575b600080fd5b610060600480360381019061005b91906105fc565b6100c7565b005b61007c60048036038101906100779190610715565b610250565b604051610089919061075d565b60405180910390f35b6100ac60048036038101906100a79190610778565b61025b565b6040516100be96959493929190610842565b60405180910390f35b60006040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001848152602001838152602001600015158152509050600081908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816101999190610ac4565b506040820151816002015560608201518160030190816101b99190610ac4565b5060808201518160040190816101cf9190610ac4565b5060a08201518160050160006101000a81548160ff02191690831515021790555050503373ffffffffffffffffffffffffffffffffffffffff167f1a189abb57c764bcf505e7588ac71e6cfcb7d1395d874f795261628cf577c17c868686866000604051610241959493929190610b96565b60405180910390a25050505050565b600060019050919050565b6000818154811061026b57600080fd5b90600052602060002090600602016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546102b4906108e7565b80601f01602080910402602001604051908101604052809291908181526020018280546102e0906108e7565b801561032d5780601f106103025761010080835404028352916020019161032d565b820191906000526020600020905b81548152906001019060200180831161031057829003601f168201915b505050505090806002015490806003018054610348906108e7565b80601f0160208091040260200160405190810160405280929190818152602001828054610374906108e7565b80156103c15780601f10610396576101008083540402835291602001916103c1565b820191906000526020600020905b8154815290600101906020018083116103a457829003601f168201915b5050505050908060040180546103d6906108e7565b80601f0160208091040260200160405190810160405280929190818152602001828054610402906108e7565b801561044f5780601f106104245761010080835404028352916020019161044f565b820191906000526020600020905b81548152906001019060200180831161043257829003601f168201915b5050505050908060050160009054906101000a900460ff16905086565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104d38261048a565b810181811067ffffffffffffffff821117156104f2576104f161049b565b5b80604052505050565b600061050561046c565b905061051182826104ca565b919050565b600067ffffffffffffffff8211156105315761053061049b565b5b61053a8261048a565b9050602081019050919050565b82818337600083830152505050565b600061056961056484610516565b6104fb565b90508281526020810184848401111561058557610584610485565b5b610590848285610547565b509392505050565b600082601f8301126105ad576105ac610480565b5b81356105bd848260208601610556565b91505092915050565b6000819050919050565b6105d9816105c6565b81146105e457600080fd5b50565b6000813590506105f6816105d0565b92915050565b6000806000806080858703121561061657610615610476565b5b600085013567ffffffffffffffff8111156106345761063361047b565b5b61064087828801610598565b9450506020610651878288016105e7565b935050604085013567ffffffffffffffff8111156106725761067161047b565b5b61067e87828801610598565b925050606085013567ffffffffffffffff81111561069f5761069e61047b565b5b6106ab87828801610598565b91505092959194509250565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106e2826106b7565b9050919050565b6106f2816106d7565b81146106fd57600080fd5b50565b60008135905061070f816106e9565b92915050565b60006020828403121561072b5761072a610476565b5b600061073984828501610700565b91505092915050565b60008115159050919050565b61075781610742565b82525050565b6000602082019050610772600083018461074e565b92915050565b60006020828403121561078e5761078d610476565b5b600061079c848285016105e7565b91505092915050565b6107ae816106d7565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107ee5780820151818401526020810190506107d3565b60008484015250505050565b6000610805826107b4565b61080f81856107bf565b935061081f8185602086016107d0565b6108288161048a565b840191505092915050565b61083c816105c6565b82525050565b600060c08201905061085760008301896107a5565b818103602083015261086981886107fa565b90506108786040830187610833565b818103606083015261088a81866107fa565b9050818103608083015261089e81856107fa565b90506108ad60a083018461074e565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806108ff57607f821691505b602082108103610912576109116108b8565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261097a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261093d565b610984868361093d565b95508019841693508086168417925050509392505050565b6000819050919050565b60006109c16109bc6109b7846105c6565b61099c565b6105c6565b9050919050565b6000819050919050565b6109db836109a6565b6109ef6109e7826109c8565b84845461094a565b825550505050565b600090565b610a046109f7565b610a0f8184846109d2565b505050565b5b81811015610a3357610a286000826109fc565b600181019050610a15565b5050565b601f821115610a7857610a4981610918565b610a528461092d565b81016020851015610a61578190505b610a75610a6d8561092d565b830182610a14565b50505b505050565b600082821c905092915050565b6000610a9b60001984600802610a7d565b1980831691505092915050565b6000610ab48383610a8a565b9150826002028217905092915050565b610acd826107b4565b67ffffffffffffffff811115610ae657610ae561049b565b5b610af082546108e7565b610afb828285610a37565b600060209050601f831160018114610b2e5760008415610b1c578287015190505b610b268582610aa8565b865550610b8e565b601f198416610b3c86610918565b60005b82811015610b6457848901518255600182019150602085019450602081019050610b3f565b86831015610b815784890151610b7d601f891682610a8a565b8355505b6001600288020188555050505b505050505050565b600060a0820190508181036000830152610bb081886107fa565b9050610bbf6020830187610833565b8181036040830152610bd181866107fa565b90508181036060830152610be581856107fa565b9050610bf4608083018461074e565b969550505050505056fea26469706673582212201fbdb0e543cfbdaf6789f188b41c78175c7c1ee8879b37d62c2d5f6350f576e664736f6c63430008130033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:13810:2",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:2",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:2"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "40:6:2",
                "type": ""
              }
            ],
            "src": "7:75:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:2"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:2"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "423:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "440:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "443:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "433:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "433:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "433:12:2"
                }
              ]
            },
            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            "nodeType": "YulFunctionDefinition",
            "src": "334:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "546:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "563:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "566:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "556:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "556:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "556:12:2"
                }
              ]
            },
            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
            "nodeType": "YulFunctionDefinition",
            "src": "457:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "628:54:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "638:38:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "656:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "663:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "652:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "652:14:2"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "672:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "668:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "668:7:2"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "648:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "648:28:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "638:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "round_up_to_mul_of_32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "611:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "621:6:2",
                "type": ""
              }
            ],
            "src": "580:102:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "716:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "733:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "736:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "726:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "726:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "726:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "830:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "833:4:2",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "823:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "823:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "823:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "854:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "857:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "847:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "847:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "847:15:2"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "688:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "917:238:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "927:58:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "949:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "979:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "957:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "957:27:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "945:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "945:40:2"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "931:10:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1096:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "1098:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1098:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1098:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "1039:10:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1051:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "1036:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1036:34:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "1075:10:2"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "1087:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "1072:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1072:22:2"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "1033:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1033:62:2"
                  },
                  "nodeType": "YulIf",
                  "src": "1030:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1134:2:2",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "1138:10:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1127:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1127:22:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1127:22:2"
                }
              ]
            },
            "name": "finalize_allocation",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "903:6:2",
                "type": ""
              },
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "911:4:2",
                "type": ""
              }
            ],
            "src": "874:281:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1202:88:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1212:30:2",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "allocate_unbounded",
                      "nodeType": "YulIdentifier",
                      "src": "1222:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1222:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "1212:6:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "1271:6:2"
                      },
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "1279:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "finalize_allocation",
                      "nodeType": "YulIdentifier",
                      "src": "1251:19:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1251:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1251:33:2"
                }
              ]
            },
            "name": "allocate_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "1186:4:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "1195:6:2",
                "type": ""
              }
            ],
            "src": "1161:129:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1363:241:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1468:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "1470:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1470:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1470:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1440:6:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1448:18:2",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1437:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1437:30:2"
                  },
                  "nodeType": "YulIf",
                  "src": "1434:56:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1500:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1530:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "round_up_to_mul_of_32",
                      "nodeType": "YulIdentifier",
                      "src": "1508:21:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1508:29:2"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "1500:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1574:23:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "1586:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1592:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1582:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1582:15:2"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "1574:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_allocation_size_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1347:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "1358:4:2",
                "type": ""
              }
            ],
            "src": "1296:308:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1674:82:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "1697:3:2"
                      },
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "1702:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1707:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "1684:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1684:30:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1684:30:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "1734:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1739:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1730:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1730:16:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1748:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1723:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1723:27:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1723:27:2"
                }
              ]
            },
            "name": "copy_calldata_to_memory_with_cleanup",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "1656:3:2",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "1661:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1666:6:2",
                "type": ""
              }
            ],
            "src": "1610:146:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1846:341:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1856:75:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1923:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "1881:41:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1881:49:2"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "1865:15:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1865:66:2"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "1856:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "1947:5:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1954:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1940:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1940:21:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1940:21:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1970:27:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "1985:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1992:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1981:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1981:16:2"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "1974:3:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2035:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            "nodeType": "YulIdentifier",
                            "src": "2037:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2037:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2037:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "2016:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2021:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2012:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2012:16:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2030:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2009:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2009:25:2"
                  },
                  "nodeType": "YulIf",
                  "src": "2006:112:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "2164:3:2"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "2169:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2174:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "copy_calldata_to_memory_with_cleanup",
                      "nodeType": "YulIdentifier",
                      "src": "2127:36:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2127:54:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2127:54:2"
                }
              ]
            },
            "name": "abi_decode_available_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "1819:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1824:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1832:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "1840:5:2",
                "type": ""
              }
            ],
            "src": "1762:425:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2269:278:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2318:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulIdentifier",
                            "src": "2320:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2320:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2320:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2297:6:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2305:4:2",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2293:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2293:17:2"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "2312:3:2"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "2289:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2289:27:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2282:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2282:35:2"
                  },
                  "nodeType": "YulIf",
                  "src": "2279:122:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2410:34:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2437:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2424:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2424:20:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "2414:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2453:88:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "2514:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2522:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2510:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2510:17:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2529:6:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2537:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "2462:47:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2462:79:2"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "2453:5:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2247:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2255:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "2263:5:2",
                "type": ""
              }
            ],
            "src": "2207:340:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2598:32:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2608:16:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2619:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "2608:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2580:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "2590:7:2",
                "type": ""
              }
            ],
            "src": "2553:77:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2679:79:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2736:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2745:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2748:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2738:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2738:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2738:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2702:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "2727:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "2709:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2709:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "2699:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2699:35:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2692:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2692:43:2"
                  },
                  "nodeType": "YulIf",
                  "src": "2689:63:2"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2672:5:2",
                "type": ""
              }
            ],
            "src": "2636:122:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2816:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2826:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2848:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2835:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2835:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2826:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2891:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "2864:26:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2864:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2864:33:2"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2794:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2802:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2810:5:2",
                "type": ""
              }
            ],
            "src": "2764:139:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3056:1158:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3103:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "3105:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3105:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3105:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3077:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3086:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3073:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3073:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3098:3:2",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3069:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3069:33:2"
                  },
                  "nodeType": "YulIf",
                  "src": "3066:120:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3196:287:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3211:45:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3242:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3253:1:2",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3238:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3238:17:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "3225:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3225:31:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3215:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3303:83:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "3305:77:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3305:79:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3305:79:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3275:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3283:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3272:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3272:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "3269:117:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3400:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3445:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3456:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3441:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3441:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3465:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "3410:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3410:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3400:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3493:118:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3508:16:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3522:2:2",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3512:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3538:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3573:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3584:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3569:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3569:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3593:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "3548:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3548:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "3538:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3621:288:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3636:46:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3667:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3678:2:2",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3663:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3663:18:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "3650:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3650:32:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3640:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3729:83:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "3731:77:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3731:79:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3731:79:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3701:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3709:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3698:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3698:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "3695:117:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3826:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3871:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3882:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3867:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3867:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3891:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "3836:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3836:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "3826:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3919:288:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3934:46:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3965:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3976:2:2",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3961:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3961:18:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "3948:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3948:32:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3938:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "4027:83:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "4029:77:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4029:79:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "4029:79:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3999:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4007:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3996:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3996:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "3993:117:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4124:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4169:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4180:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4165:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4165:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4189:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "4134:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4134:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "4124:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_string_memory_ptrt_uint256t_string_memory_ptrt_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3002:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3013:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3025:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3033:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "3041:6:2",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "3049:6:2",
                "type": ""
              }
            ],
            "src": "2909:1305:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4265:81:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4275:65:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4290:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4297:42:2",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "4286:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4286:54:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "4275:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4247:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "4257:7:2",
                "type": ""
              }
            ],
            "src": "4220:126:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4397:51:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4407:35:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4436:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "4418:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4418:24:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "4407:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4379:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "4389:7:2",
                "type": ""
              }
            ],
            "src": "4352:96:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4497:79:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4554:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4563:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4566:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4556:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4556:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4556:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4520:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4545:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "4527:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4527:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "4517:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4517:35:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "4510:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4510:43:2"
                  },
                  "nodeType": "YulIf",
                  "src": "4507:63:2"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4490:5:2",
                "type": ""
              }
            ],
            "src": "4454:122:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4634:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4644:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4666:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4653:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4653:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "4644:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4709:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "4682:26:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4682:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4682:33:2"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "4612:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4620:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4628:5:2",
                "type": ""
              }
            ],
            "src": "4582:139:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4793:263:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4839:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "4841:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4841:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4841:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4814:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4823:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4810:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4810:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4835:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4806:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4806:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "4803:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4932:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4947:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4961:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4951:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4976:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5011:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5022:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5007:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5007:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5031:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4986:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4986:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4976:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4763:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4774:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4786:6:2",
                "type": ""
              }
            ],
            "src": "4727:329:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5104:48:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5114:32:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5139:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "5132:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5132:13:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "5125:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5125:21:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "5114:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5086:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "5096:7:2",
                "type": ""
              }
            ],
            "src": "5062:90:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5217:50:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5234:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5254:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "5239:14:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5239:21:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5227:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5227:34:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5227:34:2"
                }
              ]
            },
            "name": "abi_encode_t_bool_to_t_bool_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5205:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5212:3:2",
                "type": ""
              }
            ],
            "src": "5158:109:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5365:118:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5375:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5387:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5398:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5383:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5383:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5375:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5449:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5462:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5473:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5458:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5458:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5411:37:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5411:65:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5411:65:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5337:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5349:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5360:4:2",
                "type": ""
              }
            ],
            "src": "5273:210:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5555:263:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5601:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "5603:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5603:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5603:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5576:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5585:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5572:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5572:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5597:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5568:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5568:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "5565:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5694:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5709:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5723:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5713:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5738:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5773:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5784:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5769:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5769:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5793:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "5748:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5748:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5738:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5525:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5536:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5548:6:2",
                "type": ""
              }
            ],
            "src": "5489:329:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5889:53:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5906:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5929:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "5911:17:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5911:24:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5899:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5899:37:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5899:37:2"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5877:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5884:3:2",
                "type": ""
              }
            ],
            "src": "5824:118:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6007:40:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6018:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6034:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "6028:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6028:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "6018:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5990:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "6000:6:2",
                "type": ""
              }
            ],
            "src": "5948:99:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6149:73:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6166:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6171:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6159:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6159:19:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6159:19:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6187:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6206:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6211:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6202:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6202:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "6187:11:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6121:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "6126:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "6137:11:2",
                "type": ""
              }
            ],
            "src": "6053:169:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6290:184:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6300:10:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "6309:1:2",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "6304:1:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6369:63:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "6394:3:2"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "6399:1:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "6390:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6390:11:2"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "6413:3:2"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "6418:1:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "6409:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6409:11:2"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "6403:5:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6403:18:2"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6383:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6383:39:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6383:39:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "6330:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6333:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "6327:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6327:13:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "6341:19:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "6343:15:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "6352:1:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6355:2:2",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6348:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6348:10:2"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "6343:1:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "6323:3:2",
                    "statements": []
                  },
                  "src": "6319:113:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "6452:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "6457:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6448:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6448:16:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6466:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6441:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6441:27:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6441:27:2"
                }
              ]
            },
            "name": "copy_memory_to_memory_with_cleanup",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "6272:3:2",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "6277:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "6282:6:2",
                "type": ""
              }
            ],
            "src": "6228:246:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6572:285:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6582:53:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6629:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "6596:32:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6596:39:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "6586:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6644:78:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6710:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6715:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6651:58:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6651:71:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "6644:3:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6770:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6777:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6766:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6766:16:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6784:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6789:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory_with_cleanup",
                      "nodeType": "YulIdentifier",
                      "src": "6731:34:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6731:65:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6731:65:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6805:46:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6816:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "6843:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "6821:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6821:29:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6812:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6812:39:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "6805:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6553:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6560:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6568:3:2",
                "type": ""
              }
            ],
            "src": "6480:377:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6928:53:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6945:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6968:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "6950:17:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6950:24:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6938:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6938:37:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6938:37:2"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6916:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6923:3:2",
                "type": ""
              }
            ],
            "src": "6863:118:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7279:744:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7289:27:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7301:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7312:3:2",
                        "type": "",
                        "value": "192"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7297:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7297:19:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7289:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "7370:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7383:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7394:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7379:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7379:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7326:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7326:71:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7326:71:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7418:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7429:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7414:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7414:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "7438:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7444:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7434:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7434:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7407:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7407:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7407:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7464:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "7536:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7545:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7472:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7472:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7464:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "7604:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7617:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7628:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7613:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7613:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7560:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7560:72:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7560:72:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7653:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7664:2:2",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7649:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7649:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "7673:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7679:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7669:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7669:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7642:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7642:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7642:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7699:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "7771:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7780:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7707:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7707:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7699:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7806:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7817:3:2",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7802:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7802:19:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "7827:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7833:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7823:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7823:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7795:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7795:49:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7795:49:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7853:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "7925:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7934:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7861:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7861:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7853:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value5",
                        "nodeType": "YulIdentifier",
                        "src": "7987:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8000:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8011:3:2",
                            "type": "",
                            "value": "160"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7996:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7996:19:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7949:37:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7949:67:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7949:67:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_string_memory_ptr_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_bool__to_t_address_t_string_memory_ptr_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7211:9:2",
                "type": ""
              },
              {
                "name": "value5",
                "nodeType": "YulTypedName",
                "src": "7223:6:2",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "7231:6:2",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "7239:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "7247:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "7255:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7263:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7274:4:2",
                "type": ""
              }
            ],
            "src": "6987:1036:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8057:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8074:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8077:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8067:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8067:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8067:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8171:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8174:4:2",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8164:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8164:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8164:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8195:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8198:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "8188:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8188:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8188:15:2"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "8029:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8266:269:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8276:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "8290:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8296:1:2",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "8286:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8286:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "8276:6:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8307:38:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "8337:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8343:1:2",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "8333:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8333:12:2"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "8311:18:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8384:51:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "8398:27:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "8412:6:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8420:4:2",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "8408:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8408:17:2"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "8398:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "8364:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "8357:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8357:26:2"
                  },
                  "nodeType": "YulIf",
                  "src": "8354:81:2"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8487:42:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "8501:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8501:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8501:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "8451:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "8474:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8482:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "8471:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8471:14:2"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "8448:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8448:38:2"
                  },
                  "nodeType": "YulIf",
                  "src": "8445:84:2"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "8250:4:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "8259:6:2",
                "type": ""
              }
            ],
            "src": "8215:320:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8595:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8605:11:2",
                  "value": {
                    "name": "ptr",
                    "nodeType": "YulIdentifier",
                    "src": "8613:3:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "8605:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8633:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "8636:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8626:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8626:14:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8626:14:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8649:26:2",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8667:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8670:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "keccak256",
                      "nodeType": "YulIdentifier",
                      "src": "8657:9:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8657:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "8649:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_dataslot_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "8582:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "8590:4:2",
                "type": ""
              }
            ],
            "src": "8541:141:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8732:49:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8742:33:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "8760:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8767:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8756:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8756:14:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8772:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "8752:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8752:23:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "8742:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "divide_by_32_ceil",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8715:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "8725:6:2",
                "type": ""
              }
            ],
            "src": "8688:93:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8840:54:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8850:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "8875:4:2"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "8881:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "shl",
                      "nodeType": "YulIdentifier",
                      "src": "8871:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8871:16:2"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "8850:8:2"
                    }
                  ]
                }
              ]
            },
            "name": "shift_left_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "bits",
                "nodeType": "YulTypedName",
                "src": "8815:4:2",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8821:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "8831:8:2",
                "type": ""
              }
            ],
            "src": "8787:107:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8976:317:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8986:35:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBytes",
                        "nodeType": "YulIdentifier",
                        "src": "9007:10:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9019:1:2",
                        "type": "",
                        "value": "8"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "9003:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9003:18:2"
                  },
                  "variables": [
                    {
                      "name": "shiftBits",
                      "nodeType": "YulTypedName",
                      "src": "8990:9:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9030:109:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "9061:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9072:66:2",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "9042:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9042:97:2"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "9034:4:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9148:51:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "9179:9:2"
                      },
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "9190:8:2"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "9160:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9160:39:2"
                  },
                  "variableNames": [
                    {
                      "name": "toInsert",
                      "nodeType": "YulIdentifier",
                      "src": "9148:8:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9208:30:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "9221:5:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "9232:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "9228:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9228:9:2"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "9217:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9217:21:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "9208:5:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9247:40:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "9260:5:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "toInsert",
                            "nodeType": "YulIdentifier",
                            "src": "9271:8:2"
                          },
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "9281:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "9267:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9267:19:2"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "9257:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9257:30:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "9247:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "update_byte_slice_dynamic32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8937:5:2",
                "type": ""
              },
              {
                "name": "shiftBytes",
                "nodeType": "YulTypedName",
                "src": "8944:10:2",
                "type": ""
              },
              {
                "name": "toInsert",
                "nodeType": "YulTypedName",
                "src": "8956:8:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "8969:6:2",
                "type": ""
              }
            ],
            "src": "8900:393:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9331:28:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9341:12:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "9348:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "9341:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "identity",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "9317:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "9327:3:2",
                "type": ""
              }
            ],
            "src": "9299:60:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9425:82:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9435:66:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "9493:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "9475:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9475:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "identity",
                          "nodeType": "YulIdentifier",
                          "src": "9466:8:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9466:34:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "9448:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9448:53:2"
                  },
                  "variableNames": [
                    {
                      "name": "converted",
                      "nodeType": "YulIdentifier",
                      "src": "9435:9:2"
                    }
                  ]
                }
              ]
            },
            "name": "convert_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "9405:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "converted",
                "nodeType": "YulTypedName",
                "src": "9415:9:2",
                "type": ""
              }
            ],
            "src": "9365:142:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9560:28:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9570:12:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "9577:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "9570:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "prepare_store_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "9546:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "9556:3:2",
                "type": ""
              }
            ],
            "src": "9513:75:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9670:193:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9680:63:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value_0",
                        "nodeType": "YulIdentifier",
                        "src": "9735:7:2"
                      }
                    ],
                    "functionName": {
                      "name": "convert_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "9704:30:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9704:39:2"
                  },
                  "variables": [
                    {
                      "name": "convertedValue_0",
                      "nodeType": "YulTypedName",
                      "src": "9684:16:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "9759:4:2"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "slot",
                                "nodeType": "YulIdentifier",
                                "src": "9799:4:2"
                              }
                            ],
                            "functionName": {
                              "name": "sload",
                              "nodeType": "YulIdentifier",
                              "src": "9793:5:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9793:11:2"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "9806:6:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "convertedValue_0",
                                "nodeType": "YulIdentifier",
                                "src": "9838:16:2"
                              }
                            ],
                            "functionName": {
                              "name": "prepare_store_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "9814:23:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9814:41:2"
                          }
                        ],
                        "functionName": {
                          "name": "update_byte_slice_dynamic32",
                          "nodeType": "YulIdentifier",
                          "src": "9765:27:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9765:91:2"
                      }
                    ],
                    "functionName": {
                      "name": "sstore",
                      "nodeType": "YulIdentifier",
                      "src": "9752:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9752:105:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9752:105:2"
                }
              ]
            },
            "name": "update_storage_value_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "9647:4:2",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "9653:6:2",
                "type": ""
              },
              {
                "name": "value_0",
                "nodeType": "YulTypedName",
                "src": "9661:7:2",
                "type": ""
              }
            ],
            "src": "9594:269:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9918:24:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9928:8:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "9935:1:2",
                    "type": "",
                    "value": "0"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "9928:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "zero_value_for_split_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "9914:3:2",
                "type": ""
              }
            ],
            "src": "9869:73:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10001:136:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "10011:46:2",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "zero_value_for_split_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "10025:30:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10025:32:2"
                  },
                  "variables": [
                    {
                      "name": "zero_0",
                      "nodeType": "YulTypedName",
                      "src": "10015:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "10110:4:2"
                      },
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "10116:6:2"
                      },
                      {
                        "name": "zero_0",
                        "nodeType": "YulIdentifier",
                        "src": "10124:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "update_storage_value_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "10066:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10066:65:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10066:65:2"
                }
              ]
            },
            "name": "storage_set_to_zero_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "9987:4:2",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "9993:6:2",
                "type": ""
              }
            ],
            "src": "9948:189:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10193:136:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10260:63:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "10304:5:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10311:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "storage_set_to_zero_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "10274:29:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10274:39:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10274:39:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "start",
                        "nodeType": "YulIdentifier",
                        "src": "10213:5:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "10220:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "10210:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10210:14:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "10225:26:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "10227:22:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "10240:5:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10247:1:2",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10236:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10236:13:2"
                        },
                        "variableNames": [
                          {
                            "name": "start",
                            "nodeType": "YulIdentifier",
                            "src": "10227:5:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "10207:2:2",
                    "statements": []
                  },
                  "src": "10203:120:2"
                }
              ]
            },
            "name": "clear_storage_range_t_bytes1",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "start",
                "nodeType": "YulTypedName",
                "src": "10181:5:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "10188:3:2",
                "type": ""
              }
            ],
            "src": "10143:186:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10414:464:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10440:431:2",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "10454:54:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "10502:5:2"
                            }
                          ],
                          "functionName": {
                            "name": "array_dataslot_t_string_storage",
                            "nodeType": "YulIdentifier",
                            "src": "10470:31:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10470:38:2"
                        },
                        "variables": [
                          {
                            "name": "dataArea",
                            "nodeType": "YulTypedName",
                            "src": "10458:8:2",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "10521:63:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulIdentifier",
                              "src": "10544:8:2"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "startIndex",
                                  "nodeType": "YulIdentifier",
                                  "src": "10572:10:2"
                                }
                              ],
                              "functionName": {
                                "name": "divide_by_32_ceil",
                                "nodeType": "YulIdentifier",
                                "src": "10554:17:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10554:29:2"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10540:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10540:44:2"
                        },
                        "variables": [
                          {
                            "name": "deleteStart",
                            "nodeType": "YulTypedName",
                            "src": "10525:11:2",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "10741:27:2",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "10743:23:2",
                              "value": {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "10758:8:2"
                              },
                              "variableNames": [
                                {
                                  "name": "deleteStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "10743:11:2"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "startIndex",
                              "nodeType": "YulIdentifier",
                              "src": "10725:10:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10737:2:2",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "10722:2:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10722:18:2"
                        },
                        "nodeType": "YulIf",
                        "src": "10719:49:2"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulIdentifier",
                              "src": "10810:11:2"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "10827:8:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "len",
                                      "nodeType": "YulIdentifier",
                                      "src": "10855:3:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "divide_by_32_ceil",
                                    "nodeType": "YulIdentifier",
                                    "src": "10837:17:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10837:22:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10823:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10823:37:2"
                            }
                          ],
                          "functionName": {
                            "name": "clear_storage_range_t_bytes1",
                            "nodeType": "YulIdentifier",
                            "src": "10781:28:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10781:80:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10781:80:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "10431:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10436:2:2",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "10428:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10428:11:2"
                  },
                  "nodeType": "YulIf",
                  "src": "10425:446:2"
                }
              ]
            },
            "name": "clean_up_bytearray_end_slots_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "10390:5:2",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "10397:3:2",
                "type": ""
              },
              {
                "name": "startIndex",
                "nodeType": "YulTypedName",
                "src": "10402:10:2",
                "type": ""
              }
            ],
            "src": "10335:543:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10947:54:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10957:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "10982:4:2"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "10988:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "10978:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10978:16:2"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "10957:8:2"
                    }
                  ]
                }
              ]
            },
            "name": "shift_right_unsigned_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "bits",
                "nodeType": "YulTypedName",
                "src": "10922:4:2",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "10928:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "10938:8:2",
                "type": ""
              }
            ],
            "src": "10884:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11058:118:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "11068:68:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "11117:1:2",
                                "type": "",
                                "value": "8"
                              },
                              {
                                "name": "bytes",
                                "nodeType": "YulIdentifier",
                                "src": "11120:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "11113:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11113:13:2"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "11132:1:2",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "11128:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11128:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "shift_right_unsigned_dynamic",
                          "nodeType": "YulIdentifier",
                          "src": "11084:28:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11084:51:2"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "11080:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11080:56:2"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "11072:4:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11145:25:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "11159:4:2"
                      },
                      {
                        "name": "mask",
                        "nodeType": "YulIdentifier",
                        "src": "11165:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "11155:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11155:15:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "11145:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "mask_bytes_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "11035:4:2",
                "type": ""
              },
              {
                "name": "bytes",
                "nodeType": "YulTypedName",
                "src": "11041:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "11051:6:2",
                "type": ""
              }
            ],
            "src": "11007:169:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11262:214:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11395:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "11422:4:2"
                      },
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "11428:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "mask_bytes_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "11403:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11403:29:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "11395:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11441:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "11452:4:2"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11462:1:2",
                            "type": "",
                            "value": "2"
                          },
                          {
                            "name": "len",
                            "nodeType": "YulIdentifier",
                            "src": "11465:3:2"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nodeType": "YulIdentifier",
                          "src": "11458:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11458:11:2"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "11449:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11449:21:2"
                  },
                  "variableNames": [
                    {
                      "name": "used",
                      "nodeType": "YulIdentifier",
                      "src": "11441:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "extract_used_part_and_set_length_of_short_byte_array",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "11243:4:2",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "11249:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "used",
                "nodeType": "YulTypedName",
                "src": "11257:4:2",
                "type": ""
              }
            ],
            "src": "11181:295:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11573:1303:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "11584:51:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "11631:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "11598:32:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11598:37:2"
                  },
                  "variables": [
                    {
                      "name": "newLen",
                      "nodeType": "YulTypedName",
                      "src": "11588:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11720:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "11722:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11722:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11722:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "11692:6:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11700:18:2",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "11689:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11689:30:2"
                  },
                  "nodeType": "YulIf",
                  "src": "11686:56:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "11752:52:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "slot",
                            "nodeType": "YulIdentifier",
                            "src": "11798:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "sload",
                          "nodeType": "YulIdentifier",
                          "src": "11792:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11792:11:2"
                      }
                    ],
                    "functionName": {
                      "name": "extract_byte_array_length",
                      "nodeType": "YulIdentifier",
                      "src": "11766:25:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11766:38:2"
                  },
                  "variables": [
                    {
                      "name": "oldLen",
                      "nodeType": "YulTypedName",
                      "src": "11756:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "11897:4:2"
                      },
                      {
                        "name": "oldLen",
                        "nodeType": "YulIdentifier",
                        "src": "11903:6:2"
                      },
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "11911:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "clean_up_bytearray_end_slots_t_string_storage",
                      "nodeType": "YulIdentifier",
                      "src": "11851:45:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11851:67:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11851:67:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "11928:18:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "11945:1:2",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulTypedName",
                      "src": "11932:9:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11956:17:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "11969:4:2",
                    "type": "",
                    "value": "0x20"
                  },
                  "variableNames": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulIdentifier",
                      "src": "11956:9:2"
                    }
                  ]
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "12020:611:2",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "12034:37:2",
                            "value": {
                              "arguments": [
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "12053:6:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "12065:4:2",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "12061:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "12061:9:2"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "12049:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12049:22:2"
                            },
                            "variables": [
                              {
                                "name": "loopEnd",
                                "nodeType": "YulTypedName",
                                "src": "12038:7:2",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "12085:51:2",
                            "value": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "12131:4:2"
                                }
                              ],
                              "functionName": {
                                "name": "array_dataslot_t_string_storage",
                                "nodeType": "YulIdentifier",
                                "src": "12099:31:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12099:37:2"
                            },
                            "variables": [
                              {
                                "name": "dstPtr",
                                "nodeType": "YulTypedName",
                                "src": "12089:6:2",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "12149:10:2",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12158:1:2",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "i",
                                "nodeType": "YulTypedName",
                                "src": "12153:1:2",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "12217:163:2",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "12242:6:2"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nodeType": "YulIdentifier",
                                                "src": "12260:3:2"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nodeType": "YulIdentifier",
                                                "src": "12265:9:2"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "12256:3:2"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "12256:19:2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nodeType": "YulIdentifier",
                                          "src": "12250:5:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "12250:26:2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "12235:6:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "12235:42:2"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "12235:42:2"
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "12294:24:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "12308:6:2"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "12316:1:2",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "12304:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "12304:14:2"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "dstPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "12294:6:2"
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "12335:31:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "12352:9:2"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "12363:2:2",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "12348:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "12348:18:2"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "srcOffset",
                                      "nodeType": "YulIdentifier",
                                      "src": "12335:9:2"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "12183:1:2"
                                },
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "12186:7:2"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "12180:2:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12180:14:2"
                            },
                            "nodeType": "YulForLoop",
                            "post": {
                              "nodeType": "YulBlock",
                              "src": "12195:21:2",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "12197:17:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "12206:1:2"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "12209:4:2",
                                        "type": "",
                                        "value": "0x20"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "12202:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "12202:12:2"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "12197:1:2"
                                    }
                                  ]
                                }
                              ]
                            },
                            "pre": {
                              "nodeType": "YulBlock",
                              "src": "12176:3:2",
                              "statements": []
                            },
                            "src": "12172:208:2"
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "12416:156:2",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "12434:43:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "12461:3:2"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "12466:9:2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "12457:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "12457:19:2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "12451:5:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "12451:26:2"
                                  },
                                  "variables": [
                                    {
                                      "name": "lastValue",
                                      "nodeType": "YulTypedName",
                                      "src": "12438:9:2",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "12501:6:2"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "lastValue",
                                            "nodeType": "YulIdentifier",
                                            "src": "12528:9:2"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "newLen",
                                                "nodeType": "YulIdentifier",
                                                "src": "12543:6:2"
                                              },
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "12551:4:2",
                                                "type": "",
                                                "value": "0x1f"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "and",
                                              "nodeType": "YulIdentifier",
                                              "src": "12539:3:2"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "12539:17:2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mask_bytes_dynamic",
                                          "nodeType": "YulIdentifier",
                                          "src": "12509:18:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "12509:48:2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "12494:6:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "12494:64:2"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "12494:64:2"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "12399:7:2"
                                },
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "12408:6:2"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "12396:2:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12396:19:2"
                            },
                            "nodeType": "YulIf",
                            "src": "12393:179:2"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "12592:4:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "newLen",
                                          "nodeType": "YulIdentifier",
                                          "src": "12606:6:2"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "12614:1:2",
                                          "type": "",
                                          "value": "2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "12602:3:2"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "12602:14:2"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "12618:1:2",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "12598:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "12598:22:2"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "12585:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12585:36:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "12585:36:2"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "12013:618:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12018:1:2",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "12648:222:2",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "12662:14:2",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12675:1:2",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "12666:5:2",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "12699:67:2",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "12717:35:2",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "12736:3:2"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "12741:9:2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "12732:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "12732:19:2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "12726:5:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "12726:26:2"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "12717:5:2"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "12692:6:2"
                            },
                            "nodeType": "YulIf",
                            "src": "12689:77:2"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "12786:4:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "12845:5:2"
                                    },
                                    {
                                      "name": "newLen",
                                      "nodeType": "YulIdentifier",
                                      "src": "12852:6:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extract_used_part_and_set_length_of_short_byte_array",
                                    "nodeType": "YulIdentifier",
                                    "src": "12792:52:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "12792:67:2"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "12779:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12779:81:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "12779:81:2"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "12640:230:2",
                      "value": "default"
                    }
                  ],
                  "expression": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "11993:6:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12001:2:2",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "11990:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11990:14:2"
                  },
                  "nodeType": "YulSwitch",
                  "src": "11983:887:2"
                }
              ]
            },
            "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "11562:4:2",
                "type": ""
              },
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "11568:3:2",
                "type": ""
              }
            ],
            "src": "11481:1395:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13146:661:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13156:27:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13168:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13179:3:2",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13164:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13164:19:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13156:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13204:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13215:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13200:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13200:17:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13223:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13229:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "13219:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13219:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13193:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13193:47:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13193:47:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13249:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "13321:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13330:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13257:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13257:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13249:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "13389:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13402:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13413:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13398:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13398:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13345:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13345:72:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13345:72:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13438:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13449:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13434:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13434:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13458:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13464:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "13454:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13454:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13427:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13427:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13427:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13484:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "13556:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13565:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13492:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13492:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13484:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13591:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13602:2:2",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13587:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13587:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13611:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13617:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "13607:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13607:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13580:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13580:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13580:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13637:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "13709:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13718:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13645:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13645:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13637:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "13771:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13784:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13795:3:2",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13780:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13780:19:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13733:37:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13733:67:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13733:67:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_string_memory_ptr_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_bool__to_t_string_memory_ptr_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13086:9:2",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "13098:6:2",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "13106:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "13114:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "13122:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13130:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13141:4:2",
                "type": ""
              }
            ],
            "src": "12882:925:2"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory_with_cleanup(src, dst, length) {\n        calldatacopy(dst, src, length)\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_uint256t_string_memory_ptrt_string_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 64))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value2 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value3 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_address_t_string_memory_ptr_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_bool__to_t_address_t_string_memory_ptr_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_bool__fromStack_reversed(headStart , value5, value4, value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 192)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value3,  tail)\n\n        mstore(add(headStart, 128), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value4,  tail)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value5,  add(headStart, 160))\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_bool__to_t_string_memory_ptr_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_bool__fromStack_reversed(headStart , value4, value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 160)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        mstore(add(headStart, 64), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value2,  tail)\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value3,  tail)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value4,  add(headStart, 128))\n\n    }\n\n}\n",
      "id": 2,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "25:1880:1:-:0;;;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "25:1880:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;530:670;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1206:118;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;254:25;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;530:670;739:25;767:150;;;;;;;;788:10;767:150;;;;;;812:5;767:150;;;;831:4;767:150;;;;849:15;767:150;;;;878:10;767:150;;;;902:5;767:150;;;;;739:178;;927:8;941:10;927:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1024:10;993:160;;;1048:5;1067:4;1085:15;1114:10;1138:5;993:160;;;;;;;;;;:::i;:::-;;;;;;;;696:504;530:670;;;;:::o;1206:118::-;1290:4;1313;1306:11;;1206:118;;;:::o;254:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;7:75:2:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:102;621:6;672:2;668:7;663:2;656:5;652:14;648:28;638:38;;580:102;;;:::o;688:180::-;736:77;733:1;726:88;833:4;830:1;823:15;857:4;854:1;847:15;874:281;957:27;979:4;957:27;:::i;:::-;949:6;945:40;1087:6;1075:10;1072:22;1051:18;1039:10;1036:34;1033:62;1030:88;;;1098:18;;:::i;:::-;1030:88;1138:10;1134:2;1127:22;917:238;874:281;;:::o;1161:129::-;1195:6;1222:20;;:::i;:::-;1212:30;;1251:33;1279:4;1271:6;1251:33;:::i;:::-;1161:129;;;:::o;1296:308::-;1358:4;1448:18;1440:6;1437:30;1434:56;;;1470:18;;:::i;:::-;1434:56;1508:29;1530:6;1508:29;:::i;:::-;1500:37;;1592:4;1586;1582:15;1574:23;;1296:308;;;:::o;1610:146::-;1707:6;1702:3;1697;1684:30;1748:1;1739:6;1734:3;1730:16;1723:27;1610:146;;;:::o;1762:425::-;1840:5;1865:66;1881:49;1923:6;1881:49;:::i;:::-;1865:66;:::i;:::-;1856:75;;1954:6;1947:5;1940:21;1992:4;1985:5;1981:16;2030:3;2021:6;2016:3;2012:16;2009:25;2006:112;;;2037:79;;:::i;:::-;2006:112;2127:54;2174:6;2169:3;2164;2127:54;:::i;:::-;1846:341;1762:425;;;;;:::o;2207:340::-;2263:5;2312:3;2305:4;2297:6;2293:17;2289:27;2279:122;;2320:79;;:::i;:::-;2279:122;2437:6;2424:20;2462:79;2537:3;2529:6;2522:4;2514:6;2510:17;2462:79;:::i;:::-;2453:88;;2269:278;2207:340;;;;:::o;2553:77::-;2590:7;2619:5;2608:16;;2553:77;;;:::o;2636:122::-;2709:24;2727:5;2709:24;:::i;:::-;2702:5;2699:35;2689:63;;2748:1;2745;2738:12;2689:63;2636:122;:::o;2764:139::-;2810:5;2848:6;2835:20;2826:29;;2864:33;2891:5;2864:33;:::i;:::-;2764:139;;;;:::o;2909:1305::-;3025:6;3033;3041;3049;3098:3;3086:9;3077:7;3073:23;3069:33;3066:120;;;3105:79;;:::i;:::-;3066:120;3253:1;3242:9;3238:17;3225:31;3283:18;3275:6;3272:30;3269:117;;;3305:79;;:::i;:::-;3269:117;3410:63;3465:7;3456:6;3445:9;3441:22;3410:63;:::i;:::-;3400:73;;3196:287;3522:2;3548:53;3593:7;3584:6;3573:9;3569:22;3548:53;:::i;:::-;3538:63;;3493:118;3678:2;3667:9;3663:18;3650:32;3709:18;3701:6;3698:30;3695:117;;;3731:79;;:::i;:::-;3695:117;3836:63;3891:7;3882:6;3871:9;3867:22;3836:63;:::i;:::-;3826:73;;3621:288;3976:2;3965:9;3961:18;3948:32;4007:18;3999:6;3996:30;3993:117;;;4029:79;;:::i;:::-;3993:117;4134:63;4189:7;4180:6;4169:9;4165:22;4134:63;:::i;:::-;4124:73;;3919:288;2909:1305;;;;;;;:::o;4220:126::-;4257:7;4297:42;4290:5;4286:54;4275:65;;4220:126;;;:::o;4352:96::-;4389:7;4418:24;4436:5;4418:24;:::i;:::-;4407:35;;4352:96;;;:::o;4454:122::-;4527:24;4545:5;4527:24;:::i;:::-;4520:5;4517:35;4507:63;;4566:1;4563;4556:12;4507:63;4454:122;:::o;4582:139::-;4628:5;4666:6;4653:20;4644:29;;4682:33;4709:5;4682:33;:::i;:::-;4582:139;;;;:::o;4727:329::-;4786:6;4835:2;4823:9;4814:7;4810:23;4806:32;4803:119;;;4841:79;;:::i;:::-;4803:119;4961:1;4986:53;5031:7;5022:6;5011:9;5007:22;4986:53;:::i;:::-;4976:63;;4932:117;4727:329;;;;:::o;5062:90::-;5096:7;5139:5;5132:13;5125:21;5114:32;;5062:90;;;:::o;5158:109::-;5239:21;5254:5;5239:21;:::i;:::-;5234:3;5227:34;5158:109;;:::o;5273:210::-;5360:4;5398:2;5387:9;5383:18;5375:26;;5411:65;5473:1;5462:9;5458:17;5449:6;5411:65;:::i;:::-;5273:210;;;;:::o;5489:329::-;5548:6;5597:2;5585:9;5576:7;5572:23;5568:32;5565:119;;;5603:79;;:::i;:::-;5565:119;5723:1;5748:53;5793:7;5784:6;5773:9;5769:22;5748:53;:::i;:::-;5738:63;;5694:117;5489:329;;;;:::o;5824:118::-;5911:24;5929:5;5911:24;:::i;:::-;5906:3;5899:37;5824:118;;:::o;5948:99::-;6000:6;6034:5;6028:12;6018:22;;5948:99;;;:::o;6053:169::-;6137:11;6171:6;6166:3;6159:19;6211:4;6206:3;6202:14;6187:29;;6053:169;;;;:::o;6228:246::-;6309:1;6319:113;6333:6;6330:1;6327:13;6319:113;;;6418:1;6413:3;6409:11;6403:18;6399:1;6394:3;6390:11;6383:39;6355:2;6352:1;6348:10;6343:15;;6319:113;;;6466:1;6457:6;6452:3;6448:16;6441:27;6290:184;6228:246;;;:::o;6480:377::-;6568:3;6596:39;6629:5;6596:39;:::i;:::-;6651:71;6715:6;6710:3;6651:71;:::i;:::-;6644:78;;6731:65;6789:6;6784:3;6777:4;6770:5;6766:16;6731:65;:::i;:::-;6821:29;6843:6;6821:29;:::i;:::-;6816:3;6812:39;6805:46;;6572:285;6480:377;;;;:::o;6863:118::-;6950:24;6968:5;6950:24;:::i;:::-;6945:3;6938:37;6863:118;;:::o;6987:1036::-;7274:4;7312:3;7301:9;7297:19;7289:27;;7326:71;7394:1;7383:9;7379:17;7370:6;7326:71;:::i;:::-;7444:9;7438:4;7434:20;7429:2;7418:9;7414:18;7407:48;7472:78;7545:4;7536:6;7472:78;:::i;:::-;7464:86;;7560:72;7628:2;7617:9;7613:18;7604:6;7560:72;:::i;:::-;7679:9;7673:4;7669:20;7664:2;7653:9;7649:18;7642:48;7707:78;7780:4;7771:6;7707:78;:::i;:::-;7699:86;;7833:9;7827:4;7823:20;7817:3;7806:9;7802:19;7795:49;7861:78;7934:4;7925:6;7861:78;:::i;:::-;7853:86;;7949:67;8011:3;8000:9;7996:19;7987:6;7949:67;:::i;:::-;6987:1036;;;;;;;;;:::o;8029:180::-;8077:77;8074:1;8067:88;8174:4;8171:1;8164:15;8198:4;8195:1;8188:15;8215:320;8259:6;8296:1;8290:4;8286:12;8276:22;;8343:1;8337:4;8333:12;8364:18;8354:81;;8420:4;8412:6;8408:17;8398:27;;8354:81;8482:2;8474:6;8471:14;8451:18;8448:38;8445:84;;8501:18;;:::i;:::-;8445:84;8266:269;8215:320;;;:::o;8541:141::-;8590:4;8613:3;8605:11;;8636:3;8633:1;8626:14;8670:4;8667:1;8657:18;8649:26;;8541:141;;;:::o;8688:93::-;8725:6;8772:2;8767;8760:5;8756:14;8752:23;8742:33;;8688:93;;;:::o;8787:107::-;8831:8;8881:5;8875:4;8871:16;8850:37;;8787:107;;;;:::o;8900:393::-;8969:6;9019:1;9007:10;9003:18;9042:97;9072:66;9061:9;9042:97;:::i;:::-;9160:39;9190:8;9179:9;9160:39;:::i;:::-;9148:51;;9232:4;9228:9;9221:5;9217:21;9208:30;;9281:4;9271:8;9267:19;9260:5;9257:30;9247:40;;8976:317;;8900:393;;;;;:::o;9299:60::-;9327:3;9348:5;9341:12;;9299:60;;;:::o;9365:142::-;9415:9;9448:53;9466:34;9475:24;9493:5;9475:24;:::i;:::-;9466:34;:::i;:::-;9448:53;:::i;:::-;9435:66;;9365:142;;;:::o;9513:75::-;9556:3;9577:5;9570:12;;9513:75;;;:::o;9594:269::-;9704:39;9735:7;9704:39;:::i;:::-;9765:91;9814:41;9838:16;9814:41;:::i;:::-;9806:6;9799:4;9793:11;9765:91;:::i;:::-;9759:4;9752:105;9670:193;9594:269;;;:::o;9869:73::-;9914:3;9869:73;:::o;9948:189::-;10025:32;;:::i;:::-;10066:65;10124:6;10116;10110:4;10066:65;:::i;:::-;10001:136;9948:189;;:::o;10143:186::-;10203:120;10220:3;10213:5;10210:14;10203:120;;;10274:39;10311:1;10304:5;10274:39;:::i;:::-;10247:1;10240:5;10236:13;10227:22;;10203:120;;;10143:186;;:::o;10335:543::-;10436:2;10431:3;10428:11;10425:446;;;10470:38;10502:5;10470:38;:::i;:::-;10554:29;10572:10;10554:29;:::i;:::-;10544:8;10540:44;10737:2;10725:10;10722:18;10719:49;;;10758:8;10743:23;;10719:49;10781:80;10837:22;10855:3;10837:22;:::i;:::-;10827:8;10823:37;10810:11;10781:80;:::i;:::-;10440:431;;10425:446;10335:543;;;:::o;10884:117::-;10938:8;10988:5;10982:4;10978:16;10957:37;;10884:117;;;;:::o;11007:169::-;11051:6;11084:51;11132:1;11128:6;11120:5;11117:1;11113:13;11084:51;:::i;:::-;11080:56;11165:4;11159;11155:15;11145:25;;11058:118;11007:169;;;;:::o;11181:295::-;11257:4;11403:29;11428:3;11422:4;11403:29;:::i;:::-;11395:37;;11465:3;11462:1;11458:11;11452:4;11449:21;11441:29;;11181:295;;;;:::o;11481:1395::-;11598:37;11631:3;11598:37;:::i;:::-;11700:18;11692:6;11689:30;11686:56;;;11722:18;;:::i;:::-;11686:56;11766:38;11798:4;11792:11;11766:38;:::i;:::-;11851:67;11911:6;11903;11897:4;11851:67;:::i;:::-;11945:1;11969:4;11956:17;;12001:2;11993:6;11990:14;12018:1;12013:618;;;;12675:1;12692:6;12689:77;;;12741:9;12736:3;12732:19;12726:26;12717:35;;12689:77;12792:67;12852:6;12845:5;12792:67;:::i;:::-;12786:4;12779:81;12648:222;11983:887;;12013:618;12065:4;12061:9;12053:6;12049:22;12099:37;12131:4;12099:37;:::i;:::-;12158:1;12172:208;12186:7;12183:1;12180:14;12172:208;;;12265:9;12260:3;12256:19;12250:26;12242:6;12235:42;12316:1;12308:6;12304:14;12294:24;;12363:2;12352:9;12348:18;12335:31;;12209:4;12206:1;12202:12;12197:17;;12172:208;;;12408:6;12399:7;12396:19;12393:179;;;12466:9;12461:3;12457:19;12451:26;12509:48;12551:4;12543:6;12539:17;12528:9;12509:48;:::i;:::-;12501:6;12494:64;12416:156;12393:179;12618:1;12614;12606:6;12602:14;12598:22;12592:4;12585:36;12020:611;;;11983:887;;11573:1303;;;11481:1395;;:::o;12882:925::-;13141:4;13179:3;13168:9;13164:19;13156:27;;13229:9;13223:4;13219:20;13215:1;13204:9;13200:17;13193:47;13257:78;13330:4;13321:6;13257:78;:::i;:::-;13249:86;;13345:72;13413:2;13402:9;13398:18;13389:6;13345:72;:::i;:::-;13464:9;13458:4;13454:20;13449:2;13438:9;13434:18;13427:48;13492:78;13565:4;13556:6;13492:78;:::i;:::-;13484:86;;13617:9;13611:4;13607:20;13602:2;13591:9;13587:18;13580:48;13645:78;13718:4;13709:6;13645:78;:::i;:::-;13637:86;;13733:67;13795:3;13784:9;13780:19;13771:6;13733:67;:::i;:::-;12882:925;;;;;;;;:::o",
  "source": "pragma solidity ^0.8.0;\n\ncontract UserProfile {\n    struct Profile {\n        address userAddress;\n        string name;\n        uint256 age;\n        string documentNumber;\n        string residence;\n        bool eligibleToVote; // New parameter\n    }\n\n    Profile[] public profiles;\n\n    event ProfileRegistered(\n        address indexed userAddress,\n        string name,\n        uint256 age,\n        string documentNumber,\n        string residence,\n        bool eligibleToVote\n    );\n\n    // Function to register a user profile\n    function registerUserProfile(\n        string memory _name,\n        uint256 _age,\n        string memory _documentNumber,\n        string memory _residence\n    ) public {\n        // Register user profile\n        Profile memory newProfile = Profile(\n            msg.sender,\n            _name,\n            _age,\n            _documentNumber,\n            _residence,\n            false\n        );\n        profiles.push(newProfile);\n\n        // Emit an event\n        emit ProfileRegistered(\n            msg.sender,\n            _name,\n            _age,\n            _documentNumber,\n            _residence,\n            false\n        );\n        //isEligibleToVote(msg.sender);\n    }\n\n    function isEligibleToVote(\n        address userAddress\n    ) external view returns (bool) {\n        return true;\n    }\n\n    // Function to check if a user is eligible to vote\n    /*function isEligibleToVote(address userAddress) external returns (bool) {\n        // Implement logic to check government ID through API\n        // If government ID is valid, set eligibleToVote to true\n        // For now, let's assume the eligibility check is successful\n        for (uint256 i = 0; i < profiles.length; i++) {\n            if (profiles[i].userAddress == userAddress) {\n                profiles[i].eligibleToVote = true;\n                return true;\n            }\n        }\n        return false;\n    }*/\n}\n",
  "sourcePath": "/Users/Abhinav/Desktop/559/final-project/contracts/UserProfile.sol",
  "ast": {
    "absolutePath": "project:/contracts/UserProfile.sol",
    "exportedSymbols": {
      "UserProfile": [
        461
      ]
    },
    "id": 462,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 378,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "UserProfile",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 461,
        "linearizedBaseContracts": [
          461
        ],
        "name": "UserProfile",
        "nameLocation": "34:11:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "UserProfile.Profile",
            "id": 391,
            "members": [
              {
                "constant": false,
                "id": 380,
                "mutability": "mutable",
                "name": "userAddress",
                "nameLocation": "85:11:1",
                "nodeType": "VariableDeclaration",
                "scope": 391,
                "src": "77:19:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 379,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "77:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 382,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "113:4:1",
                "nodeType": "VariableDeclaration",
                "scope": 391,
                "src": "106:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 381,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "106:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 384,
                "mutability": "mutable",
                "name": "age",
                "nameLocation": "135:3:1",
                "nodeType": "VariableDeclaration",
                "scope": 391,
                "src": "127:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 383,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "127:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 386,
                "mutability": "mutable",
                "name": "documentNumber",
                "nameLocation": "155:14:1",
                "nodeType": "VariableDeclaration",
                "scope": 391,
                "src": "148:21:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 385,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "148:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 388,
                "mutability": "mutable",
                "name": "residence",
                "nameLocation": "186:9:1",
                "nodeType": "VariableDeclaration",
                "scope": 391,
                "src": "179:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 387,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "179:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 390,
                "mutability": "mutable",
                "name": "eligibleToVote",
                "nameLocation": "210:14:1",
                "nodeType": "VariableDeclaration",
                "scope": 391,
                "src": "205:19:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 389,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "205:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Profile",
            "nameLocation": "59:7:1",
            "nodeType": "StructDefinition",
            "scope": 461,
            "src": "52:196:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "c36fe3d6",
            "id": 395,
            "mutability": "mutable",
            "name": "profiles",
            "nameLocation": "271:8:1",
            "nodeType": "VariableDeclaration",
            "scope": 461,
            "src": "254:25:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Profile_$391_storage_$dyn_storage",
              "typeString": "struct UserProfile.Profile[]"
            },
            "typeName": {
              "baseType": {
                "id": 393,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 392,
                  "name": "Profile",
                  "nameLocations": [
                    "254:7:1"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 391,
                  "src": "254:7:1"
                },
                "referencedDeclaration": 391,
                "src": "254:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Profile_$391_storage_ptr",
                  "typeString": "struct UserProfile.Profile"
                }
              },
              "id": 394,
              "nodeType": "ArrayTypeName",
              "src": "254:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Profile_$391_storage_$dyn_storage_ptr",
                "typeString": "struct UserProfile.Profile[]"
              }
            },
            "visibility": "public"
          },
          {
            "anonymous": false,
            "eventSelector": "1a189abb57c764bcf505e7588ac71e6cfcb7d1395d874f795261628cf577c17c",
            "id": 409,
            "name": "ProfileRegistered",
            "nameLocation": "292:17:1",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 408,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 397,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "userAddress",
                  "nameLocation": "335:11:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 409,
                  "src": "319:27:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 396,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "319:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 399,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "363:4:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 409,
                  "src": "356:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 398,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "356:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 401,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "age",
                  "nameLocation": "385:3:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 409,
                  "src": "377:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 400,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 403,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "documentNumber",
                  "nameLocation": "405:14:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 409,
                  "src": "398:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 402,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "398:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 405,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "residence",
                  "nameLocation": "436:9:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 409,
                  "src": "429:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 404,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 407,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "eligibleToVote",
                  "nameLocation": "460:14:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 409,
                  "src": "455:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 406,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "455:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "309:171:1"
            },
            "src": "286:195:1"
          },
          {
            "body": {
              "id": 449,
              "nodeType": "Block",
              "src": "696:504:1",
              "statements": [
                {
                  "assignments": [
                    422
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 422,
                      "mutability": "mutable",
                      "name": "newProfile",
                      "nameLocation": "754:10:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 449,
                      "src": "739:25:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Profile_$391_memory_ptr",
                        "typeString": "struct UserProfile.Profile"
                      },
                      "typeName": {
                        "id": 421,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 420,
                          "name": "Profile",
                          "nameLocations": [
                            "739:7:1"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 391,
                          "src": "739:7:1"
                        },
                        "referencedDeclaration": 391,
                        "src": "739:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Profile_$391_storage_ptr",
                          "typeString": "struct UserProfile.Profile"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 432,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 424,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "788:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "792:6:1",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "788:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 426,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 411,
                        "src": "812:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 427,
                        "name": "_age",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 413,
                        "src": "831:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 428,
                        "name": "_documentNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 415,
                        "src": "849:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 429,
                        "name": "_residence",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 417,
                        "src": "878:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "hexValue": "66616c7365",
                        "id": 430,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "902:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 423,
                      "name": "Profile",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 391,
                      "src": "767:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Profile_$391_storage_ptr_$",
                        "typeString": "type(struct UserProfile.Profile storage pointer)"
                      }
                    },
                    "id": 431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "767:150:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Profile_$391_memory_ptr",
                      "typeString": "struct UserProfile.Profile memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "739:178:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 436,
                        "name": "newProfile",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 422,
                        "src": "941:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Profile_$391_memory_ptr",
                          "typeString": "struct UserProfile.Profile memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Profile_$391_memory_ptr",
                          "typeString": "struct UserProfile.Profile memory"
                        }
                      ],
                      "expression": {
                        "id": 433,
                        "name": "profiles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 395,
                        "src": "927:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Profile_$391_storage_$dyn_storage",
                          "typeString": "struct UserProfile.Profile storage ref[] storage ref"
                        }
                      },
                      "id": 435,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "936:4:1",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "927:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_Profile_$391_storage_$dyn_storage_ptr_$_t_struct$_Profile_$391_storage_$returns$__$attached_to$_t_array$_t_struct$_Profile_$391_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct UserProfile.Profile storage ref[] storage pointer,struct UserProfile.Profile storage ref)"
                      }
                    },
                    "id": 437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "927:25:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 438,
                  "nodeType": "ExpressionStatement",
                  "src": "927:25:1"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 440,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1024:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 441,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1028:6:1",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1024:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 442,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 411,
                        "src": "1048:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 443,
                        "name": "_age",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 413,
                        "src": "1067:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 444,
                        "name": "_documentNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 415,
                        "src": "1085:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 445,
                        "name": "_residence",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 417,
                        "src": "1114:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "hexValue": "66616c7365",
                        "id": 446,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1138:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 439,
                      "name": "ProfileRegistered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 409,
                      "src": "993:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,string memory,uint256,string memory,string memory,bool)"
                      }
                    },
                    "id": 447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "993:160:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 448,
                  "nodeType": "EmitStatement",
                  "src": "988:165:1"
                }
              ]
            },
            "functionSelector": "5db96308",
            "id": 450,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "registerUserProfile",
            "nameLocation": "539:19:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 411,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "582:5:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 450,
                  "src": "568:19:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 410,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "568:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 413,
                  "mutability": "mutable",
                  "name": "_age",
                  "nameLocation": "605:4:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 450,
                  "src": "597:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 412,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "597:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 415,
                  "mutability": "mutable",
                  "name": "_documentNumber",
                  "nameLocation": "633:15:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 450,
                  "src": "619:29:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 414,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "619:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 417,
                  "mutability": "mutable",
                  "name": "_residence",
                  "nameLocation": "672:10:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 450,
                  "src": "658:24:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 416,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "558:130:1"
            },
            "returnParameters": {
              "id": 419,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "696:0:1"
            },
            "scope": 461,
            "src": "530:670:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 459,
              "nodeType": "Block",
              "src": "1296:28:1",
              "statements": [
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 457,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1313:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 456,
                  "id": 458,
                  "nodeType": "Return",
                  "src": "1306:11:1"
                }
              ]
            },
            "functionSelector": "70bd8e93",
            "id": 460,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isEligibleToVote",
            "nameLocation": "1215:16:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 453,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 452,
                  "mutability": "mutable",
                  "name": "userAddress",
                  "nameLocation": "1249:11:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 460,
                  "src": "1241:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 451,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1241:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1231:35:1"
            },
            "returnParameters": {
              "id": 456,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 455,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 460,
                  "src": "1290:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 454,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1290:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1289:6:1"
            },
            "scope": 461,
            "src": "1206:118:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 462,
        "src": "25:1880:1",
        "usedErrors": []
      }
    ],
    "src": "0:1906:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.19+commit.7dd6d404.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xFfB8131ae63a51220A24E45f9aecC63ab311E3eb",
      "transactionHash": "0xf970e7cc1b7409d4975b4afb3bd823aa9f07c04d39150dca8040398213fee484"
    }
  },
  "schemaVersion": "3.4.16",
  "updatedAt": "2024-04-28T06:07:37.529Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}