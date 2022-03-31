import { useState } from 'react';
import './App.css';
import { FaStar } from 'react-icons/fa';
import RatingScale from './components/RatingScale';

function App() {
  const [isHidden, setHidden] = useState(false);
  const [ratingCount, setRatingCount] = useState(5);
  const [selectedRating, setSelectedRating] = useState(0);

  const selectRating = (rating) => {
    console.log(rating);
    setSelectedRating(rating);
  };

  return (
    <div className="app">
      <form className={isHidden ? 'container' : 'container'}>
        <div className={isHidden ? 'state-rating hidden' : 'state-rating'}>
          <div className="star-icon">
            <FaStar />
          </div>
          <div className="text">
            <h3>How did we do?</h3>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us imrpove our offering!
            </p>
          </div>
          <RatingScale ratingCount={ratingCount} selectRating={selectRating} />
          <button
            type="submit"
            className="submit"
            onClick={(e) => {
              e.preventDefault();
              setHidden(!isHidden);
            }}
          >
            Submit
          </button>
        </div>
        <div className={!isHidden ? 'state-thanks hidden' : 'state-thanks'}>
          <img src="illustration-thank-you.svg" alt="" />
          <p className="selected-rating-text">
            You selected {selectedRating} out of {ratingCount}
          </p>
          <h2>Thank you!</h2>
          <p>
            We appreaciate you taking the time to give a rating. If you ever
            need more support, don't hesitate to get in touch!
          </p>
          <button
            type="submit"
            className="submit"
            onClick={(e) => {
              e.preventDefault();
              setHidden(!isHidden);
            }}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
