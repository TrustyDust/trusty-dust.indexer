import { ponder } from "ponder:registry"
import { dusttoken_transfer } from "ponder:schema"

ponder.on("DustToken:Transfer", async ({ event, context }) => {
  const { from, to, value } = event.args

  await context.db.insert(dusttoken_transfer).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    from,
    to,
    value,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

