import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { nftTypeOfClass } from 'src/app/interface/nft.interface';
import { NftService } from 'src/app/services/nft.service/nft.service';

@Component({
  selector: 'app-nft-list',
  templateUrl: './nft-list.component.html',
  styleUrls: ['./nft-list.component.css']
})
export class NftListComponent implements OnInit {

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
      nftListResult[i].pathurl = "https://127.0.0.1:8000/upload/"+ nftListResult[i].pathurl;
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
      nftResult.pathurl = "https://127.0.0.1:8000/upload/"+nftResult.pathurl;
      this.nft = nftResult;
    });
  }
}




