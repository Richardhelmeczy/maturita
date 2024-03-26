import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Appointments {
  id: Generated<number>;
  doctorId: string;
  userId: string;
  date: string;
  time: string;
  confirmed: number;
}

export interface Basket {
  id: Generated<number>;
  productId: number;
  userId: string;
}

export interface Doctors {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  adress: string;
  phone: string;
}

export interface Products {
  id: Generated<number>;
  name: string;
  description: string;
  price: number;
}

export interface ProductsReviews {
  id: Generated<number>;
  productId: number;
  rating: number;
  content: string | null;
  username: string;
}

export interface Users {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  adress: string;
  phone: string;
}

export interface DB {
  appointments: Appointments;
  basket: Basket;
  doctors: Doctors;
  products: Products;
  productsReviews: ProductsReviews;
  users: Users;
}
