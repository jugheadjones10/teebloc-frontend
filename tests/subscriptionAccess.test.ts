import assert from "node:assert/strict";
import test from "node:test";
import { hasManageableSubscription, hasSubscriptionAccess, subscriptionExpiry } from "../src/hooks/subscriptionAccess.ts";

const now = Date.parse("2026-10-13T12:00:00Z");

for (const status of ["active", "past_due"]) {
  test(`${status} access ends at the period boundary`, () => {
    assert.equal(hasSubscriptionAccess({ status, current_period_end: "2026-10-13T12:00:00Z" }, now), false);
    assert.equal(hasSubscriptionAccess({ status, current_period_end: "2026-10-13T11:59:59Z" }, now), false);
    assert.equal(hasSubscriptionAccess({ status, current_period_end: "2026-10-13T12:00:01Z" }, now), true);
  });
}

test("canceled access is denied even with a future period end", () => {
  assert.equal(hasSubscriptionAccess({ status: "canceled", current_period_end: "2026-11-13T12:00:00Z" }, now), false);
});

test("missing or invalid subscription data does not grant access", () => {
  assert.equal(hasSubscriptionAccess(undefined, now), false);
  for (const value of [null, undefined, "", "invalid"]) {
    assert.equal(hasSubscriptionAccess({ status: "active", current_period_end: value }, now), false);
  }
});

test("Hasura timestamps without an offset represent UTC", () => {
  assert.equal(subscriptionExpiry("2026-10-13T12:00:00"), now);
  assert.equal(subscriptionExpiry("2026-10-13T20:00:00+08:00"), now);
});

test("expired subscribers can still manage billing without paid access", () => {
  for (const status of ["active", "past_due"]) {
    const subscription = { status, current_period_end: "2025-01-01T00:00:00Z" };
    assert.equal(hasManageableSubscription(subscription), true);
    assert.equal(hasSubscriptionAccess(subscription, now), false);
  }
  assert.equal(hasManageableSubscription({ status: "canceled", current_period_end: "2025-01-01T00:00:00Z" }), false);
  assert.equal(hasManageableSubscription(undefined), false);
});
