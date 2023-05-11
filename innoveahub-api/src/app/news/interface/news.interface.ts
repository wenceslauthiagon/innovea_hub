export interface IArticlesObject {
  status: string;
  totalResults: number;
  articles: [
    {
      source: {
        id: null | number;
        name: string;
      };
      author: string;
      title: string;
      description: string;
    },
  ];
}
