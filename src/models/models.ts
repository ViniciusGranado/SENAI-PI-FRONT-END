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

export interface CreateOrderItem {
  productId: number;
  quantity: number;
}


export interface CreateOrderDto {
  clientId: number;
  products: CreateOrderItem[]
}

export interface OrderItem {
  quantity: number;
  price: number;
  product: Product;
  subTotal: number;
}

export interface Order {
  id: number;
  items: OrderItem[];
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

export interface NewCategoryDto {
  [name: string] : string;
  reference: string;
}

export interface NewProductDto {
  name: string;
  description: string;
  price: number,
  imgUrl: string;
  favorite: boolean,
  categories: Category[]
}