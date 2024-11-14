
export type coursesdb={
    id:string;
    title: string;
    slug: string;
    description:string;
    categories:string;
};

export type lessonsdb={
    id:string;
    courses_id: string;
    title: string;
    categories:string;
    slug: string;
    description:string;
    text:string;
};

export type commentsdb={
    id:string;
    lessons_id:string;
    created_by:string;
    created_by_id:string;
    comment:string;
};

