import { index, onchainTable } from "ponder"

export const dusttoken_approval = onchainTable(
  "dusttoken_approval",
  (t) => ({
    id: t.text().primaryKey(),
    owner: t.hex().notNull(),
    spender: t.hex().notNull(),
    value: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    ownerIdx: index().on(table.owner),
    spenderIdx: index().on(table.spender),
  }),
)

export const dusttoken_transfer = onchainTable(
  "dusttoken_transfer",
  (t) => ({
    id: t.text().primaryKey(),
    from: t.hex().notNull(),
    to: t.hex().notNull(),
    value: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    fromIdx: index().on(table.from),
    toIdx: index().on(table.to),
  }),
)

export const content_post_minted = onchainTable(
  "content_post_minted",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    fee: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
  }),
)

export const core_job_rewarded = onchainTable(
  "core_job_rewarded",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    rating: t.bigint().notNull(),
    amount: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
  }),
)

export const core_social_rewarded = onchainTable(
  "core_social_rewarded",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    action: t.bigint().notNull(),
    amount: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
  }),
)

export const identity_job_completed = onchainTable(
  "identity_job_completed",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    totalJobsCompleted: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
  }),
)

export const identity_post_added = onchainTable(
  "identity_post_added",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    totalPosts: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
  }),
)

export const identity_reputation_added = onchainTable(
  "identity_reputation_added",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    delta: t.bigint().notNull(),
    newReputation: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
  }),
)

export const identity_tier_set = onchainTable(
  "identity_tier_set",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    tier: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
    tierIdx: index().on(table.tier),
  }),
)

export const identity_trust_added = onchainTable(
  "identity_trust_added",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    delta: t.bigint().notNull(),
    newTrust: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
  }),
)

export const jobs_job_approved = onchainTable(
  "jobs_job_approved",
  (t) => ({
    id: t.text().primaryKey(),
    jobId: t.bigint().notNull(),
    worker: t.hex().notNull(),
    rating: t.bigint().notNull(),
    rewardAmount: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    jobIdIdx: index().on(table.jobId),
    workerIdx: index().on(table.worker),
  }),
)

export const jobs_job_cancelled = onchainTable(
  "jobs_job_cancelled",
  (t) => ({
    id: t.text().primaryKey(),
    jobId: t.bigint().notNull(),
    poster: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    jobIdIdx: index().on(table.jobId),
  }),
)

export const jobs_job_created = onchainTable(
  "jobs_job_created",
  (t) => ({
    id: t.text().primaryKey(),
    jobId: t.bigint().notNull(),
    poster: t.hex().notNull(),
    minScore: t.bigint().notNull(),
    fee: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    jobIdIdx: index().on(table.jobId),
  }),
)

export const jobs_worker_assigned = onchainTable(
  "jobs_worker_assigned",
  (t) => ({
    id: t.text().primaryKey(),
    jobId: t.bigint().notNull(),
    worker: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    jobIdIdx: index().on(table.jobId),
    workerIdx: index().on(table.worker),
  }),
)

export const verifier_tier_verified = onchainTable(
  "verifier_tier_verified",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    tier: t.bigint().notNull(),
    trustScore: t.bigint().notNull(),
    passed: t.boolean().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
    tierIdx: index().on(table.tier),
  }),
)

export const verifier_trust_score_verified = onchainTable(
  "verifier_trust_score_verified",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    minScore: t.bigint().notNull(),
    passed: t.boolean().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
  }),
)

export const verifier_verifiers_set = onchainTable(
  "verifier_verifiers_set",
  (t) => ({
    id: t.text().primaryKey(),
    trustScoreVerifier: t.hex().notNull(),
    tierVerifier: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    trustScoreVerifierIdx: index().on(table.trustScoreVerifier),
    tierVerifierIdx: index().on(table.tierVerifier),
  }),
)

