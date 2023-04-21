import { TRPCError } from "@trpc/server";
import { middleware, publicProcedure } from "../../tRPC";

const isAuth = middleware(({ ctx, next }) => {
    const { req } = ctx;

    const token = req.headers.authorization?.split(" ")[1];

    if (!token)
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "You must be logged in to access this resource",
        });

    return next();
});

export const protectedProcedure = publicProcedure.use(isAuth);
