import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import GlobalStyle from "./components/GlobalStyle";
import { useState, useRef, useMemo } from "react";
import DiaryInfo from "./components/DiaryInfo";

function App() {
  //primitive type 기본자료 object // array은 참조
  //react는 상태가 바뀌면 화면을 다시 그린다. 즉, 함수를 다시 실행함. 초기값으로 간다.
  const dummy = [
    { id: 1, author: "홍길동", contents: "일기쓰기", emotion: 1, date: new Date().getTime() },
    { id: 2, author: "유재석", contents: "눈이 많이 오네?", emotion: 4, date: new Date().getTime() },
    { id: 3, author: "강하늘", contents: "밖에 무척 춥겠다..", emotion: 3, date: new Date().getTime() },
    { id: 4, author: "전지현", contents: "오늘 점심은 구내식당ㅎ", emotion: 2, date: new Date().getTime() },
  ];
  const dataId = useRef(4);
  const [diaryListArray, setDiaryListArray] = useState([...dummy]);
  const insertDiary = (author, contents, emotion) => {
    // const newDiaryList = [...diaryListArray];
    // const newDiaryItem = { id: item.id, author: item.author, contents: item.contents, emotion: item.emotion, date: new Date().getTime() }; //item으로 데이터 받았음/
    // newDiaryList.push(newDiaryItem);
    // setDiaryListArray(newDiaryList);
    const newDiaryItem = { id: ++dataId.current, author: author, contents: contents, emotion: emotion, date: new Date().getTime() };
    setDiaryListArray([newDiaryItem, ...diaryListArray]);
  };

  const deleteDiary = (id) => {
    console.log("삭제");
    const newDiaryList = diaryListArray.filter((item) => {
      return item.id !== id;
    });
    setDiaryListArray(newDiaryList);
  };

  //리액트에서 에서 중요한거 중에 하나 리렌더링
  //useMemo(연산을 기억해두는것) -> memorization
  //필요한 연산값을 메모리에 저장해두었다가 바뀔때만 다시 연산
  const diaryAnalysis = useMemo(() => {
    console.log("일기를 분석합니다.");
    const total = diaryListArray.length;
    const good = diaryListArray.filter((item, idx) => {
      return item.emotion >= 3;
    }).length;
    const bad = total - good;
    const percent = parseInt((good / total) * 100);
    return { total: total, good: good, bad: bad, percent: percent };
    //return {total, good, bad, percent} 키와 변수가 같으면 하나만 써도 된다.
  }, [diaryListArray.length]);
  //다이어리 길이가 바뀔때만 분석을 해라...

  //수정은 고유번호에 있는 것을 찾아서 내용 바꾸는것
  const modifyDiary = (id, localContents) => {
    const modifiedDiaryListArray = diaryListArray.map((item, idx) => {
      return item.id === id ? { ...item, contents: localContents } : item;
    });
    setDiaryListArray(modifiedDiaryListArray);
  };
  const { good, bad, total, percent } = diaryAnalysis;
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <DiaryEditor insertDiary={insertDiary}></DiaryEditor>
      <DiaryInfo good={good} bad={bad} total={total} percent={percent}></DiaryInfo>
      <DiaryList diaryList={diaryListArray} deleteDiary={deleteDiary} modifyDiary={modifyDiary}></DiaryList>
    </div>
  );
}

export default App;

