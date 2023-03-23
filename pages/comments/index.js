import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([{}]);
  async function fetchComments() {
    const response = await fetch("api/comments");
    const data = await response.json();
    setComments(data);
  }
  return (
    <>
      <button onClick={fetchComments}>Load Comments</button>
      {
        comments.map((comment)=>{
            return (
                <div key={comment.id}>
                    <p>{comment.id}</p>
                    <p>{comment.text}</p>
                </div>
            )
        })
      }
    </>
  );
}

export default CommentsPage;
