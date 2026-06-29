# Web3Video PHP

A framework-free, open-source video-sharing platform built for PHP 8.3+, MySQL/PDO, HTML5, CSS3, vanilla JavaScript, Bootstrap 5, and Apache.

## Features

- MVC/OOP PHP application structure with secure front controller routing.
- Installer wizard that writes `config/config.php`, imports the schema, creates an admin account, and locks itself.
- Secure authentication with password hashing, hardened sessions, CSRF protection, CSP, output escaping, rate limiting, upload MIME validation, audit logging, and error logging.
- YouTube-inspired responsive interface with dark/light mode, search, upload, watch pages, comments UI, side navigation, categories, notifications placeholder, and accessibility skip links.
- Normalized MySQL schema for users, channels, videos, comments/replies, playlists, subscriptions, reports, notifications, API keys, audits, login history, crypto wallets, wallet transactions, withdrawals, and ad campaigns.
- Crypto monetization architecture for ad revenue sharing, creator rewards, referrals, tips, donations, daily rewards, deposits, withdrawals, transaction history, and multi-coin wallets.
- Advertisement architecture for banner, sidebar, homepage, video, pre-roll, mid-roll, sponsored video, and sponsored channel campaigns with targeting and approval statuses.
- Admin and API entry points with role checks and rate-limited JSON responses.

## Requirements

- PHP 8.3 or newer with PDO MySQL, fileinfo, mbstring, and OpenSSL.
- MySQL 8+ or compatible MariaDB with InnoDB and fulltext support.
- Apache with `mod_rewrite` and `.htaccess` enabled.

## Installation

1. Upload the project to shared hosting or a VPS.
2. Point the web root to `public/` when possible. If not possible, the root `.htaccess` routes requests securely.
3. Ensure `config/`, `logs/`, `cache/`, `videos/`, `thumbnails/`, and `uploads/` are writable by PHP.
4. Visit `/install/` and enter database, site, and admin details.
5. The installer imports `database/schema.sql`, imports `database/sample_data.sql`, writes `config/config.php`, creates an admin user, and creates `install/installed.lock`.
6. Delete or restrict `/install` after successful installation for defense in depth.

## Folder Structure

- `admin/` secured admin dashboard.
- `api/` REST API endpoints.
- `assets/` CSS, JavaScript, and images.
- `classes/` framework core, security, sessions, database, view, audit, validation.
- `controllers/` MVC controllers.
- `models/` PDO models.
- `views/` escaped PHP views and layouts.
- `config/` configuration templates and generated production config.
- `database/` schema and sample data.
- `install/` installer wizard.
- `videos/`, `thumbnails/`, `uploads/` media storage.
- `logs/`, `cache/` runtime storage.

## API

`GET /api/videos` returns the latest public videos as JSON. API keys are modeled in `api_keys` and can be extended with scoped middleware.

## Security Notes

- All database access uses PDO prepared statements.
- All forms use CSRF tokens.
- User content is escaped with `Security::e()`.
- Sessions use HttpOnly, SameSite cookies and secure cookies under HTTPS.
- File uploads validate MIME type with `finfo` and enforce size limits.
- Security headers include CSP, X-Frame-Options, nosniff, Referrer-Policy, and Permissions-Policy.
- Admin access is role-gated; moderator and detailed finance workflows are represented in schema and ready for expansion.

## License

MIT. See `LICENSE`.
