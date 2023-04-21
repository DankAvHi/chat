import { Button, Card, Text } from "@fluentui/react-components";
import { useState } from "react";
import { AuthStyles as S, useAuthFluentStyles } from "./Auth.styles";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const AuthPage = () => {
  const FS = useAuthFluentStyles();

  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const switchModeButtonOnClickHandler = () =>
    setAuthMode((prev) => (prev === "login" ? "register" : "login"));

  return (
    <S.Auth>
      <Card className={FS.Card}>
        <Text
          size={700}
          align="center"
          as="h1"
          className={FS.Heading}
        >{`Login, to chat with your friends`}</Text>

        {authMode === "login" ? <LoginForm /> : <RegisterForm />}

        <Text size={200} as="p">
          {authMode === "login"
            ? `You are not have account? Register now`
            : `Already have an account? login now`}
        </Text>
        <Button onClick={switchModeButtonOnClickHandler}>
          {authMode === "login" ? `Register` : `Login`}
        </Button>
      </Card>
    </S.Auth>
  );
};
