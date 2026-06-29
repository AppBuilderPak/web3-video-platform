<?php
declare(strict_types=1);
define('BASE_PATH', dirname(__DIR__));
$configFile = BASE_PATH . '/config/config.php';
$config = file_exists($configFile) ? require $configFile : require BASE_PATH . '/config/config.example.php';
date_default_timezone_set($config['app']['timezone'] ?? 'UTC');
spl_autoload_register(function(string $class): void { foreach (['classes','models','controllers'] as $dir) { $f = BASE_PATH . "/$dir/$class.php"; if (is_file($f)) { require $f; return; } }});
set_exception_handler(function(Throwable $e) use ($config): void { ErrorLogger::log($e); http_response_code(500); if (($config['app']['debug'] ?? false) === true) { echo '<pre>'.htmlspecialchars((string)$e).'</pre>'; } else { View::render('errors/500', ['title'=>'Server error']); }});
Security::headers($config);
Session::start($config);
$db = Database::connect($config['db']);
App::set('config', $config); App::set('db', $db);
