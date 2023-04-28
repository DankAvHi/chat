import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { trpc } from "@/shared";
import { RegisterUserInput, registerSchema } from "@project/shared";
import { AuthStyles as S } from "./Auth.styles";

export const RegisterForm = () => {
  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserInput>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate: register, error, isError } = trpc.auth.register.useMutation();

  const formOnSubmitHandler = (data: RegisterUserInput) => register(data);

  return (
    <S.Form onSubmit={handleSubmit(formOnSubmitHandler)}>
      {/* <Field
        label={`Enter your login`}
        validationState={isError ? "error" : "success"}
        validationMessage={error?.message}
      >
        <Input
          placeholder="login"
          required={true}
          {...registerField("login")}
        />
      </Field>

      <Field
        validationState={errors.password?.message ? "error" : "none"}
        validationMessage={errors.password?.message}
        label={`Enter your password`}
      >
        <Input
          placeholder="password"
          required={true}
          type="password"
          {...registerField("password")}
        />
      </Field>

      <Field
        validationState={errors.passwordConfirm?.message ? "error" : "none"}
        validationMessage={errors.passwordConfirm?.message}
        label={`Confirm your password`}
      >
        <Input
          placeholder="confirm password"
          required={true}
          type="password"
          {...registerField("passwordConfirm")}
        />
      </Field>

      <Button appearance="primary" type="submit">
        {`Register`}
      </Button> */}
    </S.Form>
  );
};
