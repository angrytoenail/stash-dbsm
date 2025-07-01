-- DROP TRIGGER IF EXISTS trg_gallery_add_image_tag;
CREATE TRIGGER IF NOT EXISTS trg_gallery_add_image_tag
AFTER INSERT ON galleries_tags
BEGIN
  INSERT OR IGNORE INTO images_tags (tag_id, image_id)
    SELECT NEW.tag_id, image_id FROM galleries_images
    WHERE gallery_id = NEW.gallery_id;
END;

-- DROP TRIGGER IF EXISTS trg_gallery_remove_image_tag;
CREATE TRIGGER IF NOT EXISTS trg_gallery_remove_image_tag
AFTER DELETE ON galleries_tags
BEGIN
  DELETE FROM images_tags
  WHERE tag_id = OLD.tag_id
    AND EXISTS (SELECT 1 FROM galleries_images WHERE gallery_id = OLD.gallery_id);
END;
