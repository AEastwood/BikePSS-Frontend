import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'

export default defineConfig({
    resolve: {
        alias: [
            {
                find: "common",
                replacement: path.resolve(__dirname, "src"),
            },
        ],
    },

    plugins: [
        react()
    ],
    server: {
        watch: {
            usePolling: true,
        },
        host: true,
        strictPort: true,
        port: 5173,
    }
});