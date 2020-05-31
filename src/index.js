import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

// store.dispatch(projectAdded({ name: "Bug1" }));
// store.dispatch(projectAdded({ name: "Test" }));
// store.dispatch(bugAdded({ description: "Bug2" }));
// store.dispatch(bugAdded({ description: "Bug3" }));
// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(userAdded({ name: "Tom" }));
// store.dispatch(userAdded({ name: "Klara" }));
store.dispatch(() => {
  store.dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
});
store.dispatch({
  type: "error",
  payload: { message: "an error occurred" },
});

// const unresolvedState = getUnresolvedBugs(store.getState());
// console.log("unresolvedState: ", unresolvedState);

// const bugsAssignedToTeamMember = getBugsByUser(1)(store.getState());
// console.log("bugsAssignedToTeamMember: ", bugsAssignedToTeamMember);
