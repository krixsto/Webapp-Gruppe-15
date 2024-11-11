import { courses, comments } from "../../data/data";

const getCourse = async (slug) => {
    const data = await courses.filter((course) => course.slug === slug);
    return data?.[0];
  };

const createCourse = async (data) => {
    await courses.push(data);
  };
  
  const getLesson = async (courseSlug, lessonSlug) => {
    const data = await courses
      .flatMap(
        (course) =>
          course.slug === courseSlug &&
          course.lessons.filter((lesson) => lesson.slug === lessonSlug)
      )
      .filter(Boolean);
    return data?.[0];
  };
  
  const getComments = async (lessonSlug) => {
    const data = await comments.filter(
      (comment) => comment.lesson.slug === lessonSlug
    );
    return data;
  };
  
  const createComment = async (data) => {
    await comments.push(data);
  };
  

const isValid = (items) => {
    const invalidFields = [];
    // eslint-disable-next-line no-shadow
    const validate = (items) => {
      if (typeof items !== "object") {
        return;
      }
      if (Array.isArray(items)) {
        items.forEach((item) => validate(item));
      } else {
        items &&
          Object.entries(items)?.forEach(([key, value]) => {
            if (
              !value ||
              value === null ||
              value === undefined ||
              (Array.isArray(value) && value?.length === 0)
            ) {
              invalidFields.push(key);
            } else {
              validate(value);
            }
          });
      }
    };
    validate(items);
    return invalidFields.length === 0;
  };
  
  export { getCourse, createCourse, getLesson, getComments, createComment, isValid };