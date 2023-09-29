import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { SubCategoryTypeOfClass } from 'src/app/interface/sub-category.interface';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  url = 'https://127.0.0.1:8000/api/sub_category';

  constructor(private http: HttpClient) { }

  getSubCategories(): Observable<SubCategoryTypeOfClass[]> {
    return this.http.get<SubCategoryTypeOfClass[]>(this.url);
  }

  getSubCategoryById(id: number): Observable<SubCategoryTypeOfClass> {
    return this.http.get<SubCategoryTypeOfClass>(`${this.url}/${id}`); 
  }

  add(subCategory: SubCategoryTypeOfClass): Observable<SubCategoryTypeOfClass> {
    
    return this.http.post<SubCategoryTypeOfClass>("https://127.0.0.1:8000/api/new", subCategory)
      .pipe(
        catchError((error: any) => {
          console.error('Error:', error);
          throw error;
        })
      );
  }

  deleteCategory(id: number){
    return this.http.delete<SubCategoryTypeOfClass>(`${this.url}/${id}`);
  }

}

