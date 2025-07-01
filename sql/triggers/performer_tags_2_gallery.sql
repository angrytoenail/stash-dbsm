-- DROP TRIGGER IF EXISTS trg_performer_add_gallery_tag;
CREATE TRIGGER IF NOT EXISTS trg_performer_add_gallery_tag
AFTER INSERT ON performers_tags
BEGIN
  INSERT OR IGNORE INTO galleries_tags (tag_id, gallery_id)
  SELECT NEW.tag_id, gallery_id FROM performers_galleries
    WHERE performer_id = NEW.performer_id;
END;

-- DROP TRIGGER IF EXISTS trg_performer_remove_gallery_tag;
CREATE TRIGGER IF NOT EXISTS trg_performer_remove_gallery_tag
AFTER DELETE ON performers_tags
BEGIN
  DELETE FROM galleries_tags
  WHERE tag_id = OLD.tag_id
    AND EXISTS (SELECT 1 FROM performers_galleries WHERE performer_id = OLD.performer_id);
END;
