import React, { useRef, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useHistory } from "react-router";

function StoryForm(props) {
  const { setform } = props;
  const [title, setTitle] = useState("");
  const [storyBody, setStorybody] = useState("");
  const [image, setImage] = useState("");
  const imageRef = useRef();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("storyBody", storyBody);
    form.append("image", image);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/stories",
        form
      );
      const data = await res.data;
      console.log(data);
      setTitle("");
      setStorybody("");
      setImage("");
      imageRef.current.value = "";

      setLoading(true);
      setTimeout(() => {
        setform();
        history.goBack();
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {loading ? (
        <div className=" animate-bounce p-4 max-w-sm w-full mx-auto text-xl font-mono">
          <div className="animate-pulse flex  items-center space-x-4">
            <div className="rounded-full bg-red-500 h-12 w-12"></div>
            <h1>Uploading...</h1>
          </div>
        </div>
      ) : (
        <motion.form
          initial={{
            x: -1000,
            opacity: 0,
          }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ y: -1000, opacity: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          className="flex flex-col shadow-md border p-1  font-mono font-bold "
        >
          <label htmlFor="title">Title:</label>
          <input
            value={title}
            required
            type="text"
            name="title"
            className="border m-1 h-10 p-1"
            placeholder="enter your name"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="storyBody">storyBody:</label>
          <textarea
            required
            value={storyBody}
            placeholder="story body..."
            name="storyBody"
            onChange={(e) => setStorybody(e.target.value)}
            className="border p-1 m-1"
            cols="30"
            rows="10"
          ></textarea>
          <label htmlFor="image">Image:</label>
          <input
            ref={imageRef}
            className="m-1"
            required
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            name="image"
          />
          <button
            type="submit"
            className="border bg-red-600 text-white shadow-md m-1 h-10 rounded-md focus:outline-none"
          >
            Submit
          </button>
        </motion.form>
      )}
    </div>
  );
}

export default StoryForm;
