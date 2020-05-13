import React from "react";
import firebaseApp from "../firedatabase/Firebaseapp";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Input() {
  const history = useHistory();
  const [amonth, setAmonth] = useState("");
  const [click, setClick] = useState(false);
  const firebaseref = firebaseApp.database().ref("todo");
  const [inputday, setInputday] = useState("");
  const [inputcontent, setinputcontent] = useState("");
  useEffect(() => {
    if (click === true) {
      firebaseref.push({
        month: amonth,
        day: inputday,
        content: inputcontent,
      });
      setClick(false);
    }
    return () => {};
  }, [click]);
  return (
    <div className="input">
      <div className="inputmonth">
        <input
          type="text"
          onChange={(e) => {
            const val = e.target.value;
            setAmonth(val);
          }}
        />
        월
        <input
          type="text"
          onChange={(e) => {
            const val = e.target.value;
            setInputday(val);
          }}
        />
        일
      </div>
      <div className="content">
        <input
          type="text"
          onChange={(e) => {
            const val = e.target.value;
            setinputcontent(val);
          }}
        />
      </div>
      <div className="btn">
        <button
          onClick={() => {
            history.goBack();
            setClick(!click);
          }}
        >
          저장하기
        </button>
      </div>
    </div>
  );
}

export default Input;
