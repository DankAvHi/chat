import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "@/widgets";
import { trpc } from "@/shared/api";
import { GlobalStyles } from "./styles";

function App() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: `http://${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/api`,
                }),
            ],
        }),
    );
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <GlobalStyles />
                <div className="App">
                    <Navigation />
                    <Outlet />
                </div>
            </QueryClientProvider>
        </trpc.Provider>
    );
}

export default App;
