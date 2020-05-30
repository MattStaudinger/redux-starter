import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

console.log(store);
store.dispatch(bugAdded("Bug1"));
store.dispatch(bugAdded("Bug2"));
store.dispatch(bugAdded("Bug3"));
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));
