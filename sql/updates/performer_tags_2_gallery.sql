INSERT OR IGNORE INTO galleries_tags (gallery_id, tag_id)
SELECT DISTINCT
  pg.gallery_id,
  pt.tag_id
FROM performers_tags AS pt
INNER JOIN performers_galleries AS pg ON pt.performer_id = pg.performer_id
WHERE
  NOT EXISTS (
    SELECT 1 FROM galleries_tags
    WHERE pg.gallery_id = gallery_id AND pt.tag_id = tag_id
  );
