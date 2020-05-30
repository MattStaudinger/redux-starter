import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        description: action.payload.description,
        resolved: false,
        id: ++lastId,
      });
    },
    bugResolved: (bugs, action) => {
      const foundBug = bugs.find((bug) => bug.id === action.payload.id);
      foundBug.resolved = true;
    },
    bugAssignedToUser: (bugs, action) => {
      const { userId, bugId } = action.payload;
      const foundBug = bugs.find((bug) => bug.id === bugId);
      foundBug.userId = userId;
    },
  },
});

export const { bugAdded, bugResolved, bugAssignedToUser } = slice.actions;
export default slice.reducer;

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
