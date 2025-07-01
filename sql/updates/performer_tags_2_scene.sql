INSERT OR IGNORE INTO scenes_tags (scene_id, tag_id)
SELECT DISTINCT
  ps.scene_id,
  pt.tag_id
FROM performers_tags AS pt
INNER JOIN performers_scenes AS ps ON ps.performer_id = pt.performer_id
WHERE
  NOT EXISTS (
    SELECT 1 FROM scenes_tags
    WHERE ps.scene_id = scene_id AND pt.tag_id = tag_id
  );
