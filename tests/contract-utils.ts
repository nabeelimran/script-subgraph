import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/Contract/Contract"

export function createEarnPoolRewardEvent(
  user: Address,
  amount: BigInt,
  nonce: BigInt,
  cycleNo: BigInt,
  gemId: BigInt
): EarnPoolReward {
  let earnPoolRewardEvent = changetype<EarnPoolReward>(newMockEvent())

  earnPoolRewardEvent.parameters = new Array()

  earnPoolRewardEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  earnPoolRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  earnPoolRewardEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  earnPoolRewardEvent.parameters.push(
    new ethereum.EventParam(
      "cycleNo",
      ethereum.Value.fromUnsignedBigInt(cycleNo)
    )
  )
  earnPoolRewardEvent.parameters.push(
    new ethereum.EventParam("gemId", ethereum.Value.fromUnsignedBigInt(gemId))
  )

  return earnPoolRewardEvent
}

export function createFreeMintedEvent(
  user: Address,
  tokenID: BigInt,
  nonce: BigInt,
  mintedSupply: BigInt
): FreeMinted {
  let freeMintedEvent = changetype<FreeMinted>(newMockEvent())

  freeMintedEvent.parameters = new Array()

  freeMintedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  freeMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenID",
      ethereum.Value.fromUnsignedBigInt(tokenID)
    )
  )
  freeMintedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  freeMintedEvent.parameters.push(
    new ethereum.EventParam(
      "mintedSupply",
      ethereum.Value.fromUnsignedBigInt(mintedSupply)
    )
  )

  return freeMintedEvent
}

export function createGemEquippedEvent(
  glassID: BigInt,
  gemType: i32
): GemEquipped {
  let gemEquippedEvent = changetype<GemEquipped>(newMockEvent())

  gemEquippedEvent.parameters = new Array()

  gemEquippedEvent.parameters.push(
    new ethereum.EventParam(
      "glassID",
      ethereum.Value.fromUnsignedBigInt(glassID)
    )
  )
  gemEquippedEvent.parameters.push(
    new ethereum.EventParam(
      "gemType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(gemType))
    )
  )

  return gemEquippedEvent
}

export function createGlassesConfiscatedEvent(
  user: Address,
  tokenID: BigInt
): GlassesConfiscated {
  let glassesConfiscatedEvent = changetype<GlassesConfiscated>(newMockEvent())

  glassesConfiscatedEvent.parameters = new Array()

  glassesConfiscatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  glassesConfiscatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenID",
      ethereum.Value.fromUnsignedBigInt(tokenID)
    )
  )

  return glassesConfiscatedEvent
}

export function createGlassesMintedEvent(
  user: Address,
  tokenID: BigInt,
  glassType: i32
): GlassesMinted {
  let glassesMintedEvent = changetype<GlassesMinted>(newMockEvent())

  glassesMintedEvent.parameters = new Array()

  glassesMintedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  glassesMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenID",
      ethereum.Value.fromUnsignedBigInt(tokenID)
    )
  )
  glassesMintedEvent.parameters.push(
    new ethereum.EventParam(
      "glassType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(glassType))
    )
  )

  return glassesMintedEvent
}

export function createGlassesRechargedEvent(
  from: Address,
  glassId: BigInt,
  discountedAmount: BigInt,
  nonce: BigInt
): GlassesRecharged {
  let glassesRechargedEvent = changetype<GlassesRecharged>(newMockEvent())

  glassesRechargedEvent.parameters = new Array()

  glassesRechargedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  glassesRechargedEvent.parameters.push(
    new ethereum.EventParam(
      "glassId",
      ethereum.Value.fromUnsignedBigInt(glassId)
    )
  )
  glassesRechargedEvent.parameters.push(
    new ethereum.EventParam(
      "discountedAmount",
      ethereum.Value.fromUnsignedBigInt(discountedAmount)
    )
  )
  glassesRechargedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return glassesRechargedEvent
}

export function createLimitUpdatedEvent(
  oldLimit: i32,
  newLimit: i32
): LimitUpdated {
  let limitUpdatedEvent = changetype<LimitUpdated>(newMockEvent())

  limitUpdatedEvent.parameters = new Array()

  limitUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldLimit",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(oldLimit))
    )
  )
  limitUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newLimit",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newLimit))
    )
  )

  return limitUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPayoutEarnedEvent(
  to: Address,
  amount: BigInt,
  nonce: BigInt
): PayoutEarned {
  let payoutEarnedEvent = changetype<PayoutEarned>(newMockEvent())

  payoutEarnedEvent.parameters = new Array()

  payoutEarnedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  payoutEarnedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  payoutEarnedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return payoutEarnedEvent
}

