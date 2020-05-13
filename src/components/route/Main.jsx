import React from 'react';
import { useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import firebaseApp from '../firedatabase/Firebaseapp';
import { useEffect } from 'react';

function Main() {
  const firebaserefe = firebaseApp.database().ref('todo');
  const [data, setData] = useState([]);

  useEffect(() => {
    let arr = [];
    firebaserefe
      .once('value', (snapshot) => {
        console.log(snapshot.val());
        snapshot.forEach((item) => {
          // console.log([...data, item.val()]);
          arr.push(item.val());
        });
      })
      .then(() => {
        setData(arr);
      });

    return () => {};
  }, []);
  return (
    <div className="main">
      <div className="title">TODO LIST</div>
      <div className="content">
        {data.map((item, idx) => {
          return <Card key={idx} data={item} />;
        })}
      </div>
      <Link to="/input" className="write">
        글쓰러가기
      </Link>
    </div>
  );
}

export default Main;
