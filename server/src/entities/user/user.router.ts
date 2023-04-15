import { z } from "zod";
import { router, publicProcedure } from "../../tRPC";
import { TRPCError } from "@trpc/server";
import { createUser, getUser, getUserList } from "./user.service";

export const userRouter = router({
    getUserById: publicProcedure.input(z.string()).query(async (req) => {
        const { input: id } = req;
        const user = await getUser(id);
        if (!user) {
            throw new TRPCError({
                code: "NOT_FOUND",
                message: `User with ID ${id} not found`,
            });
        }
        return user;
    }),

    getUserList: publicProcedure.query(async () => await getUserList()),

    createUser: publicProcedure.input(z.object({ login: z.string(), password: z.string() })).mutation(async (req) => {
        const { login, password } = req.input;

        const user = await createUser(login, password);

        return user;
    }),
});