export function createPercentageUpdatedEvent(
  oldPercentage: BigInt,
  newPercentage: BigInt
): PercentageUpdated {
  let percentageUpdatedEvent = changetype<PercentageUpdated>(newMockEvent())

  percentageUpdatedEvent.parameters = new Array()

  percentageUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldPercentage",
      ethereum.Value.fromUnsignedBigInt(oldPercentage)
    )
  )
  percentageUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newPercentage",
      ethereum.Value.fromUnsignedBigInt(newPercentage)
    )
  )

  return percentageUpdatedEvent
}

export function createPoolPercentagesUpdatedEvent(
  percentage1: i32,
  percentage2: i32,
  percentage3: i32
): PoolPercentagesUpdated {
  let poolPercentagesUpdatedEvent = changetype<PoolPercentagesUpdated>(
    newMockEvent()
  )

  poolPercentagesUpdatedEvent.parameters = new Array()

  poolPercentagesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "percentage1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(percentage1))
    )
  )
  poolPercentagesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "percentage2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(percentage2))
    )
  )
  poolPercentagesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "percentage3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(percentage3))
    )
  )

  return poolPercentagesUpdatedEvent
}

export function createRewardCyclesFundedEvent(
  rewardAmount: BigInt,
  noOfCycles: BigInt
): RewardCyclesFunded {
  let rewardCyclesFundedEvent = changetype<RewardCyclesFunded>(newMockEvent())

  rewardCyclesFundedEvent.parameters = new Array()

  rewardCyclesFundedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardAmount",
      ethereum.Value.fromUnsignedBigInt(rewardAmount)
    )
  )
  rewardCyclesFundedEvent.parameters.push(
    new ethereum.EventParam(
      "noOfCycles",
      ethereum.Value.fromUnsignedBigInt(noOfCycles)
    )
  )

  return rewardCyclesFundedEvent
}

export function createTreasuryUpdatedEvent(
  oldTreasury: Address,
  newTreasury: Address
): TreasuryUpdated {
  let treasuryUpdatedEvent = changetype<TreasuryUpdated>(newMockEvent())

  treasuryUpdatedEvent.parameters = new Array()

  treasuryUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldTreasury",
      ethereum.Value.fromAddress(oldTreasury)
    )
  )
  treasuryUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newTreasury",
      ethereum.Value.fromAddress(newTreasury)
    )
  )

  return treasuryUpdatedEvent
}

export function createVoucherAssociatedEvent(
  glassID: BigInt,
  voucherType: i32
): VoucherAssociated {
  let voucherAssociatedEvent = changetype<VoucherAssociated>(newMockEvent())

  voucherAssociatedEvent.parameters = new Array()

  voucherAssociatedEvent.parameters.push(
    new ethereum.EventParam(
      "glassID",
      ethereum.Value.fromUnsignedBigInt(glassID)
    )
  )
  voucherAssociatedEvent.parameters.push(
    new ethereum.EventParam(
      "voucherType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(voucherType))
    )
  )

  return voucherAssociatedEvent
}

export function createVoucherDissociatedEvent(
  glassID: BigInt,
  voucherType: i32
): VoucherDissociated {
  let voucherDissociatedEvent = changetype<VoucherDissociated>(newMockEvent())

  voucherDissociatedEvent.parameters = new Array()

  voucherDissociatedEvent.parameters.push(
    new ethereum.EventParam(
      "glassID",
      ethereum.Value.fromUnsignedBigInt(glassID)
    )
  )
  voucherDissociatedEvent.parameters.push(
    new ethereum.EventParam(
      "voucherType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(voucherType))
    )
  )

  return voucherDissociatedEvent
}

export function createVoucherMintEvent(
  to: Address,
  voucherType: i32,
  glassID: BigInt,
  nonce: BigInt
): VoucherMint {
  let voucherMintEvent = changetype<VoucherMint>(newMockEvent())

  voucherMintEvent.parameters = new Array()

  voucherMintEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  voucherMintEvent.parameters.push(
    new ethereum.EventParam(
      "voucherType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(voucherType))
    )
  )
  voucherMintEvent.parameters.push(
    new ethereum.EventParam(
      "glassID",
      ethereum.Value.fromUnsignedBigInt(glassID)
    )
  )
  voucherMintEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return voucherMintEvent
}
