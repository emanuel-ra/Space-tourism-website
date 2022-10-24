import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
import { resolve, parse } from 'path';
export default defineConfig({
  plugins: [react()] ,
});
