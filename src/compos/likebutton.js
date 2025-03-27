import React from 'react';
import { Button } from 'react-bootstrap';

const like = '/assets/images/like.svg';

//Tout est dans le nom du composant
const CommentLikeButton = ({ comment, likeComment }) => {

  const { id, likes = 0, likedByUser = false } = comment;

  return (
    <Button
      className='likeButton d-flex align-items-center'
      size="sm"
      onClick={() => likeComment(id)}
      disabled={false}
    >
      <img className="like me-1" src={like} alt="Like" />
      <span>{likes}</span>
    </Button>
  );
};

export default CommentLikeButton;