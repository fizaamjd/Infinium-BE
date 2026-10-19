# Configuration

Start from .env.example. server.js requires SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, JWT_SECRET, GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET. Configure PYTHON_AGENT_URL for the Python agent and GROQ_API_KEY for model-backed PDF/diagram paths. GitHub callback and FRONTEND_URL must match your OAuth app and client deployment. ALLOWED_ORIGINS is a comma-separated browser-origin allowlist.

The Supabase service-role key bypasses RLS and must never enter the frontend, screenshots, logs or repository. Use a separate development project. Models reference users, repositories, conversations and assistance records; no complete migration has been established by this maintenance work. Do not claim a fresh database can be provisioned by running npm install.
