-- DROP TRIGGER IF EXISTS trg_scene_add_gallery_performer;
CREATE TRIGGER IF NOT EXISTS trg_scene_add_gallery_performer
AFTER INSERT ON performers_scenes
BEGIN
  INSERT OR IGNORE INTO performers_galleries (performer_id, gallery_id)
    SELECT NEW.performer_id, gallery_id FROM scenes_galleries
    WHERE scene_id = NEW.scene_id;
END;

-- DROP TRIGGER IF EXISTS trg_scene_remove_gallery_performer;
CREATE TRIGGER IF NOT EXISTS trg_scene_remove_gallery_performer
AFTER DELETE ON performers_scenes
BEGIN
  DELETE FROM performers_galleries
  WHERE performer_id = OLD.performer_id
    AND EXISTS (SELECT 1 FROM scenes_galleries WHERE scene_id = OLD.scene_id);
END;
