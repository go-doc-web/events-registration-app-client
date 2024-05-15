const eventsInitialState = [];

export const eventsReduser = (state = eventsInitialState, action) => {
  switch (action.type) {
    case "SET_ALL_EVENTS":
      return [...state, ...action.payload];

    default:
      return state;
  }
};
