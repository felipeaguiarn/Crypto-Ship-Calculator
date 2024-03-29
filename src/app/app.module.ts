import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HighlightedComponent } from './components/highlighted/highlighted.component';
import { CardShipComponent } from './components/card-ship/card-ship.component';
import { HttpClientModule } from '@angular/common/http';
import { PriceNowService } from './services/price-now.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorFormComponent } from './components/calculator/calculator-form/calculator-form.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { OpenBoxComponent } from './components/open-box/open-box.component';
import { FaqComponent } from './components/faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HighlightedComponent,
    CardShipComponent,
    CalculatorFormComponent,
    CalculatorComponent,
    OpenBoxComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [PriceNowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
