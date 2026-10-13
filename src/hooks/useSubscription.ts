import { useQuery } from "@apollo/client";
import { useUser } from "@clerk/clerk-react";
import { GET_USER_SUBSCRIPTION } from "./data";
import { useIsAdmin } from "./useIsAdmin";
import { useEffect, useReducer } from "react";
import { hasManageableSubscription, hasSubscriptionAccess, subscriptionExpiry } from "./subscriptionAccess";

export function useSubscription() {
  const { user } = useUser();
  const isAdmin = useIsAdmin();

  const { data, loading, refetch } = useQuery(GET_USER_SUBSCRIPTION, {
    variables: { userId: user?.id },
    skip: !user?.id,
    fetchPolicy: "network-only",
    pollInterval: 60_000,
  });

  const subscription = data?.subscriptions?.[0];
  const expiresAt = subscriptionExpiry(subscription?.current_period_end);
  const [clockVersion, tick] = useReducer((value: number) => value + 1, 0);

  useEffect(() => {
    const remaining = expiresAt - Date.now();
    if (!Number.isFinite(remaining) || remaining <= 0) return;
    const timer = window.setTimeout(tick, Math.min(remaining, 2_147_483_647));
    return () => window.clearTimeout(timer);
  }, [expiresAt, clockVersion]);

  const hasActiveSubscription = hasSubscriptionAccess(subscription) || isAdmin;

  return {
    hasActiveSubscription,
    canManageBilling: hasManageableSubscription(subscription),
    loading,
    refetch,
  };
}
