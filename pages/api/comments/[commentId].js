import { comments } from "@/data/comments";
import { useContext } from "react";

export function Comment({ comment }) {
  return (
    <div>
      <h1>
        id: {comment.id}. {comment.text}
      </h1>
    </div>
  );
}

export default async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: 1 } },
      { params: { commentId: 2 } },
      { params: { commentId: 3 } },
    ],
    fallback: false,
  };
}

export default async function getStaticProps(context){
  const {params} = context;
  const {commentId} = params;
  /* DONOT call the own api route from getStaticProps or getStaticProps */
  const comment = comments.find((comment)=> comment.id === commentId);
  return {
    props: {
      comment
    }
  }
}
