export interface IShowDetailsData {
  name: string,
  image: {
    medium: string
  },
  officialSite: string,
  rating:{
    average: number
  },
  network: {
    name: string,
    country: string
  },
  genres: Array<string>,
  language: string,
  _links: {
    previousepisode:{
      href: string
    }

  },
  premiered: string,
  summary: string,
  schedule: {
    time: string,
    days: Array<string>,
  }
  _embedded:{
    cast: [
      {
      person: {
        name: string,
        url: string,
        image:{
          medium: string
        }
      }
      },
      {
      person: {
        name: string,
        url: string,
        image:{
          medium: string
          }
        }
        },
        {
          person: {
            name: string,
            url: string,
            image:{
              medium: string
            }
          }
          },
          {
            person: {
              name: string,
              url: string,
              image:{
                medium: string
              }
            }
            }
    ]
  }
}
