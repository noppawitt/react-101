export interface News {
  content: {
    [lang: string]: string;
  };
  coverImage: string;
  category: string;
  updatedAt: string;
}
