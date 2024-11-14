import type { DB } from "./db";
/*
courses har table id,title,slug,description og categories

lessons har id,courses_id,title,categories,slug,description og text. courses er forgien key fra courses

comments har id,lessons_slug,created_by og comment lesson slug er er forgien key fra lessons


*/
export const createTables = async (db: DB) => {
  db.exec(`
  CREATE TABLE IF NOT EXISTS courses (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    description TEXT NOT NULL,
    categories TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS lessons (
    id TEXT PRIMARY KEY,
    courses_id TEXT NOT NULL,
    title TEXT NOT NULL,
    categories TEXT NOT NULL,
    slug TEXT NOT NULL,
    description TEXT NOT NULL,
    text TEXT,
    FOREIGN KEY (courses_id) REFERENCES courses(id)
  );

  CREATE TABLE IF NOT EXISTS comments (
    id TEXT PRIMARY KEY,
    lessons_id TEXT NOT NULL,
    created_by TEXT NOT NULL,
    created_by_id TEXT NOT NULL,
    comment TEXT NOT NULL,
    FOREIGN KEY (lessons_id) REFERENCES lessons(id) ON DELETE CASCADE
  );
`);

  db.exec(`
  CREATE INDEX IF NOT EXISTS idx_lessons_coursesId ON lessons(courses_id);
  CREATE INDEX IF NOT EXISTS idx_comments_lessonsId ON comments(lessons_id);
`);
};