import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Basket {
  id: Generated<number>;
  productId: number;
  userId: string;
}

export interface Doctors {
  id: Generated<number>;
  name: string;
  lastname: string;
  bio: string;
}

export interface DoctorsAppointments {
  id: Generated<number>;
  customerName: string;
  customerLastname: string;
  appointmentDate: string;
  doctorId: number;
  userId: string;
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
  name: string;
  lastname: string;
}

export interface DB {
  basket: Basket;
  doctors: Doctors;
  doctorsAppointments: DoctorsAppointments;
  products: Products;
  productsReviews: ProductsReviews;
  users: Users;
}
