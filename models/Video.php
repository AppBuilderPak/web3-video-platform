<?php
class Video extends BaseModel {
 public function latest(int $limit=24,int $offset=0): array { $s=$this->db->prepare("SELECT v.*,c.name channel_name,c.slug channel_slug FROM videos v JOIN channels c ON c.id=v.channel_id WHERE v.visibility='public' AND v.status='published' AND (v.published_at IS NULL OR v.published_at<=NOW()) ORDER BY v.created_at DESC LIMIT ? OFFSET ?"); $s->bindValue(1,$limit,PDO::PARAM_INT); $s->bindValue(2,$offset,PDO::PARAM_INT); $s->execute(); return $s->fetchAll(); }
 public function search(string $q): array { $s=$this->db->prepare("SELECT v.*,c.name channel_name,c.slug channel_slug FROM videos v JOIN channels c ON c.id=v.channel_id WHERE v.visibility='public' AND v.status='published' AND MATCH(v.title,v.description,tags) AGAINST(? IN BOOLEAN MODE) LIMIT 50"); $s->execute([$q.'*']); return $s->fetchAll(); }
 public function findBySlug(string $slug): ?array { $s=$this->db->prepare('SELECT v.*,c.name channel_name,c.slug channel_slug,u.username FROM videos v JOIN channels c ON c.id=v.channel_id JOIN users u ON u.id=c.user_id WHERE v.slug=? LIMIT 1'); $s->execute([$slug]); return $s->fetch() ?: null; }
 public function incrementView(int $id): void { $this->db->prepare('UPDATE videos SET views=views+1 WHERE id=?')->execute([$id]); }
}
