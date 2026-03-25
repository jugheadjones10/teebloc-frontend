import { useReactiveVar } from "@apollo/client";
import { cartItemsVar } from "../components/CreateWorksheet/data";
import { useSubscription } from "./useSubscription";
import { useIsAdmin } from "./useIsAdmin";

const QUESTION_LIMITS = {
  free: 20,
  subscriber: 50,
} as const;

export function useQuestionLimit() {
  const { hasActiveSubscription } = useSubscription();
  const isAdmin = useIsAdmin();
  const cartItems = useReactiveVar(cartItemsVar);

  const maxQuestions = isAdmin
    ? Infinity
    : hasActiveSubscription
      ? QUESTION_LIMITS.subscriber
      : QUESTION_LIMITS.free;

  const isAtLimit = cartItems.length >= maxQuestions;
  const cartCount = cartItems.length;

  return { maxQuestions, isAtLimit, cartCount };
}
