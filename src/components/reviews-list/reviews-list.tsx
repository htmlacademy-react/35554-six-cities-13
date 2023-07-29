import {Comments} from '../../types/comments';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  comments: Comments;
};

function ReviewsList({comments}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewsItem key={comment.id} commentItem={comment} />
      ))}
    </ul>
  );
}

export default ReviewsList;
