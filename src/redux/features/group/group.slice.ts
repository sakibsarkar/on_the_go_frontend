import { IGroup } from "@/types/group";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  group: IGroup | null;
} = {
  group: null,
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setGroupData(state, action: PayloadAction<IGroup | null>) {
      state.group = action.payload;
    },
  },
});

export const {setGroupData} = groupSlice.actions;
export default groupSlice.reducer;
