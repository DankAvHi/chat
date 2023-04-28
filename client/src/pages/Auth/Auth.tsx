import { useState } from "react";
import { AuthStyles as S } from "./Auth.styles";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const AuthPage = () => {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const switchModeButtonOnClickHandler = () =>
    setAuthMode((prev) => (prev === "login" ? "register" : "login"));

  return (
    <S.Auth>
      <div>
        <h1>{`Login, to chat with your friends`}</h1>

        {authMode === "login" ? <LoginForm /> : <RegisterForm />}

        <p>
          {authMode === "login"
            ? `You are not have account? Register now`
            : `Already have an account? login now`}
        </p>
        <button onClick={switchModeButtonOnClickHandler}>
          {authMode === "login" ? `Register` : `Login`}
        </button>
      </div>
    </S.Auth>
  );
};
