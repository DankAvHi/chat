import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return defineConfig({
        plugins: [react()],

        server: {
            port: Number(process.env.VITE_PORT) || 3000,
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@project": path.resolve(__dirname, "../"),
            },
        },
    });
};
