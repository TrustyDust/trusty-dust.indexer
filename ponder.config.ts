import { createConfig } from "ponder"

import { DustTokenAbi } from "@abis/DustTokenAbi"
import { IdentityAbi } from "@abis/IdentityAbi"
import { CoreAbi } from "@abis/CoreAbi"
import { ContentAbi } from "@abis/ContentAbi"
import { JobsAbi } from "@abis/JobsAbi"
import { VerifierAbi } from "@abis/VerifierAbi"

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
      startBlock: 29490180,
    },
    Identity: {
      chain: "lisk",
      address: "0x8219dF54d4de0012Fde4BaBf0D39437f4652B85d",
      abi: IdentityAbi,
      startBlock: 29490180,
    },
    Core: {
      chain: "lisk",
      address: "0xA6b64d740De8FFD7EFD67Ff6296cD3CC9A0aac04",
      abi: CoreAbi,
      startBlock: 29490180,
    },
    Content: {
      chain: "lisk",
      address: "0x9C41c06011d228f08B907B073D3a12800d35C0e9",
      abi: ContentAbi,
      startBlock: 29490180,
    },
    Jobs: {
      chain: "lisk",
      address: "0x0691D75F7689142c304CE49ae89eaDC13Ab2cF27",
      abi: JobsAbi,
      startBlock: 29490180,
    },
    Verifier: {
      chain: "lisk",
      address: "0xca6bE56320bA3faF5401b6eEe72b19B06EbE9992",
      abi: VerifierAbi,
      startBlock: 29489762,
    },
  },
})
