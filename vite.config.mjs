import { fileURLToPath } from "node:url";

const projectDirectory = fileURLToPath(new URL(".", import.meta.url));

export default {
  root: projectDirectory,
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
};
