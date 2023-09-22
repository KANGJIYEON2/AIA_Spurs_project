import React, { useEffect, useState } from "react";
import Comment from "./comment1";
import CommentForm from "./commentForm1";
import { useSession } from "next-auth/react";

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
            body: "손흥민 선수 화이팅!",
            username: "홍길동",
            userId: "1",
            parentId: null,
            createdAt: "2021-08-16",
        },
    ];
};

export const createComment = async (
    text: string,
    parentId: string | null = null,
    username: string = "관리자",
    userId: string = "1"
): Promise<CommentType> => {
    return {
        id: Math.random().toString(36).substring(2, 9),
        body: text,
        parentId,
        userId,
        username,
        createdAt: new Date().toISOString(),
    };
};

const Comments: React.FC = () => {
    const [backendComments, setBackendComments] = useState<CommentType[]>([]);
    const { data: session } = useSession();

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    };

    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );

    const getReplies = (commentId: string): CommentType[] => {
        return backendComments
            .filter((backendComment) => backendComment.parentId === commentId)
            .sort(
                (a, b) =>
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
            );
    };

    const addComment = (text: string, parentId: string | null) => {
        if (!session || !session.user) {
            alert("로그인이 필요합니다.");
            return;
        }

        const userName = session.user.name || "관리자";

        createComment(text, parentId, userName).then((comment) => {
            setBackendComments([comment, ...backendComments]);
        });
    };

    useEffect(() => {
        getComments().then((data) => {
            setBackendComments(data);
        });
    }, []);

    return (
        <div className="comments">
            <h3 className="comments-title">댓글 등록</h3>
            <div className="comment-form-title">
                {" "}
                선수들을 위해 응원 댓글을 써주세요
            </div>
            <CommentForm submitLabel="댓글등록" handleSubmit={addComment} />
            <div className="comments-container">
                {rootComments.map((rootComment) => (
                    <Comment
                        key={rootComment.id}
                        comment={{
                            ...rootComment,
                            createdAt: formatDate(rootComment.createdAt),
                        }}
                        replies={getReplies(rootComment.id).map((reply) => ({
                            ...reply,
                            createdAt: formatDate(reply.createdAt),
                        }))}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;
