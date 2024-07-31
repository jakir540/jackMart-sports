/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/product/products",
      }),
    }),
    getSingleProducts: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/product/${id}`,
      }),
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        method: "POST",
        url: "/product/create-product",
        body: product,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/product/${id}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} = baseApi;
