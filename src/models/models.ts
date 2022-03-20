export interface Product {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  categories: Category[];
}

export interface Cart {
  id: number;
  items: {product: Product}[];
}

export interface Order {
  id: number;
  items: Product;
  total: number;
}

export interface CartItemData {
  productId: number;
  clientId: number;
}

export interface Category {
  id: number;
  name: string;
  reference: string;
}

export interface NewUserDTO {
  [name: string]: string;
  email: string;
  username: string;
  password: string;
}

export interface LoginFormDTO {
  [username: string]: string;
  password: string;
}

export interface UserInfo {
  id: number;
  role: string;
}

export interface ErrorObject {
  message: string;
  staack: string;
}