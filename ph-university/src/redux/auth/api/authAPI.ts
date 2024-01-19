import { baseAPI } from "./baseAPI";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: { id: body.username, password: body.password },
      }),
    }),
  }),
});

export const { useLoginMutation } = authAPI;
