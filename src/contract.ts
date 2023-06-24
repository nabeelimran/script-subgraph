import {
  EarnPoolReward as EarnPoolRewardEvent,
  FreeMinted as FreeMintedEvent,
  GemEquipped as GemEquippedEvent,
  GlassesConfiscated as GlassesConfiscatedEvent,
  GlassesMinted as GlassesMintedEvent,
  GlassesRecharged as GlassesRechargedEvent,
  LimitUpdated as LimitUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PayoutEarned as PayoutEarnedEvent,
  PercentageUpdated as PercentageUpdatedEvent,
  PoolPercentagesUpdated as PoolPercentagesUpdatedEvent,
  RewardCyclesFunded as RewardCyclesFundedEvent,
  TreasuryUpdated as TreasuryUpdatedEvent,
  VoucherAssociated as VoucherAssociatedEvent,
  VoucherDissociated as VoucherDissociatedEvent,
  VoucherMint as VoucherMintEvent
} from "../generated/Contract/Contract"
import {
  EarnPoolReward,
  FreeMinted,
  GemEquipped,
  GlassesConfiscated,
  GlassesMinted,
  GlassesRecharged,
  LimitUpdated,
  OwnershipTransferred,
  PayoutEarned,
  PercentageUpdated,
  PoolPercentagesUpdated,
  RewardCyclesFunded,
  TreasuryUpdated,
  VoucherAssociated,
  VoucherDissociated,
  VoucherMint
} from "../generated/schema"

export function handleEarnPoolReward(event: EarnPoolRewardEvent): void {
  let entity = new EarnPoolReward(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.nonce = event.params.nonce
  entity.cycleNo = event.params.cycleNo
  entity.gemId = event.params.gemId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFreeMinted(event: FreeMintedEvent): void {
  let entity = new FreeMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.tokenID = event.params.tokenID
  entity.nonce = event.params.nonce
  entity.mintedSupply = event.params.mintedSupply

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

export function handleGlassesConfiscated(event: GlassesConfiscatedEvent): void {
  let entity = new GlassesConfiscated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.tokenID = event.params.tokenID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGlassesMinted(event: GlassesMintedEvent): void {
  let entity = new GlassesMinted(
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

export function handleGlassesRecharged(event: GlassesRechargedEvent): void {
  let entity = new GlassesRecharged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.glassId = event.params.glassId
  entity.discountedAmount = event.params.discountedAmount
  entity.nonce = event.params.nonce

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

export function handlePayoutEarned(event: PayoutEarnedEvent): void {
  let entity = new PayoutEarned(
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

export function handlePoolPercentagesUpdated(
  event: PoolPercentagesUpdatedEvent
): void {
  let entity = new PoolPercentagesUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.percentage1 = event.params.percentage1
  entity.percentage2 = event.params.percentage2
  entity.percentage3 = event.params.percentage3

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardCyclesFunded(event: RewardCyclesFundedEvent): void {
  let entity = new RewardCyclesFunded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.rewardAmount = event.params.rewardAmount
  entity.noOfCycles = event.params.noOfCycles

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

export function handleVoucherMint(event: VoucherMintEvent): void {
  let entity = new VoucherMint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.voucherType = event.params.voucherType
  entity.glassID = event.params.glassID
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
