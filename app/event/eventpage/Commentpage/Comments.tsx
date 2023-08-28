import React, { useEffect, useState } from "react";
import Comment from "./comment";
import CommentForm from "./commentForm";

interface CommentType {
  id: string;
  body: string;
  username: string;
  userId: string;
  parentId: string | null;
  createdAt: string;
}

export const getComments = async (): Promise<CommentType[]> => {
  return [
    {
      id: "1",
      body: "First commment",
      username: "홍길동",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text: string, parentId: string | null = null): Promise<CommentType> => {
  return {
    id: Math.random().toString(36).substring(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "관리자",
    createdAt: new Date().toISOString(),
  };
};

interface CommentsProps {
  currentUserId: string;
}

const Comments: React.FC<CommentsProps> = ({ currentUserId }) => {
  const [backendComments, setBackendComments] = useState<CommentType[]>([]);
  const rootComments = backendComments.filter(backendComment => backendComment.parentId === null);

  const getReplies = (commentId: string): CommentType[] => {
    return backendComments
      .filter(backendComment => backendComment.parentId === commentId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  };

  const addComment = (text: string, parentId: string | null) => {
    createComment(text, parentId).then(comment => {
      setBackendComments([comment, ...backendComments]);
    });
  }

  useEffect(() => {
    getComments().then(data => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title"> Write comment</div>
      <CommentForm submitLabel="댓글등록" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
