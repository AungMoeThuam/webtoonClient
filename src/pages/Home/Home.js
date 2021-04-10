import React from "react";
import bg from "../../assets/HomePage/bg.svg";
import b1 from "../../assets/HomePage/b1.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  function toStory() {
    history.push("/story");
  }
  return (
    <motion.div
      initial={{ x: -1500 }}
      animate={{ x: 0 }}
      exit={{ x: -1500 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundImage: `url(${bg})`,
        minHeight: "90vh",
      }}
      className="  container pt-3 mx-auto px-3 md:px-16  bg-center  bg-no-repeat bg-cover flex flex-wrap justify-center md:justify-between items-center"
    >
      <AnimatePresence>
        <motion.div
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: -1000,
          }}
          transition={{ duration: 1 }}
          className="  text-yellow-400 md:text-red-700"
        >
          <div className="">
            <h1 className=" pb-10 font-extrabold text-lg md:text-4xl">
              StoryWorld မှကြိုဆိုပါတယ်
            </h1>
            <h3 className="  pb-10 font-bold text-base md:text-2xl">
              အကောင်းဆုံးသော ပုံပြင် ဝက်ဆိုက်ပါ
            </h3>
            <p className="  pb-4 font-bold text-xs md:text-lg ">
              ကမ္ဘာ တစ်ဝှမ်းလုံးမှ အမျိုးမျိုးသော
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={toStory}
              className="p-4 m-1 w-auto md:w-32 bg-red-800  text-white rounded-2xl "
            >
              ဖတ်မယ်
            </button>
            <button className="p-4 m-1 w-auto md:w-32 bg-red-800 text-white rounded-2xl ">
              ရှာကြည့်မယ်
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: -1000,
          }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <img className=" w-60 h-64 md:w-auto md:h-80" src={b1} alt="" />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
