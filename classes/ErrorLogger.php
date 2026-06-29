<?php
final class ErrorLogger { public static function log(Throwable $e): void { $dir=BASE_PATH.'/logs'; if(!is_dir($dir)) mkdir($dir,0755,true); error_log('['.date('c').'] '.$e.PHP_EOL,3,$dir.'/app.log'); }}
