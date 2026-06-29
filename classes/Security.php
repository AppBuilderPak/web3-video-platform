<?php
final class Security {
 public static function headers(array $config): void { if(headers_sent()) return; header('X-Frame-Options: DENY'); header('X-Content-Type-Options: nosniff'); header('Referrer-Policy: strict-origin-when-cross-origin'); header('Permissions-Policy: camera=(), microphone=(), geolocation=()'); header('Content-Security-Policy: '.($config['security']['csp'] ?? "default-src 'self'")); }
 public static function e(?string $v): string { return htmlspecialchars((string)$v, ENT_QUOTES|ENT_SUBSTITUTE, 'UTF-8'); }
 public static function csrfToken(): string { if(empty($_SESSION['csrf'])) $_SESSION['csrf']=bin2hex(random_bytes(32)); return $_SESSION['csrf']; }
 public static function verifyCsrf(): void { if(($_SERVER['REQUEST_METHOD'] ?? 'GET')==='POST' && !hash_equals($_SESSION['csrf'] ?? '', $_POST['csrf'] ?? $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '')) { http_response_code(419); exit('Invalid CSRF token'); }}
 public static function rateLimit(string $key, int $max=60, int $window=60): bool { $now=time(); $_SESSION['rl'][$key]=array_filter($_SESSION['rl'][$key] ?? [], fn($t)=>$t>$now-$window); if(count($_SESSION['rl'][$key]) >= $max) return false; $_SESSION['rl'][$key][]=$now; return true; }
 public static function validateUpload(array $file, array $allowed, int $maxMb): string { if(($file['error']??UPLOAD_ERR_NO_FILE)!==UPLOAD_ERR_OK) throw new RuntimeException('Upload failed.'); if(($file['size']??0)>$maxMb*1048576) throw new RuntimeException('File too large.'); $mime=(new finfo(FILEINFO_MIME_TYPE))->file($file['tmp_name']); if(!in_array($mime,$allowed,true)) throw new RuntimeException('Invalid file type.'); return $mime; }
}
