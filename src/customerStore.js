export const createStore = (reducer) => {
  let state = reducer(undefined, {});
  let listeners = [];
  const getState = () => {
    return state;
  };
  const dispatch = (action) => {
    if (!action.hasOwnProperty("type")) throw new Error("no type declared");

    state = reducer(state, action);

    listeners.forEach((listener) => {
      listener();
    });
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};
