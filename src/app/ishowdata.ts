export interface IShowData {
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
  };

  summary: string;
}
