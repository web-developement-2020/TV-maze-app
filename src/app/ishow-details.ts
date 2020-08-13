export interface IShowDetails {
  showTitle: string,
  showImage: string,
  showLink: string,
  rating: number,
  channel: string,
  country: string,
  genre: string,
  language: string,
  previousEpisode: string,
  premierDate: Date,
  summary: string,
  schedule:{
    days: string,
    time: Date
  },
  cast:{
    castName: string,
    castLink: string,
    castImage: string
  }
}
