import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.less']
})
export class CountryCardComponent {
  @Input() public name!: string;
  @Input() public currency!: string;
  @Input() public continentName!: string;
  @Input() public code!: string;

  constructor(private _router: Router) {
  }

  public moreAboutCountry(code: string): void {
    this._router.navigate(['card', code]);
  }
}
