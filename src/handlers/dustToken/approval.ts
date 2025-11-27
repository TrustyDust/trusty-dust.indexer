import { ponder } from "ponder:registry"
import { dusttoken_approval } from "ponder:schema"

ponder.on("DustToken:Approval", async ({ event, context }) => {
  const { owner, spender, value } = event.args

  await context.db.insert(dusttoken_approval).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    owner,
    spender,
    value,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

