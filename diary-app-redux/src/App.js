import { useState, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import DiaryInfo from "./components/DiaryInfo";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const diaryListArray = useSelector((state) => {
    console.log("state===", state);
    return state.diaryListArray;
  });

  const dataId = useRef(4);

  const diaryAnalysis = useMemo(() => {
    console.log("일기를 분석합니다.");
    const total = diaryListArray.length;
    const good = diaryListArray.filter((item, idx) => item.emotion >= 3).length;
    const bad = total - good;
    const percent = parseInt((good / total) * 100);
    return { total, good, bad, percent };
  }, [diaryListArray.length]);

  const { good, bad, total, percent } = diaryAnalysis;
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <DiaryEditor></DiaryEditor>
      <DiaryInfo good={good} bad={bad} total={total} percent={percent}></DiaryInfo>
      <DiaryList diaryList={diaryListArray}></DiaryList>
    </div>
  );
}

export default App;

