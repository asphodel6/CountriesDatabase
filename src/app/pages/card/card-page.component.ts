import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, inject, OnInit } from '@angular/core';
import { countryData, countryDataProvider } from '../../providers/country-data.provider';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Observable, of, take } from 'rxjs';
import { ICardPage } from '../../interfaces/card.page.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.less'],
  providers: [
    {
      provide: countryData,
      useFactory: countryDataProvider,
      deps: [ActivatedRoute, CountriesService]
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPageComponent implements OnInit, DoCheck {

  public countryData$: Observable<any> = inject(countryData);
  public country$!: Observable<ICardPage>;

  constructor(private _router: Router, private _cdr: ChangeDetectorRef) {

  }

  public ngOnInit():void {
    this.countryData$.pipe(
      take(1)
    ).subscribe((country) => this.country$ = of(country.data.country));
  }

  public ngDoCheck(): void {
    this._cdr.detectChanges();
  }

  public return(): void {
    this._router.navigate(['list']);
  }
}
