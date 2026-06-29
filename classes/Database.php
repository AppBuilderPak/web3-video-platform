<?php
final class Database { public static function connect(array $c): PDO { $dsn = sprintf('mysql:host=%s;dbname=%s;charset=%s',$c['host'],$c['name'],$c['charset']??'utf8mb4'); $pdo=new PDO($dsn,$c['user'],$c['pass'],[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC,PDO::ATTR_EMULATE_PREPARES=>false]); return $pdo; }}
