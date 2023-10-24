import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { nftTypeOfClass } from '../../interface/nft.interface';

@Injectable({
  providedIn: 'root'
})
export class NftService {
  url = 'https://127.0.0.1:8000/api/nft';

  constructor(private http: HttpClient) { }

  getNfts(): Observable<nftTypeOfClass[]> {
    return this.http.get<nftTypeOfClass[]>(this.url);
  }

  getNftById(id: string | number): Observable<nftTypeOfClass> {
    return this.http.get<nftTypeOfClass>(`${this.url}/${id}`);
  }

  add(nft: nftTypeOfClass): Observable<nftTypeOfClass> {
    
    return this.http.post<nftTypeOfClass>("https://127.0.0.1:8000/api/new", nft)
      .pipe(
        catchError((error: any) => {
          console.error('Error:', error);
          throw error;
        })
      );
  }

  deleteNft(id: number){
    return this.http.delete<nftTypeOfClass>(`${this.url}/${id}`); // Corrected the HTTP method and URL format
  }

}
