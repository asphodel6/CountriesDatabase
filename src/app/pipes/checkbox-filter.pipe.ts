import { Pipe, PipeTransform } from '@angular/core';
import { IListPage } from '../interfaces/list.page.interface';
import { ValuesService } from '../services/values.service';

@Pipe({
  name: 'checkboxFilter'
})
export class CheckboxFilterPipe implements PipeTransform {

  constructor(private _valuesService: ValuesService) {

  }

  public transform(countries: IListPage[], values: string[]): IListPage[] {
    if(values.length !== 0) {
      const filterCountries: IListPage[] = countries.filter((country: IListPage ) => {
        return values.includes(country.currency);
      });
      this._valuesService.updatePageCounter(Math.ceil(filterCountries.length / 5));

      return filterCountries;
    }
    this._valuesService.updatePageCounter(Math.ceil(countries.length / 5));

    return countries;
  }

}
