export interface IBlog {
    id: string;
    topic: string;
    title: string;
    image: string;
    tags: string[];
    writer: IAuthor;
    created: string;
    noofcomments: string;
    p: string[];
    subject: string;
    comments: string[];
    summary: string;
    description: string;
};
  
export interface IAuthor {
    name: string;
    image: string;
    desc: string;
    socialMediaLinks: Record<string, string>;
};

export interface IWorkshop {
    id: string;
    title: string;
    trainerid: string;
    fee: string;
    availableSeats: number;
    schedule: string;
    image: string;
    subject: string;
    summary: string;
    description: string;
    enrolled: string;
    courseWork: Record<string, IChapter>;
}

export interface IChapter {
    title: string;
    description: string;
    image: string;
}

export interface IComment {
    image: string | undefined;
    id: string;
    author: IAuthor;
    created: string;
    desc: string;
}