import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthPage, ChatPage, NotFoundPage, ProfilePage } from "@/pages";
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
