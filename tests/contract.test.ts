import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { EarnPoolReward } from "../generated/schema"
import { EarnPoolReward as EarnPoolRewardEvent } from "../generated/Contract/Contract"
import { handleEarnPoolReward } from "../src/contract"
import { createEarnPoolRewardEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let amount = BigInt.fromI32(234)
    let nonce = BigInt.fromI32(234)
    let cycleNo = BigInt.fromI32(234)
    let gemId = BigInt.fromI32(234)
    let newEarnPoolRewardEvent = createEarnPoolRewardEvent(
      user,
      amount,
      nonce,
      cycleNo,
      gemId
    )
    handleEarnPoolReward(newEarnPoolRewardEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EarnPoolReward created and stored", () => {
    assert.entityCount("EarnPoolReward", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EarnPoolReward",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EarnPoolReward",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "EarnPoolReward",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nonce",
      "234"
    )
    assert.fieldEquals(
      "EarnPoolReward",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "cycleNo",
      "234"
    )
    assert.fieldEquals(
      "EarnPoolReward",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "gemId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
