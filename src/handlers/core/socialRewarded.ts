import { ponder } from "ponder:registry"
import { core_social_rewarded } from "ponder:schema"

ponder.on("Core:SocialRewarded", async ({ event, context }) => {
  const { user, action, amount } = event.args

  await context.db.insert(core_social_rewarded).values({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    user,
    action,
    amount,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  })
})

