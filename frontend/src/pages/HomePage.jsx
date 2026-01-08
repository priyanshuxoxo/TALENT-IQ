import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import toast from "react-hot-toast";

function HomePage() {
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          toast.error("This is a succes toast");
        }}
      >
        Click me
      </button>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignedOut />
      </SignedIn>
      <UserButton />
    </div>
  );
}

export default HomePage;
