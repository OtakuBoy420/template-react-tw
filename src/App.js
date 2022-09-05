import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
function App() {
  return (
    <div className="App w-[90%] mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" default element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
