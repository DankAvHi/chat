import { TypeOf, object, string } from "zod";

export const loginSchema = object({
  login: string({ required_error: "login is required" }).nonempty(
    "Invalid login or password",
  ),
  password: string({ required_error: "Password is required" }).nonempty(
    "Invalid login or password",
  ),
});

export type LoginUserInput = TypeOf<typeof loginSchema>;
