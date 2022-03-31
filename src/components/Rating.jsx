import { useEffect, useState } from 'react';

const Rating = ({ number, selected = false, onSelect }) => {
  return (
    <li className={selected ? 'selected-rating' : ''} onClick={onSelect}>
      {number}
    </li>
  );
};

export default Rating;
