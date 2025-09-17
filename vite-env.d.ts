interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL: string;
    readonly VITE_SUPABASE_PUBLISHABLE_KEY: string;
    readonly VITE_CLIENT_ID: string;

}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}