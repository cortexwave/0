
interface ImportMetaEnv {
  readonly VITE_API_KEY: string; // add any other VITE_ variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}