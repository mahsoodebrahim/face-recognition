import React, { useState } from "react";

function Register({ onRouteChange }) {
  const [name, setName] = useState("");

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-40-l mw8 center  shadow-5">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name-address">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name-address"
                id="name-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
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
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer"></label>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange("Home")}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register & Sign In"
            />
          </div>
        </div>
      </main>
    </article>
  );
}

export default Register;
