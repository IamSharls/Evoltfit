
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gsedbcsdwnavyophhyrz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzZWRiY3Nkd25hdnlvcGhoeXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1MzA1MzMsImV4cCI6MjA1MTEwNjUzM30.9FAqBKiUWY6HRXcdmzhkWLuX6oFJQdoA9GX8VTPD18o';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
