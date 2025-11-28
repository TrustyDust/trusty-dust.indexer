import { ponder } from "ponder:registry"
import { identity_reputation_added } from "ponder:schema"

ponder.on("Identity:ReputationAdded", async ({ event, context }) => {
  const { user, delta, newReputation } = event.args

  await context.db.insert(identity_reputation_added).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    user,
    delta,
    newReputation,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

