import { Component, OnInit } from '@angular/core';
import { nftTypeOfClass } from '../../services/nft.service/nft.interface';
import { NftService } from '../../services/nft.service/nft.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nftList: nftTypeOfClass[] = [];
  nftSelect: nftTypeOfClass | undefined;

  constructor(private nftService: NftService) { }

  ngOnInit() {
    this.getAllNft();
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


  // Add your delete function here
}
