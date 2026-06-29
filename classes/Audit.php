<?php
final class Audit { public static function log(string $action, array $meta=[]): void { $db=App::get('db'); $stmt=$db->prepare('INSERT INTO audit_logs(user_id,ip,action,metadata,created_at) VALUES(?,?,?,?,NOW())'); $stmt->execute([$_SESSION['user_id']??null,$_SERVER['REMOTE_ADDR']??'cli',$action,json_encode($meta)]); }}
