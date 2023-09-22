import { Component, OnInit } from '@angular/core';
import { nftTypeOfClass } from '../../../services/nft.service/nft.interface';
import { ActivatedRoute } from '@angular/router';
import { NftService } from '../../../services/nft.service/nft.service';

@Component({
  selector: 'app-nft-detail',
  templateUrl: './nft-detail.component.html',
  styleUrls: ['./nft-detail.component.css']
})
export class NftDetailComponent implements OnInit {
  nft: nftTypeOfClass | undefined;

  constructor(private nftService: NftService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nftId = +params['id'];
      this.getNftById(nftId);
    });
  }

  getNftById(id: number) {
    this.nftService.getNftById(id).subscribe(nftResult => {
      nftResult.pathURL = "https://127.0.0.1:8000/upload/"+nftResult.pathURL;
      this.nft = nftResult;
    });
  }
}




