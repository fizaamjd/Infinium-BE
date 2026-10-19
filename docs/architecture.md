# Architecture

server.js loads environment, validates required settings and starts src/app.js. Route modules delegate to controllers, which use Supabase models, GitHub/model services and the Python-agent HTTP adapter. Supabase's admin client bypasses RLS and is server-only.

Application sessions and Python-agent sessions are distinct contracts; configure both services rather than assuming tokens are interchangeable. Health reports process status. No complete database bootstrap/migration or production isolation proof is supplied.
