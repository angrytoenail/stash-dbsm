-- DROP TRIGGER IF EXISTS trg_scene_add_gallery_tag;
CREATE TRIGGER IF NOT EXISTS trg_scene_add_gallery_tag
AFTER INSERT ON scenes_tags
BEGIN
  INSERT OR IGNORE INTO galleries_tags (tag_id, gallery_id)
    SELECT NEW.tag_id, gallery_id FROM scenes_galleries
    WHERE scene_id = NEW.scene_id;
END;

-- DROP TRIGGER IF EXISTS trg_scene_remove_gallery_tag;
CREATE TRIGGER IF NOT EXISTS trg_scene_remove_gallery_tag
AFTER DELETE ON scenes_tags
BEGIN
  DELETE FROM galleries_tags
  WHERE tag_id = OLD.tag_id
    AND EXISTS (SELECT 1 FROM scenes_galleries WHERE scene_id = OLD.scene_id);
END;
