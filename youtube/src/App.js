import "./css/layout.css";

import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/search/:id" element={<SearchResult />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

