import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../../chat-server/src/tRPC/router";

export const trpc = createTRPCReact<AppRouter>();
