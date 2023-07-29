import FormReviews from '../form-reviews/form-reviews';
import {Comments} from '../../types/comments';
import ReviewsList from '../reviews-list/reviews-list';

type ReviewsProps = {
  comments: Comments;
};

function Reviews({comments}: ReviewsProps):JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewsList comments={comments} />
      <FormReviews />
    </section>
  );
}

export default Reviews;
