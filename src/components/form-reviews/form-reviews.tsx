import {ChangeEvent, Fragment, useState} from 'react';

function FormReviews(): JSX.Element {
  const ratingValues = [
    5,
    4,
    3,
    2,
    1,
  ];
  const [formData, setFormData] = useState({
    rating: '',
    comment: '',
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setFormData({...formData, rating: value});
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setFormData({...formData, comment: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingValues.map((ratingValue) => (
          <Fragment key={ratingValue}>
            <input className="form__rating-input visually-hidden" name="rating" value={ratingValue}
              id={`${ratingValue}-stars`} type="radio" onChange={handleInputChange}
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
        onChange={handleTextareaChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

export default FormReviews;
