import { createClient } from '@supabase/supabase-js';

const URL = 'https://kfpwubizhglnkeusqcon.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmcHd1Yml6aGdsbmtldXNxY29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3Nzc1MDIsImV4cCI6MjA0NjM1MzUwMn0.58hKtDObd7Y4rw2iC2fMnP2wiAYeHGxlK1KSuJbZxeQ';

const supabase = createClient(URL, API_KEY); 
export { supabase };