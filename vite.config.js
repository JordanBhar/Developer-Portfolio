import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
var __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        target: 'es2020',
        minify: 'terser',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    'three': ['three', '@react-three/fiber', '@react-three/drei'],
                    'animation': ['gsap', 'framer-motion'],
                }
            }
        }
    },
    server: {
        port: 3000,
        strictPort: false,
        open: true,
    }
});
