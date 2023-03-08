import {
  EarnPoolReward as EarnPoolRewardEvent,
  PayoutEarned as EarningPayoutEvent,
  GemEquipped as GemEquippedEvent,
  GlassesConfiscated as GlassConfiscatedEvent,
  GlassesMinted as GlassMintedEvent,
  LimitUpdated as LimitUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PercentageUpdated as PercentageUpdatedEvent,
  GlassesRecharged as RechargeGlassesEvent,
  TreasuryUpdated as TreasuryUpdatedEvent,
  VoucherAssociated as VoucherAssociatedEvent,
  VoucherDissociated as VoucherDissociatedEvent,
  VoucherMint as VoucherMintedEvent,
  ScriptTv
} from "../generated/ScriptTv/ScriptTv"
import {ScriptGlass} from "../generated/ScriptTv/ScriptGlass"
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
  VoucherDissociated,
  User,
  Voucher,
  VoucherMinted
} from "../generated/schema"
import { store } from '@graphprotocol/graph-ts'

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

export function handleVoucherMinted(event: VoucherMintedEvent): void {
  let entity = VoucherMinted.load(event.params.to)
  if(!entity){
    entity = new VoucherMinted(event.params.to)
    entity.common = 0
    entity.rare = 0
    entity.superscript = 0
  }
  switch (event.params.voucherType) {
    case 0:
      entity.common = entity.common+1
      break;
    case 1:
      entity.rare = entity.rare+1
      break;
    case 2:
      entity.superscript = entity.superscript+1
      break;
  }
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
  entity.value = event.params.discountedAmount
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
  let scriptTv = ScriptTv.bind(event.address);
  let glassContract = ScriptGlass.bind(scriptTv.scriptGlasses())

  let userAddress = glassContract.ownerOf(event.params.glassID)
  let user = User.load(userAddress)
  if(!user){
    user = new User(userAddress)
  }
  user.save()

  let voucher = new Voucher(userAddress.toString().concat("-").concat(event.params.glassID.toString()))
  voucher.glassID = event.params.glassID
  voucher.voucherType = event.params.voucherType
  voucher.user = userAddress

  voucher.save()

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

  let scriptTv = ScriptTv.bind(event.address);
  let glassContract = ScriptGlass.bind(scriptTv.scriptGlasses())

  let userAddress = glassContract.ownerOf(event.params.glassID)
  let user = User.load(userAddress)
  if(!user){
    user = new User(userAddress)
  }
  user.save()

  let voucher = Voucher.load(userAddress.toString().concat("-").concat(event.params.glassID.toString()))
  if(!voucher){
    return
  }
  store.remove("Voucher", userAddress.toString().concat("-").concat(event.params.glassID.toString()))

  entity.glassID = event.params.glassID
  entity.voucherType = event.params.voucherType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
