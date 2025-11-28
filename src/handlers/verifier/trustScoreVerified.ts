import { ponder } from "ponder:registry"
import { verifier_trust_score_verified } from "ponder:schema"

ponder.on("Verifier:TrustScoreVerified", async ({ event, context }) => {
  const { user, minScore, passed } = event.args

  await context.db.insert(verifier_trust_score_verified).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    user,
    minScore,
    passed,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

