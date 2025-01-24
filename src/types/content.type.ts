export type ContentItem = {
  id: number;
  title: string;
  content: {
    section: {
      img: string;
      paragraph: string;
    };
  }[];
};
