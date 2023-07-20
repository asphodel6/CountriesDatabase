import { Pipe, PipeTransform } from '@angular/core';
import { IListPage } from '../interfaces/list.page.interface';
import { ValuesService } from '../services/values.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor(private _valuesService: ValuesService) {

  }

  public transform(countries: IListPage[], searchText: string): IListPage[] {
    if (!countries) {
      return [];
    }
    if (!searchText) {
      this._valuesService.updatePageCounter(Math.ceil(countries.length / 5));

      return countries;
    }

    searchText = searchText.toLocaleLowerCase();

    const filterCountries: IListPage[] = countries.filter((country: IListPage ) => {
      return country.name.toLocaleLowerCase().includes(searchText);
    });
    this._valuesService.updatePageCounter(Math.ceil(filterCountries.length / 5));

    return filterCountries;
  }

}
