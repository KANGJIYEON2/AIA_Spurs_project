"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {useRouter} from "next/navigation"
/*
const Faqlistsclick = () => {
  
  const [rows, rowchange] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const id = router.replace.id
    fetch(`http://localhost:8000/faqlist/${id}`)
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        rowchange(resp);
      })
      .catch((e) => {
        console.log(e.message);
      });
  },[]);

  return (
    <div style={{ width: "70%", marginLeft: "6%" }}>
      <h1>{rows.id}</h1>
    </div>
  );
};
export default Faqlistsclick;

*/