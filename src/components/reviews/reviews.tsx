import FormReviews from '../form-reviews/form-reviews';
import {TReviews} from '../../types/reviews';
import ReviewsList from '../reviews-list/reviews-list';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus, MAX_COUNT_REVIEWS} from '../../const';
import {sortByDay} from '../../utils/offers';

type ReviewsProps = {
  reviews: TReviews;
  offerId: string;
};

function Reviews({reviews, offerId}: ReviewsProps):JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const reviewsToShow = [...reviews].sort(sortByDay).slice(0, MAX_COUNT_REVIEWS);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewsList reviews={reviewsToShow} />
      {authorizationStatus === AuthorizationStatus.Auth && <FormReviews offerId={offerId} />}
    </section>
  );
}

export default Reviews;
