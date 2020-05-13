import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Card(props) {
  const data = props.data;
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [content, setContent] = useState("");
  console.log(content);
  useEffect(() => {
    setMonth(data.month);
    setDay(data.day);
    setContent(data.content);

    return () => {};
  }, [data]);
  return (
    <div>
      <div>
        {month}
        {day}
      </div>
      <div>{content}</div>
    </div>
  );
}

export default Card;
