/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (product) => ({
        method: "POST",
        url: "/product/create-product",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),

    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/product/products",
      }),
      providesTags: ["Product"],
    }),
    getSingleProducts: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/product/${id}`,
      }),
      providesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/product/${id}`,
      }),
    }),
    updateProduct: builder.mutation({
      query: (productData) => ({
        method: "PATCH",
        url: `/product/${productData.id}`,
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = baseApi;
