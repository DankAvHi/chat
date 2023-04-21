import { TRPCError } from "@trpc/server";
import { middleware, publicProcedure } from "../../tRPC";

const isNotAuth = middleware(({ ctx, next }) => {
    const { req } = ctx;

    const token = req.headers.authorization?.split(" ")[1];

    if (token)
        throw new TRPCError({
            code: "CONFLICT",
            message: "You are already logged in",
        });

    return next();
});

export const notAuthProcedure = publicProcedure.use(isNotAuth);
