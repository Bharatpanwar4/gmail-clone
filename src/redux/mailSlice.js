import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mailSlice",
  initialState: {
    openMailDialog: false,
  },
  reducers: {
    toUpdateOpenMailDialog: (state, action) => {
      state.openMailDialog = action.payload;
    },
  },
});

export const { toUpdateOpenMailDialog } = mailSlice.actions;
export default mailSlice.reducer;
