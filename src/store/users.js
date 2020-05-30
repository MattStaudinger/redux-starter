import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
let lastId = 0;

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        name: action.payload.name,
        id: ++lastId,
        assignedBugIds: [],
      });
    },
    assignedForBug: (users, action) => {
      const foundUser = users.find((user) => user.id === action.payload.id);
      foundUser.assignedBugIds = action.payload.bugId;
    },
  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;
