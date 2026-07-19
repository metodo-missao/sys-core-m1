// supabase-init.js
// Centraliza a conexão. Nenhuma aula deve ter lógica de conexão, apenas esta.
const supabaseUrl = 'https://kulaumnlntcepiikqpts.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1bGF1bW5sbnRjZXBpaWtxcHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzNDU2NDMsImV4cCI6MjA5OTkyMTY0M30.GFPptPiuy1TEao-_n_GQVlfvX7R4gDwTaY8h1ZxU76s';

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);