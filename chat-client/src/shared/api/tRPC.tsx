import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@project/shared";

export const trpc = createTRPCReact<AppRouter>();
