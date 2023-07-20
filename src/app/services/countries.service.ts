import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, take } from 'rxjs';
import { GET_COUNTRIES } from '../graphql/graphql.queries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _apollo: Apollo) {

  }

  public getCountries(): Observable<any> {
    return this._apollo.watchQuery({
      query: GET_COUNTRIES,
    }).valueChanges.pipe(
      take(1)
    );
  }

  public getCountry(code: string): Observable<any> {
    return this._apollo.watchQuery({
      query: gql`
    query {
      country(code:${code}) {
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
    }`
    }).valueChanges.pipe(
      take(1)
    );
  }
}
