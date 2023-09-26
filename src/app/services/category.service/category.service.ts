import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { CategoryTypeOfClass } from 'src/app/interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = 'https://127.0.0.1:8000/api/category';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryTypeOfClass[]> {
    return this.http.get<CategoryTypeOfClass[]>(this.url);
  }

  getCategoryById(id: number): Observable<CategoryTypeOfClass> {
    return this.http.get<CategoryTypeOfClass>(`${this.url}/${id}`); 
  }

  add(category: CategoryTypeOfClass): Observable<CategoryTypeOfClass> {
    
    return this.http.post<CategoryTypeOfClass>("https://127.0.0.1:8000/api/new", category)
      .pipe(
        catchError((error: any) => {
          console.error('Error:', error);
          throw error;
        })
      );
  }

  deleteCategory(id: number){
    return this.http.delete<CategoryTypeOfClass>(`${this.url}/${id}`);
  }

}
