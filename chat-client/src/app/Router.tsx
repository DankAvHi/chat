import { AuthPage, ChatPage, ProfilePage, NotFoundPage } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

export const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                { path: "/", element: <ChatPage /> },
                { path: "/profile", element: <ProfilePage /> },
                { path: "/auth", element: <AuthPage /> },
                { path: "*", element: <NotFoundPage /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};
