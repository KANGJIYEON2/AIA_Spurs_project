"use client";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";
/*useEffect(() => {
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
*/
const Faqlists = () => {
 
  return <div>
    <main>
    <div className="faqtem">
  <h3>로그인하는 방법</h3>
    <p>로그인 하는 방법에 대하여 설명드리겠습니다.</p>
    </div>
    <div className="faqtem">
  <h3>회원하는 방법</h3>
    <p>회원가입 하는 방법에 대하여 설명드리겠습니다.</p>
    </div>
    <div className="faqtem">
  <h3>이벤트참여하는 방법</h3>
    <p>이벤트 참여하는 방법에 대하여 설명드리겠습니다.</p>
    </div>
    </main>

  </div>
   
  
};
export default Faqlists;
