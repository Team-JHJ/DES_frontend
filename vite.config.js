import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), mkcert()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
    // 빌드 시에 함수 제거
    esbuild: {
        drop: ['console', 'debugger'],
    },
    server: {
        https: true,
    },
})
