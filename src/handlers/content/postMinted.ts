import { ponder } from "ponder:registry"
import { content_post_minted } from "ponder:schema"

ponder.on("Content:PostMinted", async ({ event, context }) => {
  const { user, fee } = event.args

  await context.db.insert(content_post_minted).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    user,
    fee,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

