<?php
require dirname(__DIR__).'/includes/bootstrap.php';
$path=parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$path=rtrim($path,'/') ?: '/';
try {
 if($path==='/') (new HomeController())->index();
 elseif($path==='/search') (new HomeController())->search();
 elseif($path==='/login') (new AuthController())->login();
 elseif($path==='/register') (new AuthController())->register();
 elseif($path==='/logout') (new AuthController())->logout();
 elseif($path==='/upload') (new VideoController())->upload();
 elseif(preg_match('#^/watch/([a-z0-9-]+)$#',$path,$m)) (new VideoController())->watch($m[1]);
 else { http_response_code(404); View::render('errors/404',['title'=>'Not found']); }
} catch (Throwable $e) { ErrorLogger::log($e); View::render('errors/500',['title'=>'Error','message'=>$e->getMessage()]); }
