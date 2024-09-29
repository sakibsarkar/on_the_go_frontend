import { IPost } from "@/types/post";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TPostSlice = {
  data: IPost[];
};
const initialState: TPostSlice = {
  data: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost(
      state,
      action: PayloadAction<{ post: IPost[] | []; new?: boolean }>
    ) {
      const payload = action.payload;
      if (payload.new) {
        state.data = payload.post;
      } else {
        state.data = [...state.data, ...payload.post];
      }
    },
  },
});

export const { setPost } = postSlice.actions;
export default postSlice.reducer;
