import "./css/layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Detail from "./components/Detail";
import Profile from "./components/Profile";
import SearchResult from "./components/SearchResult";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/search" element={<SearchResult />}></Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

