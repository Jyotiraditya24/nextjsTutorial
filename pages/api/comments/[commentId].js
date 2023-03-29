import { comments } from "@/data/comments";

// for delete we need an id so we have created a dynamic route
export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  res.status(200).json(comment);
}
