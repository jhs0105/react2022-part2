//import logo from "./logo.svg";
import "./App.css";
import Library from "./Library";

function App() {
  //jsx는 자바 스크립에서 html을 쉽게 쓸려고 만든거다.
  return (
    <div className="App">
      <h1>안녕하세요. tis 도서관 입니다. 책 목록은 아래아 같습니다.</h1>
      <Library></Library>
    </div>
  );
}

export default App;

