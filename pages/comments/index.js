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
            <p>{comment.id}</p>
            <p>{comment.text}</p>
          </div>
        );
      })}
    </>
  );
}

export default CommentsPage;
