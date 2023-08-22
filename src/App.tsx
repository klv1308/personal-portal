import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import { About } from "./pages/about";
import { PageNotFound } from "./components/page-not-found";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
