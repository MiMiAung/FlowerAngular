import {Category} from './Category';
import {ProductImage} from './ProductImage';

export class Product {
    id:number;
    name:string;
    coverImage:string;
    price:number;
    description:string;
    category:Category;
    images:ProductImage[];


}
