import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import GlobalStyle from "./components/GlobalStyle";
import { useState, useRef, useMemo, useEffect } from "react";
import DiaryInfo from "./components/DiaryInfo";
import axios from "axios";

function App() {
  const [diaryListArray, setDiaryListArray] = useState([]);
  useEffect(() => {
    async function loadDiaryList() {
      const diaryList = await axios.get("https://port-0-diary-app-server-fao2flc5y37nn.gksl2.cloudtype.app/diary/list");
      setDiaryListArray(diaryList.data);
    }
    loadDiaryList();
  }, []);

  const dataId = useRef(diaryListArray.length);

  const insertDiary = async (author, contents, emotion) => {
    await axios.post("https://port-0-diary-app-server-fao2flc5y37nn.gksl2.cloudtype.app/diary/insert", { author, contents, emotion, date: new Date().getTime() });
    const diaryList = await axios.get("https://port-0-diary-app-server-fao2flc5y37nn.gksl2.cloudtype.app/diary/list");
    setDiaryListArray(diaryList.data); //axios니깐 data를 넣어줘야 한다!
  };

  const deleteDiary = async (id) => {
    await axios.delete(`https://port-0-diary-app-server-fao2flc5y37nn.gksl2.cloudtype.app/diary/delete/${id}`);
    const diaryList = await axios.get("https://port-0-diary-app-server-fao2flc5y37nn.gksl2.cloudtype.app/diary/list");
    setDiaryListArray(diaryList.data);
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
  const modifyDiary = async (id, localContents) => {
    await axios.put(`https://port-0-diary-app-server-fao2flc5y37nn.gksl2.cloudtype.app/diary/modify/${id}`, { contents: localContents });
    const diaryList = await axios.get("https://port-0-diary-app-server-fao2flc5y37nn.gksl2.cloudtype.app/diary/list");
    setDiaryListArray(diaryList.data);
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

