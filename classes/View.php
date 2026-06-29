<?php
final class View { public static function render(string $view, array $data=[]): void { extract($data, EXTR_SKIP); $file=BASE_PATH.'/views/'.$view.'.php'; require BASE_PATH.'/views/layouts/main.php'; }}
