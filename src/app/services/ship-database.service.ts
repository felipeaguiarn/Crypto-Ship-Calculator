import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShipDatabaseService {
  name: any
  rarity: any
  img: any
  apiURL = "https://sheet.best/api/sheets/fe53c3b3-578c-447a-a713-50469cef02a2"

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


