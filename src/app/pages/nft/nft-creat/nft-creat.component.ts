import { Component, OnInit } from '@angular/core';
import { nftTypeOfClass } from '../../../interface/nft.interface';
import { NftService } from '../../../services/nft.service/nft.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-nft-creat',
  templateUrl: './nft-creat.component.html',
  styleUrls: ['./nft-creat.component.css']
})
export class NftCreatComponent implements OnInit {
  nftList: nftTypeOfClass[] = [];
  nftSelect: nftTypeOfClass | undefined;

  constructor(private nftService: NftService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllNft();
  }

  getAllNft() {
    this.nftService.getNfts().subscribe(nftListResult => {
      this.nftList = nftListResult;
   //   console.log(this.nftList);
    });
  }

  viewOneNft(id: number) {
    this.nftService.getNftById(id).subscribe(nftResult => {
      this.nftSelect = nftResult;
      console.log(this.nftSelect);
    });
  }

  public form: FormGroup = new FormGroup({
    nameNFT: new FormControl(''),
    description: new FormControl(''),
    pathURL: new FormControl(''),
    priceEth: new FormControl('')
  });

  toList(nft: nftTypeOfClass) {
    this.nftService.add(nft).subscribe(data => this.nftList.push(data));
    console.log(this.nftList);
    
  }

  handleSubmit() {
    console.log('test');
    
    // console.log("nft", this.nftList);
    // console.log("form", this.form.value);
    this.toList(this.form.value);
    this.form.reset();
  }

  // Add your delete function here
}
