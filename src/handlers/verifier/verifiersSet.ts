import { ponder } from "ponder:registry"
import { verifier_verifiers_set } from "ponder:schema"

ponder.on("Verifier:VerifiersSet", async ({ event, context }) => {
  const { trustScoreVerifier, tierVerifier } = event.args

  await context.db.insert(verifier_verifiers_set).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    trustScoreVerifier,
    tierVerifier,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

