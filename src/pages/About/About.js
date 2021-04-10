import React, { useState } from "react";
import axios from "axios";
import "./about.css";
import * as icon from "react-icons/ai";
import StoryForm from "../../components/StoryForm";

const About = () => {
  const [image, setImage] = useState(
    "149117836_229147392281254_4815621701914072116_n1616320530687.jpg"
  );

  async function del() {
    const res = await axios.delete(
      "http://localhost:5000/delete/149117836_229147392281254_4815621701914072116_n1616320530687.jpg"
    );
    setImage("960x0.jpg");
    const data = await res.data;
    console.log(data);
  }

  return (
    <div className="  flex justify-center items-center">
      <StoryForm />
      <div className=" border w-1/4 h-52 m-1" id="image">
        <Img
          src={`http://localhost:5000/${image}`}
          Id2="img"
          Id="delete"
          delete={del}
        />
      </div>
    </div>
  );
};

function Img(props) {
  return (
    <>
      <img id={props.Id2} className="border p-2" src={props.src} />
      <div id={props.Id}>
        <icon.AiFillDelete
          type="submit"
          onClick={props.delete}
          className="cursor-pointer"
        />
      </div>
    </>
  );
}

export default About;
