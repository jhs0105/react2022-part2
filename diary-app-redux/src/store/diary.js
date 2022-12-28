// type (객체를 만든다)
//상태에 쓸 것들 여기에 정의 (count와 diaryList)
const initState = {
  count: 4,
  diaryListArray: [
    { id: 1, author: "홍길동", contents: "일기쓰기", emotion: 1, date: new Date().getTime() },
    { id: 2, author: "유재석", contents: "눈이 많이 오네?", emotion: 4, date: new Date().getTime() },
    { id: 3, author: "강하늘", contents: "밖에 무척 춥겠다..", emotion: 3, date: new Date().getTime() },
    { id: 4, author: "전지현", contents: "오늘 점심은 구내식당ㅎ", emotion: 2, date: new Date().getTime() },
  ],
};

//action의 타입을 정의
export const ACTIONS_TYPE = {
  INSERT_DIARY: "insertDiary",
  MODIFY_DIARY: "modifyDiary",
  DELETE_DIARY: "deleteDiary",
};

export const insertDiary = (diaryItem) => {
  return {
    type: ACTIONS_TYPE.INSERT_DIARY,
    payload: diaryItem,
  };
};
export const modifyDiary = (id, localContents) => {
  return {
    type: ACTIONS_TYPE.MODIFY_DIARY,
    payload: { id, localContents },
  };
};
export const deleteDiary = (id) => {
  return {
    type: ACTIONS_TYPE.DELETE_DIARY,
    payload: { id },
  };
};

//여기가 핵심 (reducer)
const diary = (state = initState, action) => {
  //action에 {type, payload} 가 들어온다
  console.log(action);
  switch (action.type) {
    case ACTIONS_TYPE.INSERT_DIARY: {
      const newDiaryItem = { ...action.payload };
      return {
        count: state.count + 1,
        diaryListArray: [newDiaryItem, ...state.diaryListArray],
      };
    }
    case ACTIONS_TYPE.DELETE_DIARY: {
      const id = action.payload.id;
      return {
        count: state.count - 1,
        diaryListArray: state.diaryListArray.filter((item, idx) => item.id !== id),
      };
    }
    case ACTIONS_TYPE.MODIFY_DIARY: {
      // const id = action.payload.id;
      // const localContents=action.payload.localContents
      const { id, localContents } = action.payload;
      return {
        count: state.count,
        diaryListArray: state.diaryListArray.map((item, idx) => (item.id === id ? { ...item, contents: localContents } : item)),
      };
    }
    default:
      return state;
  }
};
export default diary;
