// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ibwjgltmpsgrsbadnyfm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlid2pnbHRtcHNncnNiYWRueWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzOTgyNjEsImV4cCI6MjA1Njk3NDI2MX0.cXH-n8ytyHeMPguFTHJbTuRS_tyW3HvAQI2OL3qiMLw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);