import { ponder } from "ponder:registry"
import { verifier_tier_verified } from "ponder:schema"

ponder.on("Verifier:TierVerified", async ({ event, context }) => {
  const { user, tier, trustScore, passed } = event.args

  await context.db.insert(verifier_tier_verified).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    user,
    tier,
    trustScore,
    passed,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

