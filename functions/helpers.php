<?php
function asset(string $path): string { return '/' . ltrim($path, '/'); }
function current_user_id(): ?int { return isset($_SESSION['user_id']) ? (int)$_SESSION['user_id'] : null; }
