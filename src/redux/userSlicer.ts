import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserData } from "../service/userService";

export interface UserRole{
    username:string;
    role:string;
}

const initialState:UserRole={
    username:"",
    role:""
}

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const data = await fetchUserData();
    return data;
  });

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        updateRole: (state, action: PayloadAction<string>) => {
            state.role = action.payload;
          },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
          state.username = action.payload.username;
          state.role = action.payload.role;
        });
      },
})

export const { updateRole } = userSlice.actions;
export default userSlice.reducer;
