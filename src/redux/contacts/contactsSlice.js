import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://635c14b1fc2595be26402fb8.mockapi.io/api/v1',
    }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: contact => ({
                url: `/contacts`,
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        })
    }),
});

export const { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;
