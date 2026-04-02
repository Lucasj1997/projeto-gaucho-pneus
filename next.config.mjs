import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Raiz fixa do projeto (evita resolver deps na pasta OneDrive/Área de Trabalho). */
const projectRoot = __dirname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Em pastas sincronizadas (ex.: OneDrive), o Turbopack pode resolver CSS no diretório errado.
  // Use `npm run dev` (webpack) localmente; `npm run dev:turbo` se quiser testar Turbopack.
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
