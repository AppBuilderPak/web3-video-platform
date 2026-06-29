INSERT INTO roles(name,permissions,created_at) VALUES ('admin', JSON_OBJECT('all', true), NOW()), ('moderator', JSON_OBJECT('moderation', true), NOW()), ('user', JSON_OBJECT('upload', true), NOW());
INSERT INTO categories(name,slug,created_at) VALUES ('Music','music',NOW()),('Gaming','gaming',NOW()),('Education','education',NOW()),('Crypto','crypto',NOW()),('News','news',NOW());
