import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryTypeOfClass } from 'src/app/interface/category.interface';
import { CategoryService } from 'src/app/services/category.service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  category: CategoryTypeOfClass | undefined;
  categoryList: CategoryTypeOfClass[] = [];
  categorySelect: CategoryTypeOfClass | undefined;



  ngOnInit() {
    this.getgetAllCategories();

    this.route.params.subscribe(params => {
      const categoryId = +params['id'];
      this.getCategoryById(categoryId);
    });
  }

  getgetAllCategories() {
    this.categoryService.getCategories().subscribe(
      (categoryListResult :CategoryTypeOfClass[] )  =>
    {
      for(let i = 0 ; i < categoryListResult.length ; i++) {
    }
    this.categoryList = categoryListResult;

  });
  }

  viewOneCategory(id: number) {
    this.categoryService.getCategoryById(id).subscribe(categoryResult => {
      this.categorySelect = categoryResult;
      console.log(this.categorySelect);
    });
  }


  getCategoryById(id: number) {
    this.categoryService.getCategoryById(id).subscribe(categoryResult => {
    this.category = categoryResult;
    });
  }
}
