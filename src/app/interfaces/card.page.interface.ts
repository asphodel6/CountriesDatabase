export interface ICardPage {
  name: string,
  currencies: string[],
  continent: {
    name: string
  },
  capital: string,
  languages: [
    {
      name: string
    }
  ],
  phones: string,
  awsRegion: string,
  code: string
}
