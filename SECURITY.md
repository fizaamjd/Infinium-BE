# Security policy

## Reporting

Use [GitHub private reporting](https://github.com/fizaamjd/Infinium-BE/security/advisories/new). Include the affected branch/commit, reproduction with synthetic data, impact and suggested mitigation. Do not post credentials, customer data, private repository contents, or real email in an issue. If a credential was exposed, revoke it through its provider; removing a file does not invalidate a token or erase earlier commits.

The maintained branch is `main`; there is no separate security support promise for old phase branches or tags. Dependency updates and CI checks do not establish a completed security audit.

## Known boundaries

- The Supabase service-role client bypasses RLS; keep it server-only and review every authenticated object access. JWT/password unit tests do not establish tenant isolation.
- Rate-limit middleware is defined but its global application is commented out. Do not assume public endpoints are protected by that limiter.
- GitHub tokens and uploaded code/PDF content may be forwarded to the Python agent or model providers. Review provider access, timeouts and retention.
- Configure ALLOWED_ORIGINS explicitly. Do not expose development errors or local test pages as evidence of production security.

Use dedicated development services and explicit secrets. Review provider permissions, public network exposure, data retention, and deployment access before using private data. No penetration test or production-readiness certification is claimed.
