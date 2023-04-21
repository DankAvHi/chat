import { TRPCError } from "@trpc/server";
import { publicProcedure } from "../../tRPC";
import { loginSchema } from "../validation";
import { findUniqueUser } from "../../user/user.service";
import { comparePassword } from "../helpers/comparePassword";

export const login = publicProcedure
    .input(loginSchema)
    .mutation(async ({ input }) => {
        const { login, password } = input;

        const user = findUniqueUser({ login });

        if (!user || !comparePassword(login, password)) {
            throw new TRPCError({
                code: "UNAUTHORIZED",
                message: `Login or password are incorect`,
            });
        }

        return { status: "succes" };
    });
