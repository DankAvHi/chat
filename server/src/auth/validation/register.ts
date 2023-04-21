import { TypeOf, object, string } from "zod";

export const registerSchema = object({
    login: string({ required_error: "Login is required" }),

    password: string({ required_error: "Password is required" })
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),

    passwordConfirm: string({ required_error: "Please enter your password" }),
}).refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
});

export type RegisterUserInput = TypeOf<typeof registerSchema>;
