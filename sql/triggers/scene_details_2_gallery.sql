-- DROP TRIGGER IF EXISTS trg_scene_update_gallery;
CREATE TRIGGER IF NOT EXISTS trg_scene_update_gallery
AFTER UPDATE OF studio_id, date, director ON scenes
BEGIN
  UPDATE galleries SET
    studio_id = NEW.studio_id,
    date = NEW.date,
    photographer = NEW.director,
    updated_at = NEW.updated_at
  FROM galleries AS g
  WHERE g.id = galleries.id
    AND EXISTS (SELECT 1 FROM scenes_galleries WHERE scene_id = NEW.id AND gallery_id = g.id);
END;
