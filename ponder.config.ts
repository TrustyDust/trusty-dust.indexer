import { createConfig } from "ponder"
import { ADDRESSES } from "./src/constants/addresses"

import { DustTokenAbi } from "./src/abis/DustTokenAbi"
import { IdentityAbi } from "./src/abis/IdentityAbi"
import { CoreAbi } from "./src/abis/CoreAbi"
import { ContentAbi } from "./src/abis/ContentAbi"
import { JobsAbi } from "./src/abis/JobsAbi"
import { VerifierAbi } from "./src/abis/VerifierAbi"

export default createConfig({
  chains: {
    lisk: {
      id: 4202,
      rpc: process.env.PONDER_RPC_URL_4202!,
    },
  },

  contracts: {
    DustToken: {
      chain: "lisk",
      address: ADDRESSES.DUST,
      abi: DustTokenAbi,
      startBlock: 34205941,
    },

    Identity: {
      chain: "lisk",
      address: ADDRESSES.IDENTITY,
      abi: IdentityAbi,
      startBlock: 34205941,
    },

    Core: {
      chain: "lisk",
      address: ADDRESSES.CORE,
      abi: CoreAbi,
      startBlock: 34205941,
    },

    Content: {
      chain: "lisk",
      address: ADDRESSES.CONTENT,
      abi: ContentAbi,
      startBlock: 34205941,
    },

    JobMarketplace: {
      chain: "lisk",
      address: ADDRESSES.JOBS,
      abi: JobsAbi,
      startBlock: 34205941,
    },

    TrustVerifier: {
      chain: "lisk",
      address: ADDRESSES.VERIFIER,
      abi: VerifierAbi,
      startBlock: 34205941,
    },
  },
})
