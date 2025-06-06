import { useReactiveVar } from "@apollo/client";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  useAuth,
  useClerk,
} from "@clerk/clerk-react";
import { twMerge } from "tailwind-merge";
import { Link, useLocation, useRoute } from "wouter";
import { cartItemsVar } from "../CreateWorksheet/data.tsx";
import posthog from "posthog-js";
import { useState, useEffect, useRef } from "react";
import { useSubscription } from "../../hooks/useSubscription.ts";

export default function Navbar() {
  const { signOut } = useClerk();
  const cartItems = useReactiveVar(cartItemsVar);
  const [location, setLocation] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const onSignOut = () => {
    posthog.reset();
    signOut();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const [queryString, setQueryString] = useState(
    localStorage.getItem("questionsSearchParams") || ""
  );
  useEffect(() => {
    setQueryString(localStorage.getItem("questionsSearchParams") || "");
  }, [localStorage.getItem("questionsSearchParams")]);

  return (
    <div className="p-4 sticky top-0 z-10">
      <div className="navbar bg-primary rounded-box">
        <div className="navbar-start flex items-center">
          <Link href={`/practice${queryString ? `?${queryString}` : ""}`}>
            <div className="text-xl mr-2">Teebloc</div>
          </Link>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost m-1">
              {location.startsWith("/practice") ? "Practice" : "Writing"}
              <svg
                className="fill-current h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  className={twMerge(
                    "hover:bg-base-300",
                    location.startsWith("/practice") ? "bg-base-300" : ""
                  )}
                  onClick={() =>
                    setLocation(
                      `/practice${queryString ? `?${queryString}` : ""}`
                    )
                  }
                >
                  Practice
                </a>
              </li>
              <li>
                <a
                  className={twMerge(
                    "hover:bg-base-300",
                    location.startsWith("/writing") ? "bg-base-300" : ""
                  )}
                  onClick={() => setLocation("/writing")}
                >
                  Writing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex sm:hidden ml-auto relative" ref={menuRef}>
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 menu bg-primary rounded-box w-44 shadow-lg space-y-2">
              <NavItems
                location={location}
                cartItems={cartItems}
                onSignOut={onSignOut}
              />
            </div>
          )}
        </div>

        <div className="navbar-end space-x-2 hidden sm:flex">
          <NavItems
            location={location}
            cartItems={cartItems}
            onSignOut={onSignOut}
          />
        </div>
      </div>
    </div>
  );
}

// New component for repeated nav items
function NavItems({
  location,
  cartItems,
  onSignOut,
}: {
  location: string;
  cartItems: any[]; // Replace 'any' with the correct type if known
  onSignOut: () => void;
}) {
  const { getToken } = useAuth();
  const [writingMatch] = useRoute("/writing");
  const practiceMatch = location.startsWith("/practice");
  const { hasActiveSubscription, loading } = useSubscription();
  const [isPortalLoading, setIsPortalLoading] = useState(false);

  // Modified from https://clerk.com/docs/backend-requests/making/cross-origin
  const authenticatedFetch = async (url: string, options?: RequestInit) => {
    const token = await getToken();
    return fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    });
  };

  return (
    <>
      <SignedOut>
        <SignInButton>
          <a className="btn">Log in</a>
        </SignInButton>
        <SignUpButton>
          <a className="btn btn-outline">Sign up</a>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        {practiceMatch && (
          <>
            <Link href="/practice/worksheets">
              <div
                className={`btn btn-outline ${
                  location === "/practice/worksheets" && "btn-active"
                }`}
              >
                My Worksheets
              </div>
            </Link>

            <Link href="/practice/cart">
              <div
                className={`btn btn-outline ${
                  location === "/practice/cart" && "btn-active"
                }`}
                onClick={() => {
                  posthog.capture("worksheet_cart_clicked", {
                    cartItemsCount: cartItems.length,
                  });
                }}
              >
                Create Worksheet
                {cartItems.length > 0 && (
                  <div className="badge">{cartItems.length}</div>
                )}
              </div>
            </Link>

            {!hasActiveSubscription && !loading && (
              <Link href="/practice/subscribe">
                <div
                  className={`btn btn-outline ${
                    location === "/practice/subscribe" && "btn-active"
                  }`}
                >
                  Subscribe
                </div>
              </Link>
            )}
          </>
        )}

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-outline">
            Profile
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {hasActiveSubscription && (
              <li>
                <a
                  onClick={async () => {
                    if (isPortalLoading) return;
                    setIsPortalLoading(true);
                    try {
                      const response = await authenticatedFetch(
                        `${
                          import.meta.env.VITE_BACKEND_API
                        }/create-portal-session`,
                        {
                          method: "POST",
                        }
                      );
                      if (response.url) {
                        window.location.href = response.url;
                      }
                    } finally {
                      setIsPortalLoading(false);
                    }
                  }}
                >
                  {isPortalLoading ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      Loading...
                    </>
                  ) : (
                    "Manage subscription"
                  )}
                </a>
              </li>
            )}
            <li>
              <a onClick={onSignOut}>Sign out</a>
            </li>
          </ul>
        </div>
      </SignedIn>
    </>
  );
}
