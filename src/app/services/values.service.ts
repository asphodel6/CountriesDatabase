import { Injectable } from '@angular/core';
import { ICheckboxValue } from '../interfaces/checkbox.value.interface';

export let pageCounter: number = 0;
export let searchText: string = '';
export let pageNumber: number = 1;
export let selectedOption: string = 'Nothing';
export let selectedCurrencies: ICheckboxValue[] = [
  { name: 'EUR', value: false },
  { name: 'USD', value: false },
  { name: 'GBP', value: false },
];

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  public updateSearchText(text: string): void {
    searchText = text;
  }

  public updatePageCounter(count: number): void {
    pageCounter = count;
  }

  public updatePageNumber(count: number): void {
    pageNumber = count;
  }

  public updateSelectedOption(option: string): void {
    selectedOption = option;
  }

  public updateSelectedCurrencies(currencies: ICheckboxValue[]): void {
    selectedCurrencies = currencies;
  }
}
