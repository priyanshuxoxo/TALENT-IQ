import {
  SignedIn,
  SignInButton,
  SignOutButton,
  UserButton,
  SignedOut,
} from "@clerk/clerk-react";
import "./App.css";
function App() {
  return (
    <>
      <div className="page">
        <div className="auth-card">
          <h1>Welcome to Talent IQ</h1>
          <p>Sign in to continue</p>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn-primary">Sign In</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="signed-in">
              <UserButton />
              <SignOutButton>
                <button className="btn-secondary">Sign Out</button>
              </SignOutButton>
            </div>
          </SignedIn>
        </div>
      </div>
    </>
  );
}

export default App;
