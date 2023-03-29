import React, { useEffect, useState } from "react";
import axios from "axios";
import HotelCards from "../Components/HotelCards/HotelCards";

const Hotels = () => {
  const [hotelsArr, setHotelsArr] = useState("");

  useEffect(() => {
    const Url = "https://booking-com.p.rapidapi.com/v1/static/hotels";
    // const Url = "https://booking-com.p.rapidapi.com/v1/hotels/locations";
    const apiKey = "b038d947admsh5d40e69154679f1p14c275jsn8bf445dca1c9";

    const searchParams = {
      page: "0",

      // name: "India",
      // locale: "en-gb",

      // filter_by_currency: "AED",
      // dest_id: "-553173",
      // order_by: "popularity",
      // checkin_date: "2023-09-23",
      // dest_type: "city",
      // adults_number: "1",
      // room_number: "1",
      // checkout_date: "2023-09-24",
      // locale: "en-gb",
      // units: "metric",
      // include_adjacency: "true",
      // categories_filter_ids: "class::2,class::4,free_cancellation::1",
      // page_number: "0",
      // children_ages: "5,0",
      // children_number: "1",
    };

    axios
      .get(Url, {
        headers: {
          "X-RapidAPI-Key": apiKey,
        },
        params: searchParams,
      })
      .then((response) => {
        setHotelsArr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <HotelCards hotelsArr={hotelsArr} />
    </>
  );
};

export default Hotels;
