import { gql } from 'apollo-angular';

const GET_COUNTRIES = gql`
  query {
    countries {
      name
      currency
      code
      continent {
        name
      }
    }
  }
`;

const GET_COUNTRY = gql`
  query($code: ID!) {
  country(code: $code) {
    name
    currencies
    continent {
      name
    }
    capital
    languages {
      name
    }
    phones
    awsRegion
    code
  }
}
`;

export { GET_COUNTRY };
export { GET_COUNTRIES };
