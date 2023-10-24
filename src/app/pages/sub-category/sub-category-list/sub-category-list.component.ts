import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategoryTypeOfClass } from 'src/app/interface/sub-category.interface';
import { SubCategoryService } from 'src/app/services/sub-category/sub-category.service';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.css']
})
export class SubcategoryListComponent {

  constructor(private subcategoryService: SubCategoryService, private route: ActivatedRoute) { }

  subcategory: SubCategoryTypeOfClass | undefined;
  subcategoryList: SubCategoryTypeOfClass[] = [];
  subcategorySelect: SubCategoryTypeOfClass | undefined;



  ngOnInit() {
    this.getAllSubCategories();

    this.route.params.subscribe(params => {
      const subcategoryId = +params['id'];
      this.getSubcategoryById(subcategoryId);
    });
  }

  getAllSubCategories() {
    this.subcategoryService.getSubCategories().subscribe(
      (subcategoryListResult :SubCategoryTypeOfClass[] )  =>
    {
      for(let i = 0 ; i < subcategoryListResult.length ; i++) {
    }
    this.subcategoryList = subcategoryListResult;

  });
  }

  viewOneSubcategory(id: number) {
    this.subcategoryService.getSubCategoryById(id).subscribe(subcategoryResult => {
      this.subcategorySelect =subcategoryResult;
      console.log(this.subcategorySelect);
    });
  }


  getSubcategoryById(id: number) {
    this.subcategoryService.getSubCategoryById(id).subscribe(subcategoryResult => {
    this.subcategory = subcategoryResult;
    });
  }
}

