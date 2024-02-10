import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nbamfosohtqozthdlzzc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iYW1mb3NvaHRxb3p0aGRsenpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MDMxMjMsImV4cCI6MjAyMjM3OTEyM30.UKliPE7NIK_7E9Wa2_B5Y2ZQkjMnxQ_z38WFweENzuU";
export const supabase = createClient(supabaseUrl, supabaseKey);
