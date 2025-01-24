export type ContentItem = {
  id: number;
  title: string;
  content: {
    section: {
      paragraph: string;
    };
  }[];
};
