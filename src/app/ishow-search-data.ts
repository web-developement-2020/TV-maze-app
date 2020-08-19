export interface IShowSearchData {
  show: {
    id: number;
    name: string;
    language: string;
    genres: [];
    runtime: number;
    premiered: Date;
    rating: {
      average: number;
    };
    image: {
      medium: string | any;
      original: string | any;
    };
    summary: string;
  };
}
