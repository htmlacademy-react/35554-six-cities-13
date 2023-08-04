import FormReviews from '../form-reviews/form-reviews';
import {Reviews} from '../../types/reviews';
import ReviewsList from '../reviews-list/reviews-list';

type ReviewsProps = {
  reviews: Reviews;
};

function Reviews({reviews}: ReviewsProps):JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewsList reviews={reviews} />
      <FormReviews />
    </section>
  );
}

export default Reviews;
