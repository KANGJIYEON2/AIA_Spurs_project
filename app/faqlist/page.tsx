"use client";
import React, { useEffect, useState } from "react";

const Faqlists = () => {
  const columns = [
    { id: "id", name: "ID" },
    { id: "title", name: "title" },
    { id: "explain", name: "Phone" },
    { id: "ETC", name: "관련설명" },
  ];

  
  const [rows, rowchange] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/faqlist")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        rowchange(resp);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div style={{ width: "70%", marginLeft: "6%" }}>
      <h3>FAQ 정보</h3>
      <ul className="faqlists">
          {rows.map((list:any)=>(
            // eslint-disable-next-line react/jsx-key
            <p key={list.title}>
              {list.title}
            </p>
          ))}

      </ul>
    </div>
  );
};
export default Faqlists;
