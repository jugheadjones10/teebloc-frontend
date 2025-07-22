import { SignedIn } from "@clerk/clerk-react";
import { Redirect, Route, Switch, useRoute } from "wouter";
import MyWorksheets from "./components/MyWorksheets";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import { useUser } from "@clerk/clerk-react";
import posthog from "posthog-js";
import Writing from "./components/writing/Writing";
import Feedback from "./components/writing/Feedback";
import Subscribe from "./components/Subscribe";
import CreateWorksheet from "./components/CreateWorksheet";
import CustomWorksheetAnswers from "./components/Author";

function App() {
  const { isSignedIn, user, isLoaded } = useUser();

  // We do this so that we can temporarily host marked pages on this domain
  const [isMarkedRoute] = useRoute("/marked/*");

  if (isLoaded && isSignedIn) {
    posthog.identify(user.id, {
      email: user.emailAddresses[0].emailAddress,
      name: user.fullName,
    });
  }

  return (
    <div>
      <TelegramPromotionBanner />
      {!isMarkedRoute && <Navbar />}
      <Switch>
        <Route path="/">
          <Redirect to="/practice" />
        </Route>
        <Route path="/marked/:id">
          {(params) => <Feedback id={params.id} />}
        </Route>
        <SignedIn>
          <Route path="/practice" nest>
            <Route path="/">
              <Options />
            </Route>
            <Route path="/worksheets">
              <MyWorksheets />
            </Route>
            <Route path="/cart">
              <CreateWorksheet />
            </Route>
            <Route path="/subscribe">
              <Subscribe />
            </Route>
            <Route path="/author">
              <CustomWorksheetAnswers />
            </Route>
          </Route>
          <Route path="/writing" nest>
            <Route path="/">
              <Writing />
            </Route>
          </Route>
        </SignedIn>
        <Route>404, Not Found!</Route>
      </Switch>
    </div>
  );
}

function TelegramPromotionBanner() {
  return (
    <div className="bg-blue-500 text-white text-sm py-1.5 text-center">
      <a
        href="https://t.me/+73EyKsz68qBmMzFl"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 hover:underline"
      >
        <svg
          role="img"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Telegram</title>
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
        Join our Telegram community to ask for help, give suggestions, and get
        updates!
      </a>
    </div>
  );
}

export default App;
