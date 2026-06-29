<?php
return [
    'db' => ['host'=>'127.0.0.1','name'=>'web3video','user'=>'root','pass'=>'','charset'=>'utf8mb4'],
    'app' => ['name'=>'Web3Video','url'=>'http://localhost','env'=>'production','debug'=>false,'timezone'=>'UTC','session_name'=>'wv_secure_session'],
    'security' => ['csp'=>"default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' https://cdn.jsdelivr.net 'unsafe-inline'; img-src 'self' data: https:; media-src 'self' blob:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'", 'rate_limit'=>['max'=>120,'window'=>60]],
    'uploads' => ['video_max_mb'=>1024,'image_max_mb'=>8,'allowed_video'=>['video/mp4','video/webm','video/ogg'],'allowed_image'=>['image/jpeg','image/png','image/webp']],
    'mail' => ['from'=>'no-reply@example.com','smtp'=>null],
    'crypto' => ['coins'=>['BTC','LTC','ETH','USDT_TRC20','USDT_ERC20','BNB','MATIC']]
];
