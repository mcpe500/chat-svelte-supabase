import type { Env } from "../contracts/vo/EnvironmentRelated.vo";

export const ENV: Env = {
    SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY
}

