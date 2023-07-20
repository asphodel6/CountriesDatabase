import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CardPageComponent } from './pages/card/card-page.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { SelectedFilterPipe } from './pipes/selected-filter.pipe';
import { CheckboxFilterPipe } from './pipes/checkbox-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CountryCardComponent,
    CardPageComponent,
    SearchPipe,
    SelectedFilterPipe,
    CheckboxFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
