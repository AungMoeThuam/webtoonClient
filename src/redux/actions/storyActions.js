import axios from "axios";
export const getStory = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("http://localhost:4000/storyItem/storys");
    dispatch({
      type: "getStory",
      payload: response.data,
    });
    console.log(response.data);
  };
};
