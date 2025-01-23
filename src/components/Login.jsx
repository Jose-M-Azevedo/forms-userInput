import { useRef, useState } from "react";

export default function StateLogin() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const pass = useRef();

  function handleSumbit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPass = pass.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);

    // reset
    // email.current.value = ""; // Not recommended with refs
    // pass.current.value = ""; // Not recommended with refs
  }

  return (
    <form onSubmit={handleSumbit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={pass} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
