import { onchainTable, onchainEnum, index } from "ponder"

// ================ ENUMS ==================

export const jobStatusEnum = onchainEnum("job_status", [
  "OPEN",
  "CANCELLED",
  "COMPLETED",
])

export const rewardSourceEnum = onchainEnum("reward_source", [
  "LIKE",
  "COMMENT",
  "REPOST",
])

export const dustTransfers = onchainTable(
  "dust_transfers",
  (t) => ({
    id: t.text().primaryKey(),
    from: t.hex().notNull(),
    to: t.hex().notNull(),
    amount: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
  }),
  (table) => ({
    fromIdx: index().on(table.from),
    toIdx: index().on(table.to),
    timestampIdx: index().on(table.timestamp),
  })
)

export const identities = onchainTable(
  "identities",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    metadata: t.json(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
  })
)

export const trustScores = onchainTable(
  "trust_scores",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    newScore: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
    scoreIdx: index().on(table.newScore),
  })
)

export const tierEvents = onchainTable(
  "tier_events",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    newTier: t.integer().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
    tierIdx: index().on(table.newTier),
  })
)

export const rewardEvents = onchainTable(
  "reward_events",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    amount: t.bigint().notNull(),
    source: rewardSourceEnum("source").notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
    sourceIdx: index().on(table.source),
    timestampIdx: index().on(table.timestamp),
  })
)

export const penalties = onchainTable(
  "penalties",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    amount: t.bigint().notNull(),
    reason: t.text(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
  })
)

export const posts = onchainTable(
  "posts",
  (t) => ({
    id: t.text().primaryKey(),
    postId: t.bigint().notNull(),
    creator: t.hex().notNull(),
    tokenId: t.bigint().notNull(),
    uri: t.text().notNull(),
    burned: t.boolean().default(false),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    postIdIdx: index().on(table.postId),
    creatorIdx: index().on(table.creator),
    tokenIdIdx: index().on(table.tokenId),
  })
)

export const jobs = onchainTable(
  "jobs",
  (t) => ({
    id: t.text().primaryKey(),
    jobId: t.bigint().notNull(),
    creator: t.hex().notNull(),
    metadataUri: t.text().notNull(),
    trustRequirement: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    jobIdIdx: index().on(table.jobId),
    creatorIdx: index().on(table.creator),
  })
)

export const jobApplications = onchainTable(
  "job_applications",
  (t) => ({
    id: t.text().primaryKey(),
    jobId: t.bigint().notNull(),
    worker: t.hex().notNull(),
    status: jobStatusEnum("status").notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    jobIdx: index().on(table.jobId),
    workerIdx: index().on(table.worker),
    statusIdx: index().on(table.status),
  })
)

export const jobSubmissions = onchainTable(
  "job_submissions",
  (t) => ({
    id: t.text().primaryKey(),
    jobId: t.bigint().notNull(),
    worker: t.hex().notNull(),
    submissionUri: t.text().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    jobIdx: index().on(table.jobId),
    workerIdx: index().on(table.worker),
  })
)

export const jobCompletions = onchainTable(
  "job_completions",
  (t) => ({
    id: t.text().primaryKey(),
    jobId: t.bigint().notNull(),
    worker: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    jobIdx: index().on(table.jobId),
    workerIdx: index().on(table.worker),
  })
)

export const zkVerifications = onchainTable(
  "zk_verifications",
  (t) => ({
    id: t.text().primaryKey(),
    user: t.hex().notNull(),
    tier: t.integer(),
    proofHash: t.text(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    userIdx: index().on(table.user),
    tierIdx: index().on(table.tier),
  })
)
