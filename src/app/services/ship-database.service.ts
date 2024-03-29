import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShipDatabaseService {
  name: any
  rarity: any
  img: any
  apiURL = "https://raw.githubusercontent.com/felipeaguiarn/bd-ships/3c76b1bd030fba14da5668b41e8c26581eb09554/db.json"

  constructor(private http: HttpClient) { }

  public getShips() {
    return this.http.get<any[]>(this.apiURL)
  }
  ngOnInit(): void {
    this.Apidata()
  }

  Apidata(): void {
    this.getShips().subscribe((resp) => this.success(resp))
  }
  success(resp: any): void {
    this.name = resp.name
    this.rarity = resp.rarity
    this.img = resp.img
  }

}
