import { createConfig } from "ponder"

import { DustTokenAbi } from "@abis/DustTokenAbi"
import { IdentityAbi } from "@abis/IdentityAbi"
import { CoreAbi } from "@abis/CoreAbi"
import { ContentAbi } from "@abis/ContentAbi"
import { JobsAbi } from "@abis/JobsAbi"
import { VerifierAbi } from "@abis/VerifierAbi"

const START_BLOCK = 34205941

export default createConfig({
  database: {
    kind: "postgres",
  },
  chains: {
    lisk: {
      id: 4202,
      rpc: process.env.PONDER_RPC_URL_4202!,
    },
  },
  contracts: {
    DustToken: {
      chain: "lisk",
      address: "0x5B99B1363F634CbF43FC13bd6D425285022aC469",
      abi: DustTokenAbi,
      startBlock: START_BLOCK,
    },
    Identity: {
      chain: "lisk",
      address: "0x8219dF54d4de0012Fde4BaBf0D39437f4652B85d",
      abi: IdentityAbi,
      startBlock: START_BLOCK,
    },
    Core: {
      chain: "lisk",
      address: "0xA6b64d740De8FFD7EFD67Ff6296cD3CC9A0aac04",
      abi: CoreAbi,
      startBlock: START_BLOCK,
    },
    Content: {
      chain: "lisk",
      address: "0x9C41c06011d228f08B907B073D3a12800d35C0e9",
      abi: ContentAbi,
      startBlock: START_BLOCK,
    },
    Jobs: {
      chain: "lisk",
      address: "0x0691D75F7689142c304CE49ae89eaDC13Ab2cF27",
      abi: JobsAbi,
      startBlock: START_BLOCK,
    },
    Verifier: {
      chain: "lisk",
      address: "0xC206a244Ff6f8104d24f78994a8b47D72D0c1d0D",
      abi: VerifierAbi,
      startBlock: START_BLOCK,
    },
  },
})
