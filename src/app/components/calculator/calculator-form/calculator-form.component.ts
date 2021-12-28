import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PriceNowService } from 'src/app/services/price-now.service';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent implements OnInit {
  form!: FormGroup;
  inputs = [
    {
      label: 'Investiment', controlName: 'investiment',
      type: 'number', class: 'form-control col-12 m-b-10', placeholder: "500 $",
      control: new FormControl('')
    },
    {
      label: 'Daily Profit', controlName: 'profit',
      type: 'number', class: 'form-control col-12 m-b-10', placeholder: "15 $Ships",
      control: new FormControl('')
    },
  ]

  price: any
  profit: any
  daysLeft: any
  investiment: any
  res7days: any
  res15days: any
  month: any

  constructor(
    private priceNowService: PriceNowService,
    private formBuilder: FormBuilder

    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      investiment: [null],
      profit: [null]
    })
    this.data()
  }

  data() {
    this.priceNowService.getPrice().subscribe((resp) => this.success(resp))
  }
  success(resp: any): void {
    this.price = resp.data.price

    if (this.price.length > 4) {
      this.price = this.price.slice(0, 6);
    }

    this.profit = this.form.value.profit
    this.investiment = this.form.value.investiment
  }

  onSubmit(){
    this.profit = this.form.value.profit
    this.investiment = this.form.value.investiment
    this.calculate()
    // console.log('Profit: ', this.profit)
    // console.log('Investiment: ', this.investiment)
  }

  calculate(){
    this.profit
    this.investiment
    this.price

    this.daysLeft = (this.investiment / this.profit).toFixed(0)
    console.log(this.daysLeft)
    this.res7days = ((this.profit * 7) * this.price)
    console.log(this.res7days)
    this.res15days = (this.profit * 15) * this.price
    console.log(this.res15days)
    this.month = (this.profit * 30) * this.price
    console.log(this.month)
  }


}
