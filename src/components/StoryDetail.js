import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import StoryItem from "./StoryItem";
import * as icon from "react-icons/md";
import { motion } from "framer-motion";

const StoryDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const [story, setStory] = useState([]);
  const [related, setRelated] = useState([]);

  console.log(useParams());
  async function getRelatedItem() {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/stories/related/${id}/2`
      );
      const data = await res.data.records.result;
      setRelated(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getStoryItem() {
    try {
      const res = await axios.get(`http://localhost:4000/api/v1/stories/${id}`);
      const data = await res.data.result;

      console.log(data);
      setStory(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getStoryItem();
    getRelatedItem();
    console.log("story:", story);
  }, []);

  return (
    <motion.div
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{
        y: -1000,
        opacity: 0,
      }}
      transition={{ duration: 0.7 }}
    >
      <div
        onClick={() => {
          history.goBack();
        }}
        className="text-4xl cursor-pointer "
      >
        <icon.MdArrowBack />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col place-self-start justify-center w-auto items-center py-1 px-5 md:py-4  md:px-10">
          <img
            width="280"
            height="350"
            className="  border-2 shadow-md"
            src={`http://localhost:4000/storyImages/${story.imageUrl}`}
            alt="image"
          />
          <h1 className="text-2xl font-mono font-bold m-2">{story.title}</h1>
          <p className=" text-xs md:text-base font-mono text-justify leading-relaxed m-2">
            {story.body}
          </p>
        </div>
        <div>
          <h1>Recommendation</h1>
          {related.map((post, index) => {
            return (
              <Link to={`story/${post.id}`}>
                <StoryItem
                  key={index}
                  itemId={post.id}
                  imageUrl={`http://localhost:4000/storyImages/${post.imageUrl}`}
                  created={post.created}
                  title={post.title}
                  body={post.body}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default StoryDetail;
