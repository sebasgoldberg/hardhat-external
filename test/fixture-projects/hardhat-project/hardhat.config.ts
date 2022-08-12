// We load the plugin here.
import { HardhatUserConfig } from "hardhat/types";

import "@sebasgoldberg/hardhat-network-alias"
import "@nomiclabs/hardhat-ethers";
import "@sebasgoldberg/hardhat-wsprovider"

import "../../../src/index";

const config: HardhatUserConfig = {
  solidity: "0.7.3",
  defaultNetwork: "hardhat",
  external:{
    path: "external-plugin"
  },
  networkAliases:{
    "external-plugin": {
      "localhost": "hardhat"
    }
  }
};

export default config;
