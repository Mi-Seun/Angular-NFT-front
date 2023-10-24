import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NftService } from '../../../services/nft.service/nft.service';
import { nftTypeOfClass } from 'src/app/interface/nft.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nft-detail',
  templateUrl: './nft-detail.component.html',
  styleUrls: ['./nft-detail.component.css']
})
export class NftDetailComponent  {
  nft: nftTypeOfClass | undefined;
  nftList: nftTypeOfClass[] = [];
  nftSelect: nftTypeOfClass | undefined;


  constructor(private nftService: NftService, private route: ActivatedRoute , private http :HttpClient) { }

  nftId : string ;

  ngOnInit() {
    this.getId();
    this.getNft();
 
  }

  getId(){
      this.route.queryParams.subscribe(
        params =>{
          this.nftId = params["id"];
        }
      )
  }

  getNft(){
    let url = `https://127.0.0.1:8000/api/nft/${this.nftId}`;

    this.http.get<nftTypeOfClass>(url).subscribe(
      (data: nftTypeOfClass) => {
        this.nft = data;
        this.nft.pathurl = "https://127.0.0.1:8000/upload/"+data.pathurl;
        
  });


  // viewOneNft(id : number) {
  //   this.nftService.getNftById(id).subscribe(nftResult => {
  //     this.nft = nftResult;
  //     console.log(nftResult);
  //   });
  // }

  // getNftById() {
  //   this.nftService.getNftById(this.nftId).subscribe(nftResult => {
  //     nftResult.pathurl = "https://127.0.0.1:8000/upload/"+nftResult.pathurl;
  //     this.nft = nftResult;
  //   });
  // }
}
}



