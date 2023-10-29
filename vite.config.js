import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import laravel from "laravel-vite-plugin";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
            postcss: [tailwindcss(), autoprefixer()],
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
