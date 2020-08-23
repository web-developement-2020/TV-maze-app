export interface IShow {
  id: number;
  name: string;
  shortName: string;
  language: string;
  genres: [];
  runtime: number;
  premiered: Date;
  rating: number;
  image: string;
  summary: string;
  shortSummary: string;
  schedule_time: string;
  schedule_days:[];
  network: string;
}
