<?php
class User extends BaseModel {
 public function create(string $u,string $email,string $pass,string $role='user'): int { $this->db->beginTransaction(); $hash=password_hash($pass,PASSWORD_DEFAULT); $s=$this->db->prepare('INSERT INTO users(username,email,password_hash,role,status,email_verified,created_at) VALUES(?,?,?,?,?,0,NOW())'); $s->execute([$u,$email,$hash,$role,'active']); $id=(int)$this->db->lastInsertId(); $this->db->prepare('INSERT INTO channels(user_id,name,slug,created_at) VALUES(?,?,?,NOW())')->execute([$id,$u,Validator::slug($u).'-'.$id]); foreach(App::config('crypto.coins',[]) as $coin){$this->db->prepare('INSERT INTO wallets(user_id,coin) VALUES(?,?)')->execute([$id,$coin]);} $this->db->commit(); return $id; }
 public function findByEmail(string $email): ?array { $s=$this->db->prepare('SELECT * FROM users WHERE email=? LIMIT 1'); $s->execute([$email]); return $s->fetch() ?: null; }
 public function find(int $id): ?array { $s=$this->db->prepare('SELECT * FROM users WHERE id=?'); $s->execute([$id]); return $s->fetch() ?: null; }
}
