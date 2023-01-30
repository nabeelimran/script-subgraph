import {
  EarnPoolReward as EarnPoolRewardEvent,
  EarningPayout as EarningPayoutEvent,
  GemEquipped as GemEquippedEvent,
  GlassConfiscated as GlassConfiscatedEvent,
  GlassMinted as GlassMintedEvent,
  LimitUpdated as LimitUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PercentageUpdated as PercentageUpdatedEvent,
  RechargeGlasses as RechargeGlassesEvent,
  TreasuryUpdated as TreasuryUpdatedEvent,
  VoucherAssociated as VoucherAssociatedEvent,
  VoucherDissociated as VoucherDissociatedEvent
} from "../generated/ScriptTv/ScriptTv"
import {
  EarnPoolReward,
  EarningPayout,
  GemEquipped,
  GlassConfiscated,
  GlassMinted,
  LimitUpdated,
  OwnershipTransferred,
  PercentageUpdated,
  RechargeGlasses,
  TreasuryUpdated,
  VoucherAssociated,
  VoucherDissociated
} from "../generated/schema"

export function handleEarnPoolReward(event: EarnPoolRewardEvent): void {
  let entity = new EarnPoolReward(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.nonce = event.params.nonce
  entity.poolId = event.params.poolId
  entity.gemId = event.params.gemId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEarningPayout(event: EarningPayoutEvent): void {
  let entity = new EarningPayout(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGemEquipped(event: GemEquippedEvent): void {
  let entity = new GemEquipped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.glassID = event.params.glassID
  entity.gemType = event.params.gemType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGlassConfiscated(event: GlassConfiscatedEvent): void {
  let entity = new GlassConfiscated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.tokenID = event.params.tokenID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGlassMinted(event: GlassMintedEvent): void {
  let entity = new GlassMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.tokenID = event.params.tokenID
  entity.glassType = event.params.glassType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLimitUpdated(event: LimitUpdatedEvent): void {
  let entity = new LimitUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldLimit = event.params.oldLimit
  entity.newLimit = event.params.newLimit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePercentageUpdated(event: PercentageUpdatedEvent): void {
  let entity = new PercentageUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldPercentage = event.params.oldPercentage
  entity.newPercentage = event.params.newPercentage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRechargeGlasses(event: RechargeGlassesEvent): void {
  let entity = new RechargeGlasses(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.value = event.params.value
  entity.glassId = event.params.glassId
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTreasuryUpdated(event: TreasuryUpdatedEvent): void {
  let entity = new TreasuryUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldTreasury = event.params.oldTreasury
  entity.newTreasury = event.params.newTreasury

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoucherAssociated(event: VoucherAssociatedEvent): void {
  let entity = new VoucherAssociated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.glassID = event.params.glassID
  entity.voucherType = event.params.voucherType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoucherDissociated(event: VoucherDissociatedEvent): void {
  let entity = new VoucherDissociated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.glassID = event.params.glassID
  entity.voucherType = event.params.voucherType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
