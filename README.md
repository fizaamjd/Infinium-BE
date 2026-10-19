# Infinium-BE

![CI](https://github.com/fizaamjd/Infinium-BE/actions/workflows/ci.yml/badge.svg?branch=main)

The Express application API for Infinium. It handles accounts and GitHub OAuth, persists application records in Supabase, and orchestrates repository ingestion, queries, documentation, diagrams, feedback, PDF analysis and refactoring through the Python agent and configured model services.

## Live demo video

https://github.com/user-attachments/assets/5620ed13-da0e-47b4-8b99-5827b910646f

[Video and HTML source](https://github.com/fizaamjd/Infinium/tree/evaluation-1/docs/media)

This is the full Infinium product walkthrough. The API has no standalone graphical interface; the video demonstrates its role through the companion web client.

## Run locally

Use Node.js 22. Create a dedicated Supabase development project and configure its schema and policies; repository models show the queried tables, but no complete fresh-project migration is provided.

```sh
npm ci
cp .env.example .env
# Fill in development Supabase, GitHub OAuth, JWT and agent settings.
npm run dev
```

The default port is 5000. GET /health reports process health; it does not establish database or model readiness. The server validates required configuration at startup. The Python agent normally listens on http://localhost:8000.

## API groups

| Prefix | Responsibility |
| --- | --- |
| /api/auth | Registration, login and GitHub OAuth |
| /api/repos, /api/ingest, /api/branch-ingest | Repository metadata and ingestion coordination |
| /api | Query routes |
| /api/code, /api/docs, /api/diagram, /api/pdf | Code assistance, documentation, diagrams and PDF analysis |
| /api/dashboard, /api/feedback | Dashboard data and feedback |

Review route/controller files for request contracts. Authenticated routes still require an authorization/ownership review for each object. The configured rate limiter is not globally enabled; see [security](SECURITY.md).

## Verification

npm test runs isolated JWT and password regressions; npm run check parses application JavaScript. Neither starts the API nor contacts Supabase, GitHub, Groq or Ollama. See [testing](docs/testing.md) and [configuration](docs/configuration.md).

## System repositories

| Repository | Responsibility |
| --- | --- |
| [Infinium](https://github.com/fizaamjd/Infinium) | Python RAG agent, ingestion, retrieval, integrations and VS Code extension |
| [Infinium-BE](https://github.com/fizaamjd/Infinium-BE) | Express application API, Supabase persistence, auth and service orchestration |
| [Infinium-FE](https://github.com/fizaamjd/Infinium-FE) | Next.js user interface |

## Maintenance status

See [verification](docs/verification.md) for checks actually run and [dependency health](docs/dependency-health.md) for remaining findings.

## Contributing and maintenance

[Contributing](CONTRIBUTING.md) · [Support](SUPPORT.md) · [Security](SECURITY.md) · [Code of conduct](CODE_OF_CONDUCT.md) · [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE) for original contributions the maintainer is authorized to license. Third-party and collaborator rights remain separate; see [license scope](docs/license-scope.md).
