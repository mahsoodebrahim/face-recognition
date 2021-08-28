import React, { useState } from "react";

function SignIn({ onRouteChange }) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const onSignInSubmit = () => {
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: signInEmail, password: signInPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
          onRouteChange("Home");
        }
      });
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-40-l mw8 center  shadow-5">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={(event) => setSignInEmail(event.target.value)}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                onChange={(event) => setSignInPassword(event.target.value)}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer"></label>
          </fieldset>
          <div>
            <input
              onClick={() => onSignInSubmit()}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange("Register")}
              className="f6 link dim black db b pointer"
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
}

export default SignIn;
