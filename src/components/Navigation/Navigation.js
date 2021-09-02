import React from "react";

function Navigation({ onRouteChange, isSignedIn, signOut }) {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => signOut()}
          className="f4 link dim underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("SignIn")}
          className="f4 link dim underline pa3 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("Register")}
          className="f4 link dim underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
}

export default Navigation;
