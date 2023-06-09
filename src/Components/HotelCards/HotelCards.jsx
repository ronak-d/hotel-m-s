import React from "react";
import { Link } from "react-router-dom";

const HotelCards = ({ loading, hotelsArr }) => {
  console.log(hotelsArr, "hotelArr");
  if (hotelsArr.length > 0) {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          // gridTemplateRows: "repeat(1,4)",
          // gridTemplateColumns: "repeat(1,4)",
          overflow: "scroll",
        }}
      >
        {hotelsArr.splice(0, 10).map((e) => {
          return (
            <div
              key={e.hotel_id}
              class="card"
              style={{ width: "18rem", margin: "10px" }}
            >
              <img class="card-img-top" src="..." alt="Card image cap" />
              <div class="card-body align-items-end">
                <h5 class="card-title">{e.name}</h5>
                <h5 class="card-title">{` Id: ${e.hotel_id}`}</h5>
                <p class="card-text">{e.hotel_description}</p>
                <h5 class="card-title">{` City: ${e.city}`}</h5>
                <a href="#" class="btn btn-primary">
                  See Details
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div class="spinner-border text-center" role="status">
        <span class="sr-only"></span>
      </div>
    );
  }
};

export default HotelCards;
