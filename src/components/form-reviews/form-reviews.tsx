import {ChangeEvent, FormEvent, Fragment, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {postNewReviewAction} from '../../store/api-actions';
import {setReviewPostedStatus} from '../../store/action';

type FormReviewsProps = {
  offerId: string;
};

function FormReviews({offerId}: FormReviewsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const ratingValues = [5, 4, 3, 2, 1,];
  const [detailsReview, setDetailsReview] = useState({
    rating: 0,
    comment: '',
    offerId: offerId,
  });
  const isReviewPosted = useAppSelector((state) => state.isReviewPosted);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onReviewSubmit = (rating: number, comment: string) => {
    dispatch(postNewReviewAction({offerId, comment, rating}));
  };

  const isFormValid = detailsReview.rating !== 0 && detailsReview.comment.length >= 50
    && detailsReview.comment.length <= 300;

  const handleFormReviewSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    onReviewSubmit(detailsReview.rating, detailsReview.comment);

    if (isReviewPosted) {
      evt.target.reset();
      setDetailsReview({rating: 0, comment: '', offerId});
      dispatch(setReviewPostedStatus(false));
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    if (isFormValid) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  });

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormReviewSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingValues.map((ratingValue) => (
          <Fragment key={ratingValue}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={ratingValue}
              id={`${ratingValue}-stars`}
              type="radio"
              onChange={(evt:ChangeEvent<HTMLInputElement>) =>
                setDetailsReview({...detailsReview, rating: Number(evt.target.value)})}
            />
            <label htmlFor={`${ratingValue}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>

      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
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
          disabled={isSubmitDisabled || isSubmitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormReviews;
