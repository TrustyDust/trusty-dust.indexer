import { ponder } from "ponder:registry"
import { identity_tier_set } from "ponder:schema"

ponder.on("Identity:TierSet", async ({ event, context }) => {
  const { user, tier } = event.args

  await context.db.insert(identity_tier_set).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    user,
    tier,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

