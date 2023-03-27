import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Products {
  products: Product[];
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  image: string;
  rating: number;
  stock: number;
  category: string;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products, void>({
      query: () => `/products`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
