import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as icon from "react-icons/md";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import StoryForm from "../../components/StoryForm";
import StoryDetail from "../../components/StoryDetail";
import StoryDisplay from "../../components/StoryDisplay";

function Story() {
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const [form, setForm] = useState(false);
  const toForm = () => {
    setForm(!form);
    if (form) {
      history.push("/story");
    } else {
      history.push("/story/form");
    }
  };
  function setform() {
    setForm(!form);
  }
  return (
    <motion.div
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{
        y: -1000,
        opacity: 0,
      }}
      transition={{ duration: 0.7 }}
      className=" container px-2 md:px-40  pt-4"
    >
      <div
        onClick={toForm}
        className="flex cursor-pointer justify-center items-center text-lg font-semibold text-white border w-32 rounded-lg p-1 bg-red-600  font-mono"
      >
        {form ? (
          <>
            <icon.MdArrowBack />
            <h1 className="p-1">Back</h1>
          </>
        ) : (
          <>
            <h1 className="p-1">New Story</h1>
            <icon.MdAddCircle />
          </>
        )}
      </div>

      <div>
        <AnimatePresence>
          <Switch>
            <Route exact path={path} render={(props) => <StoryDisplay />} />
            <Route
              path={`${path}/form`}
              render={(props) => <StoryForm setForm={setform} />}
            />
            <Route path={`${path}/:id`} render={(props) => <StoryDetail />} />
          </Switch>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Story;
