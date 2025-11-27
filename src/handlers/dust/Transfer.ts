import { ponder } from "ponder:registry"
import { dustTransfers } from "ponder:schema"

ponder.on("DustToken:Transfer", async ({ event, context }) => {
  const { from, to, value } = event.args

  await context.db.insert(dustTransfers).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    from,
    to,
    amount: value,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})
