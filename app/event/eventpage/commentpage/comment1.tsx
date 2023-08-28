import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Comment = ({comment, replies}:any) => {
  return (
    <div className="comment">
      <div className="comment-image-container">
    <AccountCircleIcon />
      </div>
      <div className='comment-right-part'>
        <div className='comment-content'>
        <div className='comment-author'>{comment.username}</div>
      <div>{comment.createdAt}</div>
      </div>
      <div className='comment-text'> {comment.body} </div>
      {replies.length > 0 && (
        <div className='replies'>
          {replies.map((reply:any) => (
            <Comment comment={reply} key={reply.id} replies={[]} />
          ))}
  </div>
      )}
    </div>
    </div>
  )
}

export default Comment;