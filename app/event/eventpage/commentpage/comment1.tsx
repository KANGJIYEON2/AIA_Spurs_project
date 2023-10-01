import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Comment = ({ comment, replies }: any) => {
    return (
        <Box className="comment">
            <Box className="comment-right-part">
                <Box className="comment-content" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <AccountCircleIcon />
                        <Box>{comment.username}</Box>
                        <Box sx={{ marginLeft: '10px' }}>{comment.createdAt}</Box>
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '8px' }}>{comment.body}</Typography>
                </Box>
                {replies.length > 0 && (
                    <Box className="replies">
                        {replies.map((reply: any) => (
                            <Comment
                                comment={reply}
                                key={reply.id}
                                replies={[]}
                            />
                        ))}
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Comment;
