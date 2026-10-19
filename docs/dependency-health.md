# Dependency health

Snapshot: 2026-10-19. npm audits contact the registry and report known dependency advisories; these are not an application penetration test. Full and production-only counts are shown separately. Compatible updates were applied without force upgrades.

| Component | Full audit | Production-only audit |
| --- | --- | --- |
| Infinium-BE | 3 high | 0 findings |

Remaining high findings are in the development nodemon/chokidar/braces chain. The registry proposes an old nodemon downgrade; it was not forced. Development tooling still executes during development/CI and should be monitored upstream.

Recheck with npm audit and npm audit --omit=dev in the relevant package directory. Do not use npm audit fix --force merely to obtain a zero count. Source-level access controls, secret storage, workflow permissions and data retention require their own review.
