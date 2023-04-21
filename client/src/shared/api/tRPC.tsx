import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@project/shared";

export const trpc = createTRPCReact<AppRouter>();
export const createTRPCClient = () =>
    trpc.createClient({
        links: [
            httpBatchLink({
                url: `http://${import.meta.env.VITE_SERVER_HOST}:${
                    import.meta.env.VITE_SERVER_PORT
                }/api`,
                fetch(url, options) {
                    return fetch(url, {
                        ...options,
                        credentials: "include",
                    });
                },
            }),
        ],
    });
