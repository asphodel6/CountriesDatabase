import { InjectionToken } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { ICardPage } from '../interfaces/card.page.interface';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../services/countries.service';

export const countryData: InjectionToken<Observable<ICardPage>> = new InjectionToken<Observable<ICardPage>>('countryData');

export function countryDataProvider(route: ActivatedRoute, service: CountriesService): Observable<ICardPage> {
  return route.paramMap.pipe(
    map((params) => params.get('key') as string),
    switchMap(code => service.getCountry(`"${code}"`))
  );
}
