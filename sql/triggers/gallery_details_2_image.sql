/*
---
name: Propagate gallery updates to images
tags: ["gallery", "images"]
---
*/
-- DROP TRIGGER IF EXISTS trg_gallery_update_image;
CREATE TRIGGER IF NOT EXISTS trg_gallery_update_image
AFTER UPDATE OF studio_id, date, photographer ON galleries
BEGIN
  UPDATE images SET
    studio_id = NEW.studio_id,
    date = NEW.date,
    photographer = NEW.photographer,
    updated_at = NEW.updated_at
  WHERE EXISTS (
    SELECT 1 FROM galleries_images WHERE gallery_id = NEW.id AND image_id = images.id
  );
END;
