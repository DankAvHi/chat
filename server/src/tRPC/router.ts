import { userRouter } from "../user";
import { router } from "./tRPC";

export const appRouter = router({
    user: userRouter,
});

export type AppRouter = typeof appRouter;
