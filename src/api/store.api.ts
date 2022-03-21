import {
  NewUserDTO,
  LoginFormDTO,
  CartItemData,
  CreateOrderDto,
  NewCategoryDto,
  NewProductDto,
} from '../models/models';

const request = (
  path: RequestInfo,
  options: RequestInit | undefined = undefined
) => {
  return async () => {
    const response = await fetch(`http://localhost:8080/${path}`, {
      ...options,
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  };
};

export const storeApi = {
  getAllProducts: request('products'),
  getProductById: (id: string) => request(`products/${id}`),
  getAllProductsByCategory: (categoryReference: string) =>
    request(`products/category/${categoryReference}`),
  getAllFavorites: request('products/favorites'),
  getAllCategories: request('categories'),
  insertCategory: (newCategoryDto: NewCategoryDto) =>
    request('categories', {
      method: 'POST',
      body: JSON.stringify(newCategoryDto),
    }),
  insertProduct: (newProductDto: NewProductDto) =>
    request('products', {
      method: 'POST',
      body: JSON.stringify(newProductDto),
    }),
  saveNewUser: (newUserDTO: NewUserDTO) =>
    request('users', {
      method: 'POST',
      body: JSON.stringify(newUserDTO),
    }),
  authenticateUser: (loginFormDTO: LoginFormDTO) =>
    request('users/login', {
      method: 'POST',
      body: JSON.stringify(loginFormDTO),
    }),
  getCartByClientId: (clientId: string) => request(`cart/${clientId}`),
  insertCartItem: (cartItemData: CartItemData) =>
    request('cart-item', {
      method: 'POST',
      body: JSON.stringify(cartItemData),
    }),
  deleteCartItem: (cartItemData: CartItemData) =>
    request('cart-item', {
      method: 'DELETE',
      body: JSON.stringify(cartItemData),
    }),
  createOrder: (createOrderDto: CreateOrderDto) =>
    request(`orders`, { method: 'POST', body: JSON.stringify(createOrderDto) }),
  getOrderById: (id: string) => request(`orders/${id}`),
};
