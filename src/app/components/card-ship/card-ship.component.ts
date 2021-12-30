import { Component, OnInit } from '@angular/core';
import { ShipDatabaseService } from 'src/app/services/ship-database.service';

@Component({
  selector: 'app-card-ship',
  templateUrl: './card-ship.component.html',
  styleUrls: ['./card-ship.component.css']
})
export class CardShipComponent implements OnInit {
  name: any
  rarity: any
  img: any
  races: any
  avarege: any
  num: any;
  constructor(private shipDatabaseService: ShipDatabaseService) { }

  ngOnInit(): void {
    // this.Apidata()
    this.num = this.numberIndex()
  }

  // Apidata() {
  //   this.shipDatabaseService.getShips().subscribe((resp) => this.success(resp))
  // }
  // success(resp: any): void {
  //   this.name = resp[this.num].name
  //   this.rarity = resp[this.num].rarity
  //   this.img = resp[this.num].img
  //   this.races = resp[this.num].races
  //   this.avarege = resp[this.num].avarege

  //   //console.log(resp[this.num])
  // }

  numberIndex() {
    return Math.floor(Math.random() * 52);
  }

}
