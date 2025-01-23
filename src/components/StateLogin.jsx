import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passValue,
    handleInputChange: handlePassChange,
    handleInputBlur: handlePassBlur,
    hasError: passHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSumbit(event) {
    event.preventDefault();

    if (emailHasError || passHasError) {
      return;
    }
    console.log(emailValue, passValue);
  }

  return (
    <form onSubmit={handleSumbit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          type="email"
          name="email"
          id="email"
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailHasError && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          value={passValue}
          onChange={handlePassChange}
          onBlur={handlePassBlur}
          error={passHasError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
