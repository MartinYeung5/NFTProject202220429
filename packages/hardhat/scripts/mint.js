/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

const delayMS = 1000 

const main = async () => {

  // ADDRESS TO MINT TO:
  const toAddress = "0x998EC7Fc98f50CB4173E33bbd381135ED5856814"

  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const { deployer } = await getNamedAccounts();
  const yourCollectible = await ethers.getContract("NFT", deployer);

  /*
  const donator = {
    "description": "It's membership card of donator",
    "external_url": "https://github.com/MartinYeung5/hackathon_project/",
    "image": "https://user-images.githubusercontent.com/41377418/166137566-eaca94ff-25ee-4ca5-bc86-6e48cd6e0462.png",
    "name": "Donator",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "green"
       },
       {
         "trait_type": "Identity",
         "value": "donator"
       }
    ]
  }
  console.log("Uploading donator...")
  const uploadeddonator = await ipfs.add(JSON.stringify(donator))

  console.log("Minting donator with IPFS hash ("+uploadeddonator.path+")")
  await yourCollectible.mintItem(toAddress,uploadeddonator.path,{gasLimit:10000000})


  await sleep(delayMS)


  const receiver = {
    "description": "It's membership card of receiver",
    "external_url": "https://github.com/MartinYeung5/hackathon_project/",
    "image": "https://user-images.githubusercontent.com/41377418/166137564-71941afb-6f2e-447d-bc0d-8d8a0258fc1f.png",
    "name": "Receiver",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "green"
       },
       {
         "trait_type": "Identity",
         "value": "receiver"
       }
    ]
  }
  console.log("Uploading receiver...")
  const uploadedreceiver = await ipfs.add(JSON.stringify(receiver))

  console.log("Minting receiver with IPFS hash ("+uploadedreceiver.path+")")
  await yourCollectible.mintItem(toAddress,uploadedreceiver.path,{gasLimit:10000000})



  await sleep(delayMS)

*/

  const partner = {
    "description": "It's membership card of partner",
    "external_url": "https://github.com/MartinYeung5/hackathon_project/",
    "image": "https://user-images.githubusercontent.com/41377418/166137560-d58d37b2-5c96-4723-a503-e05878ae443d.png",
    "name": "Partner",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "green"
       },
       {
         "trait_type": "Identity",
         "value": "partner"
       }
    ]
  }
  console.log("Uploading partner...")
  const uploadedpartner = await ipfs.add(JSON.stringify(partner))

  console.log("Minting partner with IPFS hash ("+uploadedpartner.path+")")
  await yourCollectible.mintItem(toAddress,uploadedpartner.path,{gasLimit:10000000})



  await sleep(delayMS)
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
