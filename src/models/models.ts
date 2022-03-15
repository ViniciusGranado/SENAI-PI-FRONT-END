export interface Product {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
  reference: string;
}