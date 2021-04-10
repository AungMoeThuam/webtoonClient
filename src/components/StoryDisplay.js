import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StoryItem from "./StoryItem";

function StoryDisplay({ match }) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function getPost(page) {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/stories/page/${page}`
      );
      const currentPage = await res.data.meta.currentPage;
      const data = await res.data.result;
      const pageNumber = await res.data.meta.pageNumbers;

      setCurrentPage(currentPage);
      setPost(data);
      setPage([...pageNumber]);
      // setLoading(true);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 800);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.time();
    getPost(1);
    console.timeEnd();
  }, []);

  return (
    <div>
      {/* {loading ? ( */}
      {/* <div className=" animate-bounce p-4 max-w-sm w-full mx-auto text-xl font-mono">
        <div className="animate-pulse flex  items-center space-x-4">
          <div className="rounded-full bg-red-500 h-12 w-12"></div>
          <h1>Uploading...</h1>
        </div>
      </div> */}
      {/* ) : ( */}
      <motion.div
        initial={{
          x: -1000,
        }}
        animate={{ x: 0 }}
        exit={{ y: -1000 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center "
      >
        <div className="flex flex-wrap justify-center  p-1 md:p-3">
          {post.map((post, index) => {
            return (
              <Link key={index} to={`story/${post.id}`}>
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
        <div className="flex justify-center items-center w-40 h-32">
          {page.map((page, index) => {
            return (
              <h1
                className={
                  page == currentPage
                    ? "cursor-pointer border p-2 m-1  bg-red-500 text-white text-lg"
                    : " cursor-pointer border p-2 m-1  text-black text-lg"
                }
                onClick={() => getPost(page)}
                key={index}
              >
                {page}
              </h1>
            );
          })}
        </div>
      </motion.div>
      {/* )} */}
    </div>
  );
}

export default StoryDisplay;
