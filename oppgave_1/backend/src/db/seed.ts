import fs from "node:fs/promises";
import { join } from "path";
import type { DB } from "./db.js";
import { commentsdb, coursesdb, lessonsdb } from "@/features/types/index.js";




export const seed = async (db: DB) => {
    const path = join(import.meta.dirname, "data.json");;
    const file = await fs.readFile(path, "utf-8");
    const { courses, lessons, comments } = JSON.parse(file) as {
        courses: coursesdb[];
        lessons: lessonsdb[];
        comments: commentsdb[];
    };
  
    const insertcourses = db.prepare(`
      INSERT INTO courses (id, title, slug, description, categories) 
      VALUES              (?,   ?,      ?,      ?,                ?)
    `);
  
   
    const insertlessons = db.prepare(`
        INSERT INTO lessons (id, courses_id, title, categories,  slug , description, text) 
        VALUES              (?,           ?,     ?,          ?,      ?,           ?,    ?)
      `);

      const insertcomments = db.prepare(`
        INSERT INTO comments (id, lessons_id, created_by,created_by_id , comment) 
        VALUES               (?,             ?,          ?,             ?,        ?)
      `);
  
      db.transaction(() => {
        console.log("courses")
        for(const course of courses) {
            console.log(course)
            insertcourses.run(course.id,course.title,course.slug,course.description,course.categories)
        }
        console.log("lesson")
        for(const lesson of lessons) {
            console.log(lesson)
            insertlessons.run(
                lesson.id,
                lesson.courses_id,
                lesson.title,
                lesson.categories,
                lesson.slug,
                lesson.description,
                lesson.text
            )
        }
        console.log("comments")
        for(const comment of comments) {
            console.log(comment)
            insertcomments.run(comment.id,comment.lessons_id,comment.created_by,comment.created_by_id,comment.comment)
        }
    })();
  };