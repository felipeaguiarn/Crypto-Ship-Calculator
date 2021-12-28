import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceNowService {
  apiURL = "http://api.pancakeswap.info/api/v2/tokens/0x6218079f1a5d50d3a8358093699b9943a662ef7c"
  prices: any
  symbol: any

  constructor(private http: HttpClient) {
  }

  public getPrice(){
    return this.http.get<any[]>(this.apiURL)
  }

  ngOnInit(): void {
    this.Apidata()
  }

  Apidata() {
    this.getPrice().subscribe((resp) => this.success(resp))
  }
  success(resp: any): void {
    this.prices = resp.data.price
    this.symbol = resp.data.symbol

    if (this.prices.length > 4) {
      this.prices = this.prices.slice(0, 6);
    }
  }


}
