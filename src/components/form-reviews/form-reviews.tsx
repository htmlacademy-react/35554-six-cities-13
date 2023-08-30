import {ChangeEvent, FormEvent, Fragment, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {postNewReviewAction} from '../../store/api-actions';
import {CommentLength, RATING_VALUES} from '../../const';
import {getIsReviewPosted} from '../../store/data-process/selectors';
import {setReviewPostedStatus} from '../../store/data-process/data-process';

type FormReviewsProps = {
  offerId: string;
};

function FormReviews({offerId}: FormReviewsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [detailsReview, setDetailsReview] = useState({
    rating: 0,
    comment: '',
    offerId: offerId,
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isReviewPosted = useAppSelector(getIsReviewPosted);

  const isFormValid = detailsReview.rating !== 0 && detailsReview.comment.length >= CommentLength.Min
    && detailsReview.comment.length <= CommentLength.Max;

  const handleFormReviewSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    dispatch(postNewReviewAction({
      offerId,
      comment: detailsReview.comment,
      rating: detailsReview.rating
    })).then(() => {
      setIsSubmitting(false);
    });
  };

  useEffect(() => {
    if (isFormValid) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [isFormValid]);

  useEffect(() => {
    if (isReviewPosted) {
      setDetailsReview({rating: 0, comment: '', offerId});
      dispatch(setReviewPostedStatus(null));
    }
  }, [isReviewPosted, offerId, dispatch]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormReviewSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_VALUES.map((value, index,) => {
          const currentIndex = RATING_VALUES.length - index;
          return (
            <Fragment key={currentIndex}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={currentIndex}
                id={`${currentIndex}-stars`}
                type="radio"
                checked={+detailsReview.rating === currentIndex}
                disabled={isSubmitting}
                required
                onChange={(evt:ChangeEvent<HTMLInputElement>) =>
                  setDetailsReview({...detailsReview, rating: Number(evt.target.value)})}
              />
              <label
                htmlFor={`${currentIndex}-stars`}
                className="reviews__rating-label form__rating-label"
                title={value}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={detailsReview.comment}
        required
        disabled={isSubmitting}
        onChange={(evt:ChangeEvent<HTMLTextAreaElement>) =>
          setDetailsReview({...detailsReview, comment: evt.target.value})}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled || isSubmitting || !isFormValid}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default FormReviews;
