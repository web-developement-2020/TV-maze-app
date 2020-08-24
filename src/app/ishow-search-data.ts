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
      medium: string;
      original: string;
    };
    summary: string;
    schedule:{
      time:string;
      days:[];
    },
    network:{
      name:string;
    }
  };
}
