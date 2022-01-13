import { Component, OnInit } from '@angular/core';
import { PriceNowService } from 'src/app/services/price-now.service';

@Component({
  selector: 'app-highlighted',
  templateUrl: './highlighted.component.html',
  styleUrls: ['./highlighted.component.css']
})
export class HighlightedComponent implements OnInit {

  price: any
  symbol: any
  priceInit: any

  constructor(private priceNowService: PriceNowService) { }

  ngOnInit(): void {
    this.data()
  }

  data() {
    this.priceNowService.getPrice().subscribe((resp) => this.success(resp))
  }
  success(resp: any): void {
    this.price = resp.data.price
    this.symbol = resp.data.symbol

    if (this.price.length > 4) {
      this.price = this.price.slice(0, 5);
    }

    this.priceInit = this.price * 510
  }

}
