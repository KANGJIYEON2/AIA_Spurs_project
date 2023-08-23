import { useEffect, useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";


export const getComments = async () => {
  return [
    {id: "1",
    body: "First commment",
    username: "홍길동", 
    useId: "1",
    parentId: null,
    createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};


export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substring(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "관리자",
    createdAt: new Date().toISOString(),
  };
};


const Comments = (currenUserId) => {
  const [backendComments, setBackendComments] =useState([]);
  const rootComments = backendComments.filter(backendComment => backendComment.parentId === null);
  const getReplise = commendId => {
      return backendComments
      .filter(backendComment => backendComment.parentId === commendId)
      .sort(
        (a, b) => 
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )      
  };
  
const addComment = (text, parentId) => {
  console.log('addComment', text, parentId);
  createComment(text, parentId).then(comment => {
    setBackendComments([comment, ...backendComments]);
  })

}

  console.log('backendComments', backendComments)
  useEffect(() => {
  getComments().then(data => {
    setBackendComments(data);
  })
  }, [])
  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title"> Write comment</div>
      <CommentForm submitLabel = "댓글등록" handleSubmit={addComment} />
      <div className="comments-container">
      {rootComments.map((rootComment) => (
        <Comment key={rootComment.id} comment={rootComment}
        replies={getReplise(rootComment.id)} />
      ))}
      </div>
      </div>
  )
}

export default Comments;
