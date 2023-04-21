import { authRouter } from "../auth";
import { userRouter } from "../user";
import { router } from "./tRPC";

export const appRouter = router({
    user: userRouter,
    auth: authRouter,
});

export type AppRouter = typeof appRouter;
