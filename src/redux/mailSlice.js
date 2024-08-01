import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mailSlice",
  initialState: {
    openMailDialog: false,
    allEmails:[],
    selectedMail:null,
    searchedText:''
  },
  reducers: {
    toUpdateOpenMailDialog: (state, action) => {
      state.openMailDialog = action.payload;
    },
    toUpdateAllEmailData: (state, action) => {
      state.allEmails = action.payload;
    },
    toUpdateSelectedEmailData: (state, action) => {
      state.selectedMail = action.payload;
    },
    toUpdateSearchedText: (state, action) => {
      state.searchedText = action.payload;
    },
  },
});

export const { toUpdateOpenMailDialog ,toUpdateAllEmailData,toUpdateSelectedEmailData,toUpdateSearchedText} = mailSlice.actions;
export default mailSlice.reducer;
