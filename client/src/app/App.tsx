import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "@/widgets";
import { createTRPCClient, trpc } from "@/shared/api";
import { AppStyles as S } from "./App.styles";
import { GlobalStyles } from "./styles";

function App() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => createTRPCClient());
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <GlobalStyles />
                <Navigation />
                <S.App id="app">
                    <Outlet />
                </S.App>
            </QueryClientProvider>
        </trpc.Provider>
    );
}

export default App;
