import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategoryTypeOfClass } from 'src/app/interface/sub-category.interface';
import { SubCategoryService } from 'src/app/services/sub-category/sub-category.service';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.css']
})
export class SubCategoryListComponent {

  constructor(private subCategoryService: SubCategoryService, private route: ActivatedRoute) { }

  subCategory: SubCategoryTypeOfClass | undefined;
  subCategoryList: SubCategoryTypeOfClass[] = [];
  subCategorySelect: SubCategoryTypeOfClass | undefined;



  ngOnInit() {
    this.getAllSubCategories();

    this.route.params.subscribe(params => {
      const subCategoryId = +params['id'];
      this.getSubCategoryById(subCategoryId);
    });
  }

  getAllSubCategories() {
    this.subCategoryService.getSubCategories().subscribe(
      (subCategoryListResult :SubCategoryTypeOfClass[] )  =>
    {
      for(let i = 0 ; i < subCategoryListResult.length ; i++) {
    }
    this.subCategoryList = subCategoryListResult;

  });
  }

  viewOneSubCategory(id: number) {
    this.subCategoryService.getSubCategoryById(id).subscribe(subCategoryResult => {
      this.subCategorySelect =subCategoryResult;
      console.log(this.subCategorySelect);
    });
  }


  getSubCategoryById(id: number) {
    this.subCategoryService.getSubCategoryById(id).subscribe(subCategoryResult => {
    this.subCategory = subCategoryResult;
    });
  }
}

