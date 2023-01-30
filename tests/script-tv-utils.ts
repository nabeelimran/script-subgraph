import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/ScriptTv/ScriptTv"

export function createEarnPoolRewardEvent(
  user: Address,
  amount: BigInt,
  nonce: BigInt,
  poolId: BigInt,
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
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  earnPoolRewardEvent.parameters.push(
    new ethereum.EventParam("gemId", ethereum.Value.fromUnsignedBigInt(gemId))
  )

  return earnPoolRewardEvent
}

export function createEarningPayoutEvent(
  to: Address,
  amount: BigInt,
  nonce: BigInt
): EarningPayout {
  let earningPayoutEvent = changetype<EarningPayout>(newMockEvent())

  earningPayoutEvent.parameters = new Array()

  earningPayoutEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  earningPayoutEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  earningPayoutEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return earningPayoutEvent
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

export function createGlassConfiscatedEvent(
  user: Address,
  tokenID: BigInt
): GlassConfiscated {
  let glassConfiscatedEvent = changetype<GlassConfiscated>(newMockEvent())

  glassConfiscatedEvent.parameters = new Array()

  glassConfiscatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  glassConfiscatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenID",
      ethereum.Value.fromUnsignedBigInt(tokenID)
    )
  )

  return glassConfiscatedEvent
}

export function createGlassMintedEvent(
  user: Address,
  tokenID: BigInt,
  glassType: i32
): GlassMinted {
  let glassMintedEvent = changetype<GlassMinted>(newMockEvent())

  glassMintedEvent.parameters = new Array()

  glassMintedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  glassMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenID",
      ethereum.Value.fromUnsignedBigInt(tokenID)
    )
  )
  glassMintedEvent.parameters.push(
    new ethereum.EventParam(
      "glassType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(glassType))
    )
  )

  return glassMintedEvent
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

export function createRechargeGlassesEvent(
  from: Address,
  value: BigInt,
  glassId: BigInt,
  nonce: BigInt
): RechargeGlasses {
  let rechargeGlassesEvent = changetype<RechargeGlasses>(newMockEvent())

  rechargeGlassesEvent.parameters = new Array()

  rechargeGlassesEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  rechargeGlassesEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  rechargeGlassesEvent.parameters.push(
    new ethereum.EventParam(
      "glassId",
      ethereum.Value.fromUnsignedBigInt(glassId)
    )
  )
  rechargeGlassesEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return rechargeGlassesEvent
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
