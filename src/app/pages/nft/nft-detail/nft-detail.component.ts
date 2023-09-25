import { Component, OnInit } from '@angular/core';
import { nftTypeOfClass } from '../../../interface/nft.interface';
import { ActivatedRoute } from '@angular/router';
import { NftService } from '../../../services/nft.service/nft.service';

@Component({
  selector: 'app-nft-detail',
  templateUrl: './nft-detail.component.html',
  styleUrls: ['./nft-detail.component.css']
})
export class NftDetailComponent  {
  nft: nftTypeOfClass | undefined;
  nftList: nftTypeOfClass[] = [];
  nftSelect: nftTypeOfClass | undefined;


  constructor(private nftService: NftService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllNft();

    this.route.params.subscribe(params => {
      const nftId = +params['id'];
      this.getNftById(nftId);
    });
  }

  getAllNft() {
    this.nftService.getNfts().subscribe(
      (nftListResult :nftTypeOfClass[] )  =>
    {
      for(let i = 0 ; i < nftListResult.length ; i++) {
      nftListResult[i].pathURL = "https://127.0.0.1:8000/upload/"+ nftListResult[i].pathURL;
    }
    this.nftList = nftListResult;

  });
  }

  viewOneNft(id: number) {
    this.nftService.getNftById(id).subscribe(nftResult => {
      this.nftSelect = nftResult;
      console.log(this.nftSelect);
    });
  }


  getNftById(id: number) {
    this.nftService.getNftById(id).subscribe(nftResult => {
      nftResult.pathURL = "https://127.0.0.1:8000/upload/"+nftResult.pathURL;
      this.nft = nftResult;
    });
  }
}




