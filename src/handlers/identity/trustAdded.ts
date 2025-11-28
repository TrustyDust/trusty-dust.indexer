import { ponder } from "ponder:registry"
import { identity_trust_added } from "ponder:schema"

ponder.on("Identity:TrustAdded", async ({ event, context }) => {
  const { user, delta, newTrust } = event.args

  await context.db.insert(identity_trust_added).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    user,
    delta,
    newTrust,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

