import { NewUserDTO } from "../models/models";

const request = (
  path: RequestInfo,
  options: RequestInit | undefined = undefined
) => {
  return async () => {
    const response = await fetch(`http://localhost:8080/${path}`, {
      ...options,
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error('An unexpected error ocurred');
    }

    return response.json();
  };
};

export const storeApi = {
  getAllProducts: request('products'),
  getAllProductsByCategory: (categoryReference: string) => request(`products/category/${categoryReference}`),
  getAllFavorites: request('products/favorites'),
  getAllCategories: request('categories'),
  saveNewUser: (newUserDTO: NewUserDTO) => request('users', {method: 'POST' , body: JSON.stringify(newUserDTO)}),
};
