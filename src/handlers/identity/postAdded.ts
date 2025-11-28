import { ponder } from "ponder:registry"
import { identity_post_added } from "ponder:schema"

ponder.on("Identity:PostAdded", async ({ event, context }) => {
  const { user, totalPosts } = event.args

  await context.db.insert(identity_post_added).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    user,
    totalPosts,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

