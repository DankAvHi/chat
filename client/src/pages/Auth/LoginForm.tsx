import { Input, Button, Field } from "@fluentui/react-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginUserInput, loginSchema } from "@project/shared";
import { AuthStyles as S } from "./Auth.styles";

export const LoginForm = () => {
    const {
        register: registerField,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginUserInput>({
        resolver: zodResolver(loginSchema),
    });

    const formOnSubmitHandler = (data: LoginUserInput) => console.log(data);

    return (
        <S.Form onSubmit={handleSubmit(formOnSubmitHandler)}>
            <Field label={`Enter your login`}>
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

            <Button appearance="primary" type="submit">
                {`Login`}
            </Button>
        </S.Form>
    );
};
