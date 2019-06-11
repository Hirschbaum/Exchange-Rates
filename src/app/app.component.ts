import { Component } from '@angular/core';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private exService: ExchangeService) {}



  exchangeRate = '';
  hasResult = false;
  result = [];
  currencies = ["CHF", "DKK", "EUR", "GBP", "HUF", "NOK", "SEK", "USD"];

  getRates() {
    this.exService.getExchangeRate(this.exchangeRate)
    .subscribe((rate: any) => {
      /*console.log(rate);*/
      this.hasResult = true;
      this.result = rate.rates;
    });
  }
}
