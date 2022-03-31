import { useEffect, useState } from 'react';
import Rating from './Rating';

const RatingScale = ({ ratingCount, selectRating }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [number, setnumber] = useState([]);

  for (let index = 1; index <= ratingCount; index++) {
    if (number.length > ratingCount) setnumber([]);
    number.push(index);
  }

  return (
    <div className="ratings">
      <ul>
        {number.map((number, i) => {
          return (
            <Rating
              key={i}
              number={number}
              selected={selectedRating > i}
              onSelect={() => {
                setSelectedRating(i + 1);
                selectRating(i + 1);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RatingScale;
