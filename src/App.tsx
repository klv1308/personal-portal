import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import { Calendar } from "./pages/calendar";
import { PageNotFound } from "./components/page-not-found";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
