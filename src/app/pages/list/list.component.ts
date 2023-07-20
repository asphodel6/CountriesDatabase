import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { IListPage } from '../../interfaces/list.page.interface';
import { CountriesService } from '../../services/countries.service';
import {
  pageCounter,
  pageNumber,
  searchText,
  selectedCurrencies,
  selectedOption,
  ValuesService
} from '../../services/values.service';
import { ICheckboxValue } from '../../interfaces/checkbox.value.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit, OnDestroy{
  public countries: IListPage[] = [];
  public pageNumber: number = pageNumber;
  public showMenu: boolean = false;
  public searchText: string = searchText;
  public selectedOption: string = selectedOption;
  public currencies: ICheckboxValue[] = selectedCurrencies;
  public selectedCurrencies: string[] = [];
  public checkboxCheckedCount!: number;
  public inputFocus: boolean = false;
  constructor(private _apollo: Apollo, private _countriesService: CountriesService, private _valuesService: ValuesService) {

  }

  public ngOnInit(): void {
    this._countriesService.getCountries().subscribe((result: any) => {
      this.countries = result.data.countries;
    });
    this.updateSelectedCurrencies();
    this.checkboxCheckedCount = this.selectedCurrencies.length;
  }

  public decrementPageNumber(): void {
    if (this.pageNumber !== 1) {
      -- this.pageNumber;
    }
  }

  public incrementPageNumber(): void {
    if(this.pageNumber !== pageCounter && pageCounter !== 0) {
      ++this.pageNumber;
    }
  }

  public inputChange(): void {
    this.pageNumber = 1;
  }

  public updateSelectedCurrencies(): void {
    this.selectedCurrencies = this.currencies
      .filter(option => option.value)
      .map(option => option.name);
    this.checkboxCheckedCount = this.selectedCurrencies.length;
    this.inputFocus = this.selectedCurrencies.length !== 0;
  }

  public ngOnDestroy():void {
    this._valuesService.updateSearchText(this.searchText);
    this._valuesService.updatePageNumber(this.pageNumber);
    this._valuesService.updateSelectedOption(this.selectedOption);
    this._valuesService.updateSelectedCurrencies(this.currencies);
  }
}
