import { CategoryTypeOfClass } from './category.interface';

export interface SubCategoryTypeOfClass {
    id: number;
    nameSubCategory: string;
    category: CategoryTypeOfClass;
}
