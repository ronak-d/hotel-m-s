import React, { useEffect } from "react";
import axios from "axios";

const Hotels = () => {
  useEffect(() => {
    const Url = "https://booking-com.p.rapidapi.com/v1/hotels/search";
    const apiKey = "b038d947admsh5d40e69154679f1p14c275jsn8bf445dca1c9";

    const searchParams = {
      filter_by_currency: "AED",
      dest_id: "-553173",
      order_by: "popularity",
      checkin_date: "2023-09-23",
      dest_type: "city",
      adults_number: "1",
      room_number: "1",
      checkout_date: "2023-09-24",
      locale: "en-gb",
      units: "metric",
      include_adjacency: "true",
      categories_filter_ids: "class::2,class::4,free_cancellation::1",
      page_number: "0",
      children_ages: "5,0",
      children_number: "1",
    };

    axios
      .get(Url, {
        headers: {
          "X-RapidAPI-Key": apiKey,
        },
        params: searchParams,
      })
      .then((response) => {
        console.log(response.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div>Hotels</div>;
};

export default Hotels;
