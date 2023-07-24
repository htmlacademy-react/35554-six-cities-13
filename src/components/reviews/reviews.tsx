import FormReviews from '../form-reviews/form-reviews';
import {Comments} from '../../types/comments';

type ReviewsProps = {
  comments: Comments;
};

function Reviews({comments}: ReviewsProps):JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((item) => {
          const {id, comment, data, rating, user} = item;
          return (
            <li className="reviews__item" key={id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54"
                    alt="Reviews avatar"
                  />
                </div>
                <span className="reviews__user-name">{user.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: `${Math.floor(rating) * 20}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {comment}
                </p>
                <time className="reviews__time" dateTime="2019-04-24">{data}</time>
              </div>
            </li>
          );
        })}
      </ul>
      <FormReviews />
    </section>
  );
}

export default Reviews;
