export interface IShowDetail {
  id: number;
  name: string;
  shortName: string;
  url: string;
  language: string;
  genres: [];
  runtime: number;
  premiered: Date;
  officialSite: string;
  schedule_time: string;
  schedule_days: [];
  rating: number;
  network_name: string;
  image: string;
  summary: string;
  shortSummary: string;
  _embedded: any;
}
