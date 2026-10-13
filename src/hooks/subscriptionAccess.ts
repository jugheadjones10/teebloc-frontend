import type { GetUserSubscriptionQuery } from "../__generated__/graphql";

type Subscription = GetUserSubscriptionQuery["subscriptions"][number];

export function hasManageableSubscription(subscription: Subscription | undefined): boolean {
  return ["active", "past_due"].includes(subscription?.status || "");
}

export function subscriptionExpiry(value: unknown): number {
  if (typeof value !== "string" || !value) return NaN;
  const timestamp = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(value) ? value : `${value}Z`;
  return Date.parse(timestamp);
}

export function hasSubscriptionAccess(
  subscription: Subscription | undefined,
  now = Date.now(),
): boolean {
  return (
    hasManageableSubscription(subscription) &&
    subscriptionExpiry(subscription?.current_period_end) > now
  );
}
