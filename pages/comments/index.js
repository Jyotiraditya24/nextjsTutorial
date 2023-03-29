import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([{}]);
  const [comment, setcomment] = useState("");
  async function fetchComments() {
    const response = await fetch("api/comments");
    const data = await response.json();
    setComments(data);
  }
  const sumbitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(response);
    fetchComments();
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setcomment(e.target.value)}
      />
      <button onClick={sumbitComment}>Submit comment </button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
            <button onClick={()=>deleteComment(comment.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default CommentsPage;
