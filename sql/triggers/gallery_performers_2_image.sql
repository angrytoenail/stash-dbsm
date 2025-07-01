-- DROP TRIGGER IF EXISTS trg_gallery_add_image_performer;
CREATE TRIGGER IF NOT EXISTS trg_gallery_add_image_performer
AFTER INSERT ON performers_galleries
BEGIN
  INSERT OR IGNORE INTO performers_images (performer_id, image_id)
    SELECT NEW.performer_id, image_id FROM galleries_images
    WHERE gallery_id = NEW.gallery_id;
END;

-- DROP TRIGGER IF EXISTS trg_gallery_remove_image_performer;
CREATE TRIGGER IF NOT EXISTS trg_gallery_remove_image_performer
AFTER DELETE ON performers_galleries
BEGIN
  DELETE FROM performers_images
  WHERE performer_id = OLD.performer_id
    AND EXISTS (SELECT 1 FROM galleries_images WHERE gallery_id = OLD.gallery_id);
END;
