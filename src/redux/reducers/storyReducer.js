import story from "../model/storyModel";
const storyReducer = (state = story, action) => {
  switch (action.type) {
    case "getStory":
      return [...action.payload];

    default:
      return state;
  }
};
export default storyReducer;
