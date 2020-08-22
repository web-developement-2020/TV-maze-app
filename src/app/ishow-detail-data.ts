export interface IShowDetailData {
  id: number;
  url: string;
  name: string;
  language: string;
  genres: [];
  runtime: number;
  premiered: Date;
  officialSite: string;
  schedule: {
    time: string;
    days: [];
  };
  rating: number;
  network:{
    name: string;
  }
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _embedded: {
    cast: [];
  };
}
