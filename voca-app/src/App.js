import "./App.css";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InsertDay from "./components/InsertDay";
import InsertVoca from "./components/InsertVoca";
import Days from "./components/Days";
import Day from "./components/Day";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Days></Days>}></Route>
          <Route path="/day/:day" element={<Day></Day>}></Route>
          <Route path="/insert/voca" element={<InsertVoca></InsertVoca>}></Route>
          <Route path="/insert/day" element={<InsertDay></InsertDay>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

