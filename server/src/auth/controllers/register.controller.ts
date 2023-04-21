import { TRPCError } from "@trpc/server";
import { publicProcedure } from "../../tRPC";
import { isUserExisted, registerUser } from "../auth.service";
import { registerSchema } from "../validation";

export const register = publicProcedure
  .input(registerSchema)
  .mutation(async ({ input }) => {
    const { login, password } = input;

    if (await isUserExisted(login)) {
      throw new TRPCError({
        code: "CONFLICT",
        message: `User with login: "${login}" is already existed`,
      });
    }

    const user = registerUser(login, password);

    return { status: "succes" };
  });
