import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EthTypeOfClass } from 'src/app/interface/eth.interface';

@Injectable({
  providedIn: 'root'
})
export class EthserviceService {

  constructor(
    private http :HttpClient,
  ) { }

  url :string = "https://localhost:8000/api/eth";

  getEthValues():Observable<EthTypeOfClass[]> {
    return this.http.get<EthTypeOfClass[]>(this.url);
  }
  




}
