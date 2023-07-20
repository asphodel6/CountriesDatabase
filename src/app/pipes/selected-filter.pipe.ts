import { Pipe, PipeTransform } from '@angular/core';
import { IListPage } from '../interfaces/list.page.interface';
import { ValuesService } from '../services/values.service';

@Pipe({
  name: 'selectedFilter'
})
export class SelectedFilterPipe implements PipeTransform {

  constructor(private _valuesService: ValuesService) {

  }
  public transform(countries: IListPage[], value: string): IListPage[]{

    if (value !== 'Nothing') {
      const filterCountries: IListPage[] = countries.filter((country: IListPage ) => {
        return country.continent.name.includes(value);
      });
      this._valuesService.updatePageCounter(Math.ceil(filterCountries.length / 5));

      return filterCountries;
    }

    this._valuesService.updatePageCounter(Math.ceil(countries.length / 5));

    return countries;
  }

}
