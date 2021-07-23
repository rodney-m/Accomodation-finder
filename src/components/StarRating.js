import React, { useState } from "react";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";

function StarRating({currentRating}) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);


  return (
    <div className="StarRating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              
            />
            <FaStar
              className="star"
              size={20}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={()=> setHover(ratingValue)}
              onMouseLeave={()=> setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
