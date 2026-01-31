import { createClient } from "@supabase/supabase-js";

const URL = "https://oluorjkfrfzpcgplbunx.supabase.co";

const API_KEY = "sb_publishable_90k42gjLcdKeEOBeZpDzQg_-tewkWY1";

const supabase = createClient(URL, API_KEY);
export default supabase;
