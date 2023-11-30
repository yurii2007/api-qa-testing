import { createAsyncThunk } from "@reduxjs/toolkit";

import instance, { token } from "@/constants/axiosinstance";

export const getDetails = createAsyncThunk("user/getDetails", async (_, thunkAPI) => {
  const state: any = await thunkAPI.getState();

  try {
    token(state.auth.token);
    const { data } = await instance.get("/api/user/details");
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async (newAvatar: any, thunkAPI) => {
    const state: any = await thunkAPI.getState();

    try {
      token(state.auth.token);
      const { data } = await instance.post(
        "/api/user/avatar",
        { avatar: newAvatar },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
