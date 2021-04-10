import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import Story from "./pages/Story/Story";
import About from "./pages/About/About";

function App() {
  // const [post, setPost] = useState([]);
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  // function showData() {
  //   axios
  //     .post("http://localhost:4000/create", {
  //       title: title,
  //       body: body,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }

  // function getData() {
  //   axios.get("http://localhost:4000/story").then((response) => {
  //     console.log(response);
  //     setPost(response.data);
  //   });
  // }

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/story" component={Story} />
          <Route path="/about" component={About} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
