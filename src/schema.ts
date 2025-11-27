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

