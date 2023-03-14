import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "40px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover-movies">
            <Route index element={<Discover />} />
            <Route path=":id" element={<Movie />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
